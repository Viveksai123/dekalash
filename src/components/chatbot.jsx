import React, { useState, useEffect, useCallback } from 'react';
import { MessageCircle, Send, X, WifiOff, AlertCircle, Loader } from 'lucide-react';

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatResponse, setChatResponse] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [connectionAttempts, setConnectionAttempts] = useState(0);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const deployedChatbotURL = 'https://your-chatbot-url.com/api/chat';

  // Memoize error messages to prevent unnecessary re-renders
  const errorMessages = useCallback(() => ({
    NETWORK_ERROR: "Network connection lost. Please check your internet connection.",
    SERVER_ERROR: "Server error occurred. Please try again later.",
    TIMEOUT_ERROR: "Request timed out. Please try again.",
    RATE_LIMIT_ERROR: "Too many requests. Please wait a moment before trying again.",
    AUTH_ERROR: "Authentication failed. Please refresh the page.",
    VALIDATION_ERROR: "Invalid input. Please check your message.",
    MAX_LENGTH_ERROR: "Message too long. Please shorten your message.",
    EMPTY_MESSAGE: "Please enter a message before sending.",
    MAINTENANCE_ERROR: "Service is under maintenance. Please try again later.",
    API_ERROR: "API error occurred. Please try again.",
    CONNECTION_ERROR: `Connection failed (Attempt ${connectionAttempts}/3). Retrying...`,
    UNKNOWN_ERROR: "An unknown error occurred. Please try again."
  }), [connectionAttempts]);

  // Check online status
  useEffect(() => {
    const messages = errorMessages();
    
    const handleOnline = () => {
      setIsOnline(true);
      setError(null);
    };
    
    const handleOffline = () => {
      setIsOnline(false);
      setError(messages.NETWORK_ERROR);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [errorMessages]);

  // Handle chatbot button visibility
  useEffect(() => {
    const handleScroll = () => {
      setIsButtonVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const validateMessage = (message) => {
    const messages = errorMessages();
    if (!message.trim()) {
      throw new Error(messages.EMPTY_MESSAGE);
    }
    if (message.length > 500) {
      throw new Error(messages.MAX_LENGTH_ERROR);
    }
  };

  const handleApiErrors = (status) => {
    const messages = errorMessages();
    switch (status) {
      case 400:
        return messages.VALIDATION_ERROR;
      case 401:
        return messages.AUTH_ERROR;
      case 429:
        return messages.RATE_LIMIT_ERROR;
      case 503:
        return messages.MAINTENANCE_ERROR;
      default:
        return messages.SERVER_ERROR;
    }
  };

  const sendMessageToChatbot = async () => {
    const messages = errorMessages();
    setError(null);
    setIsLoading(true);

    try {
      validateMessage(userMessage);

      // Simulate random errors for demonstration
      const randomError = Math.random();
      if (randomError < 0.2) throw new Error(messages.TIMEOUT_ERROR);
      if (randomError < 0.4) throw new Error(messages.SERVER_ERROR);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(deployedChatbotURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(handleApiErrors(response.status));
      }

      const data = await response.json();
      if (!data.chatbotResponse) {
        throw new Error(messages.API_ERROR);
      }

      setChatResponse(data.chatbotResponse);
      setUserMessage('');
      setConnectionAttempts(0);
    } catch (error) {
      console.error('Error:', error);
      
      if (error.name === 'AbortError') {
        setError(messages.TIMEOUT_ERROR);
      } else if (!navigator.onLine) {
        setError(messages.NETWORK_ERROR);
      } else if (connectionAttempts < 3) {
        setConnectionAttempts(prev => prev + 1);
        setError(messages.CONNECTION_ERROR);
        setTimeout(() => sendMessageToChatbot(), 2000);
      } else {
        setError(error.message || messages.UNKNOWN_ERROR);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans"> {/* Base font family */}
    {/* Main Chatbot Container */}
    <div
      className={`fixed bottom-4 right-4 z-50 transition-all duration-500 ease-in-out
        ${isButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} 
        ${isChatOpen ? 'scale-100' : 'scale-0'} 
        rounded-2xl overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900
        font-inter tracking-normal`} // Added font family and letter spacing
      style={{
        width: '350px',
        height: isChatOpen ? '500px' : '0px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      }}
    >
      {isChatOpen && (
        <div className="flex flex-col h-full">
          {/* Chat Header */}
          <div className="p-4 bg-gray-800 border-b border-gray-700 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
              <div class="d-flex flex-column justify-content-center align-items-start">
              <h3 className="text-white font-semibold text-lg tracking-tight">Noodles</h3>
              <p className='text-white'> Hi I'm Chat Assistant</p>
              </div>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>

          {/* Network Status Banner */}
          {!isOnline && (
            <div className="bg-red-500/80 p-2 text-white text-sm font-medium tracking-wide flex items-center justify-center space-x-2">
              <WifiOff size={16} />
              <span>You're offline. Waiting for connection...</span>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <div className="bg-red-500/80 p-3 text-white text-sm font-medium tracking-wide flex items-center space-x-2 animate-fadeIn">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-900/50">
            {chatResponse && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <MessageCircle size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none text-white text-sm font-normal leading-relaxed">
                      {chatResponse}
                    </div>
                    <span className="text-xs text-gray-500 mt-1 inline-block font-mono">
                      {new Date().toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-gray-800/90 border-t border-gray-700">
            <div className="relative">
              <textarea
                className={`w-full p-3 pr-12 bg-gray-900 text-white rounded-lg resize-none 
                  focus:outline-none focus:ring-2 transition-shadow
                  ${error ? 'focus:ring-red-500 border-red-500' : 'focus:ring-blue-500'}
                  text-sm font-normal leading-relaxed placeholder-gray-400`}
                placeholder={isOnline ? "Type your message..." : "Waiting for connection..."}
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                disabled={!isOnline || isLoading}
                rows="2"
              ></textarea>
              <button
                className={`absolute right-2 bottom-2 p-2 rounded-lg transition-all duration-200 
                  ${isLoading || !isOnline ? 'bg-gray-700 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                onClick={sendMessageToChatbot}
                disabled={isLoading || !isOnline}
              >
                {isLoading ? (
                  <Loader size={18} className="text-white animate-spin" />
                ) : (
                  <Send size={18} className="text-white transform transition-transform hover:scale-110" />
                )}
              </button>
            </div>
            {/* Character count */}
            <div className="text-xs text-gray-500 mt-1 font-mono">
              {userMessage.length}/500 characters
            </div>
          </div>
        </div>
      )}
    </div>

    {/* Chat Toggle Button */}
    <button
      className={`fixed bottom-4 right-4 z-50 transition-all duration-500 ease-in-out
        ${isButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} 
        ${isChatOpen ? 'scale-0' : 'scale-100'}
        w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 
        hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 
        focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl
        transform hover:-translate-y-1`}
      onClick={() => setIsChatOpen(true)}
    >
      <MessageCircle className="w-6 h-6 text-white mx-auto" />
    </button>

    {/* Backdrop */}
    {isChatOpen && (
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 
          transition-opacity duration-500 ease-in-out"
        onClick={() => setIsChatOpen(false)}
      />
    )}

    <style jsx>{`
      /* Font imports */
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');

      /* Rest of your existing styles... */
      
      /* Typography overrides */
      .font-inter {
        font-family: 'Inter', system, -apple-system, sans-serif;
      }

      .font-mono {
        font-family: 'JetBrains Mono', monospace;
      }

      /* Line height adjustments */
      .leading-relaxed {
        line-height: 1.625;
      }

      /* Font smoothing */
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `}</style>
  </div>
);
};

export default Chatbot;
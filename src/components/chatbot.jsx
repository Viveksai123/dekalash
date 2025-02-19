import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, X, AlertCircle, Loader } from 'lucide-react';

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const API_KEY = 'ye06uBZ1.il21ZJxd0CpcWE3DbdC2GXpOjEXur9PD';
  const CHANNEL_TOKEN = 'cybernexa_final';
  const deployedChatbotURL = `https://payload.vextapp.com/hook/MX354AUWLX/catch/${CHANNEL_TOKEN}`;

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setError(null);
    };
    
    const handleOffline = () => {
      setIsOnline(false);
      setError("You're offline. Please check your connection.");
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsButtonVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sendMessageToChatbot = async () => {
    if (!userMessage.trim()) return;
    
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(deployedChatbotURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Apikey': `Api-Key ${API_KEY}`
        },
        body: JSON.stringify({
          payload: userMessage
        })
      });

      const data = await response.json();
      console.log('Server response:', data);
      
      // Add user message
      setMessages(prev => [...prev, {
        type: 'user',
        content: userMessage,
        timestamp: new Date()
      }]);

      // Add bot response
      if (data && data.text) {
        setMessages(prev => [...prev, {
          type: 'bot',
          content: data.text,
          timestamp: new Date()
        }]);
      }
      
      setUserMessage('');
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans antialiased">
      <div
        className={`fixed bottom-4 right-4 z-50 transition-all duration-500 ease-in-out
          ${isButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} 
          ${isChatOpen ? 'scale-100' : 'scale-0'} 
          rounded-2xl bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950
          shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-lg border border-slate-700/50`}
        style={{
          width: '380px',
          height: isChatOpen ? '600px' : '0px',
        }}
      >
        {isChatOpen && (
          <div className="flex flex-col h-full">
            {/* Chat Header */}
            <div className="p-4 bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700/50 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-emerald-500' : 'bg-red-500'} 
                      ${isOnline ? 'animate-pulse' : ''}`}
                    ></div>
                    <div className={`absolute inset-0 w-3 h-3 rounded-full ${isOnline ? 'bg-emerald-500' : 'bg-red-500'} 
                      animate-ping opacity-75`}
                    ></div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg tracking-tight">Noodles</h3>
                    <p className="text-slate-300 text-sm">AI Chat Assistant</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors duration-200
                    hover:bg-slate-700/50 rounded-lg p-2"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Error Display */}
            {error && (
              <div className="bg-red-500/90 backdrop-blur-sm p-3 text-white text-sm font-medium 
                flex items-center gap-2 animate-slideDown border-b border-red-600">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-slate-900/50 to-slate-950/50">
              <div className="space-y-6">
                {messages.map((message, index) => (
                  <div key={index} 
                    className={`flex items-start gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                      ${message.type === 'user' 
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500' 
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500'}`}
                    >
                      <MessageCircle size={16} className="text-white" />
                    </div>
                    <div className={`max-w-[75%] ${message.type === 'user' ? 'text-right' : ''}`}>
                      <div className={`p-3 rounded-2xl shadow-md inline-block
                        ${message.type === 'user' 
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-tr-none' 
                          : 'bg-gradient-to-r from-slate-800 to-slate-900 text-slate-100 rounded-tl-none'}`}
                      >
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                      <div className="text-xs text-slate-400 mt-1 px-1">
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-gradient-to-r from-slate-800 to-slate-900 border-t border-slate-700/50 rounded-b-2xl">
              <div className="relative">
                <textarea
                  className={`w-full px-4 py-3 pr-12 bg-slate-950/50 text-white rounded-xl resize-none
                    placeholder-slate-400 border border-slate-700/50
                    focus:outline-none focus:ring-2 transition-all duration-200
                    ${error ? 'focus:ring-red-500/50' : 'focus:ring-blue-500/50'}
                    text-sm`}
                  placeholder={isOnline ? "Type your message..." : "Waiting for connection..."}
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  disabled={!isOnline || isLoading}
                  rows="2"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      sendMessageToChatbot();
                    }
                  }}
                />
                <button
                  className={`absolute right-2 bottom-2 p-2 rounded-lg transition-all duration-200
                    ${isLoading || !isOnline 
                      ? 'bg-slate-700 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 hover:shadow-lg'}`}
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
            </div>
          </div>
        )}
      </div>

      {/* Chat Toggle Button */}
      <button
        className={`fixed bottom-4 right-4 z-50 transition-all duration-500 ease-in-out
          ${isButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} 
          ${isChatOpen ? 'scale-0' : 'scale-100'}
          w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500
          hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 
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
    </div>
  );
};

export default Chatbot;
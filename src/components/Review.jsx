import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const reviewsData = [
  {
    id: 1,
    name: "M M",
    date: "15 days ago",
    review: "Tina did an amazing hybrid wispy cat eye set on me.",
    stars: 5,
    platform: "Google",
  },
  {
    id: 2,
    name: "Aiysha L",
    date: "29 days ago",
    review: "Briana was amazing and professional. I highly recommend her!",
    stars: 5,
    platform: "Google",
  },
  {
    id: 3,
    name: "Theresa Lopa",
    date: "1 month ago",
    review: "Diana was great!",
    stars: 5,
    platform: "Google",
  },
  {
    id: 4,
    name: "Maxcine Crawford",
    date: "1 month ago",
    review:
      "Wonderful experience! Thanks so much, Diana, you're the best!",
    stars: 5,
    platform: "Facebook",
  },
  {
    id: 5,
    name: "Katie Brown",
    date: "1 month ago",
    review: "Friendly staff, very welcoming experience! Briana was amazing.",
    stars: 5,
    platform: "Google",
  },
  {
    id: 6,
    name: "Hayley Brown",
    date: "2 months ago",
    review:
      "I had a lash lift and tint as well as a brow waxing with Diana. Amazing!",
    stars: 5,
    platform: "Facebook",
  },
  {
    id: 7,
    name: "Katie Brown",
    date: "1 month ago",
    review: "Friendly staff, very welcoming experience! Briana was amazing.",
    stars: 5,
    platform: "Facebook",
  },
  {
    id: 8,
    name: "Hayley Brown",
    date: "2 months ago",
    review:
      "I had a lash lift and tint as well as a brow waxing with Diana. Amazing!",
    stars: 5,
    platform: "Facebook",
  },
];

const ReviewCard = ({ review }) => (
  <div className="background flex flex-column justify-between rounded-lg shadow-lg p-8 space-y-2 w-full">
    {/* User Info */}
    <div className="flex items-start justify-start space-x-3">
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xl font-semibold text-gray-600">
        {review.name.charAt(0)}
      </div>
      <div className="flex flex-column items-start justify-center p-0">
        <p className="font-medium mb-0">{review.name}</p>
        <p className="text-gray-400 text-sm">{review.date}</p>
      </div>
    </div>

    {/* Star Rating */}
    <div className="flex space-x-1">
      {Array.from({ length: review.stars }, (_, i) => (
        <FaStar key={i} className="text-yellow-400" />
      ))}
    </div>

    {/* Review Text */}
    <p className="text-gray-700">{review.review}</p>

    {/* Platform */}
    <div className="flex flex-row items-start justify-start space-x-2 mt-4">
      {review.platform === "Google" ? (
        <FcGoogle size={20} />
      ) : (
        <FaFacebook size={20} className="text-blue-600" />
      )}
      <p className="text-sm text-gray-500">Posted on {review.platform}</p>
    </div>
  </div>
);

const ReviewsSection = () => {
  const [reviews, setReviews] = useState(reviewsData.slice(0, 1));
  const [filter, setFilter] = useState("All");

  const filteredReviews = reviews.filter((review) =>
    filter === "All" ? true : review.platform === filter
  );

  const handleFilterChange = (platform) => {
    setFilter(platform);
  };

  

  return (
    <section className="py-12 px-6 bg-gray-50">
      {/* Heading */}
      <h2 className="text-4xl font-semibold text-center text-gray-800 m-8">
        Hear What Our Guests Have To Say
      </h2>

      {/* Filter Bar */}
      <div className="flex justify-center items-center space-x-4 m-10">
        <button
          className={`px-4 py-2 rounded-lg ${
            filter === "All"
              ? "bg-gray-800 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleFilterChange("All")}
        >
          All Reviews <span className="font-bold">4.9</span>
        </button>
        <button
          className={`px-4 py-2 flex flex-row justify-between items-center rounded-lg ${
            filter === "Google"
              ? "bg-gray-800 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleFilterChange("Google")}
        >
        <FcGoogle size={18} />  Google 
        </button>
        <button
          className={`px-4 py-2 flex flex-row justify-between items-center rounded-lg ${
            filter === "Facebook"
              ? "bg-gray-800 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleFilterChange("Facebook")}
        >
          <FaFacebook className="text-blue-600" size={18} />  Facebook
        </button>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* Load More Button */}
    
    </section>
  );
};

export default ReviewsSection;

import React from "react";
import { ThumbsUp } from "lucide-react";

const Rating = () => {
  const reviews = [
    {
      initial: "B",
      name: "Bright Brothers Ltd",
      location: "Pune, Maharashtra",
      date: "12-May-25",
      rating: 5,
      product: "Chopped Strand Mat",
    },
    {
      initial: "I",
      name: "IndiaMART Buyer",
      location: "Saudi Arabia",
      date: "03-May-25",
      rating: 5,
      product: "Woven Fiberglass Roving",
    },
    {
      initial: "N",
      name: "Naser Benhameda Benhameda",
      location: "Libya",
      date: "20-May-24",
      rating: 5,
      product: "Woven Roving",
      hasResponse: true,
    },
  ];

  const ratingDistribution = [
    { stars: 5, count: 7, percentage: 87.5 },
    { stars: 4, count: 0, percentage: 0 },
    { stars: 3, count: 0, percentage: 0 },
    { stars: 2, count: 0, percentage: 0 },
    { stars: 1, count: 1, percentage: 12.5 },
  ];

  const StarRating = ({ rating }) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className="text-yellow-400 text-lg">
          ★
        </span>
      ))}
    </div>
  );

  const HalfStarRating = () => (
    <div className="flex gap-1 items-center">
      {[1, 2, 3, 4].map((star) => (
        <span key={star} className="text-yellow-400 text-3xl">
          ★
        </span>
      ))}
      <span className="text-yellow-400 text-3xl opacity-50">★</span>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-12">
        Ratings{" "}
        <span className="underline decoration-2 underline-offset-4">&</span>{" "}
        Reviews
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
        {/* Left Section - Overall Rating */}
        <div className="flex flex-col items-center">
          <div className="text-6xl font-bold mb-2">
            4.5<span className="text-3xl text-gray-500">/5</span>
          </div>
          <HalfStarRating />
          <p className="text-gray-600 mt-3">Reviewed by 8 Users</p>
        </div>

        {/* Middle Section - Rating Distribution */}
        <div className="flex flex-col gap-3">
          {ratingDistribution.map((item) => (
            <div key={item.stars} className="flex items-center gap-3">
              <span className="text-sm font-medium w-8">{item.stars}★</span>
              <div className="flex-1 bg-gray-200 rounded-full h-5 overflow-hidden">
                <div
                  className="bg-green-600 h-full rounded-full transition-all"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <span className="text-sm font-medium w-6 text-right">
                {item.count}
              </span>
            </div>
          ))}
        </div>

        {/* Right Section - User Satisfaction */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <ThumbsUp className="text-green-600" size={24} />
            <h3 className="text-xl font-semibold text-gray-700">
              User Satisfaction
            </h3>
          </div>
          <div className="space-y-4">
            {[
              { label: "Response", percentage: 66 },
              { label: "Quality", percentage: 0 },
              { label: "Delivery", percentage: 0 },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">
                    {item.label}
                  </span>
                  <span className="text-gray-700 font-medium">
                    {item.percentage}%
                  </span>
                </div>
                <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-green-600 h-full rounded-full transition-all"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Most Relevant Reviews */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Most Relevant Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-semibold text-gray-700">
                    {review.initial}
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">
                {review.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{review.location}</p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Product Name:</span>{" "}
                {review.product}
              </p>
              {review.hasResponse && (
                <div className="mt-3 flex items-center gap-2 text-green-600">
                  <span className="text-sm font-medium">Response</span>
                  <ThumbsUp size={16} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-8">
        <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          View More Reviews
        </button>
      </div>
    </div>
  );
};

export default Rating;

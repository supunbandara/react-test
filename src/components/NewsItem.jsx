import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";

const NewsItem = ({ newsItem, onNewsClick }) => {
  const { title, content, imageUrl, date } = newsItem;
  const excerpt = content.slice(0, 100) + "...";

  return (
    <div className="max-w-md w-full md:w-1/2 lg:w-1/3 p-2 mb-6">
      <div className="overflow-hidden">
        <img
          className="w-full h-52 rounded-lg object-cover"
          src={imageUrl}
          alt={title}
        />
        <div className="py-2">
          <h2 className="font-bold text-left text-lg mb-4">{title}</h2>
          <div className="flex items-center mt-2 mb-4">
            <AiOutlineCalendar className="mr-2 text-blue-500" />
            <p className="text-blue-500 text-left text-xs">{date}</p>
          </div>
          <p className="text-gray-700 text-left text-base">{excerpt}</p>
        </div>

        <div className="mt-2 flex justify-start">
          <button
            className="border border-blue-600 text-blue-500 py-2 px-4 rounded-md mt-2"
            onClick={() => onNewsClick(newsItem)}
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

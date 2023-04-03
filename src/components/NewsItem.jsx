import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";

const NewsItem = ({ newsItem, onNewsClick }) => {
  const { title, content, imageUrl, date } = newsItem;
  const excerpt = content.slice(0, 100) + "...";

  return (
    <div className="max-w-md w-full md:w-1/2 lg:w-1/3 p-2">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden min-h-auto">
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
        <div className="px-4 py-2">
          <h2 className="font-bold text-left text-lg">{title}</h2>
          <p className="text-gray-700 text-left text-base">{excerpt}</p>
          <div className="flex items-center mt-2">
            <AiOutlineCalendar className="mr-2" />
            <p className="text-gray-600 text-left text-xs">{date}</p>
          </div>
          <button
            className="text-blue-500 hover:text-blue-700 font-semibold mt-2"
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

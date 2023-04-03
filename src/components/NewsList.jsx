import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsModal from "./NewsModal";
import NewsItem from "./NewsItem";
import { IoMdArrowDropdown } from "react-icons/io";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [modalNews, setModalNews] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(
        `https://inshorts.deta.dev/news?category=${selectedCategory}`
      );
      setNews(response.data.data);
    };
    fetchNews();
  }, [selectedCategory]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleNewsClick = (newsItem) => {
    setModalNews(newsItem);
  };

  const closeModal = () => {
    setModalNews(null);
  };

  console.log(news);
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">
        Our <span className="text-blue-600">News</span>
      </h1>
      <div className="flex justify-start items-center mb-4 md:mb-4">
        <div className="relative mb-4 md:mb-0">
          <select
            className="appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="all">All</option>
            <option value="national">National</option>
            <option value="business">Business</option>
            <option value="sports">Sports</option>
            <option value="world">World</option>
            <option value="politics">Politics</option>
            <option value="technology">Technology</option>
            <option value="startup">Startup</option>
            <option value="entertainment">Entertainment</option>
            <option value="science">Science</option>
            <option value="automobile">Automobile</option>
            <option value="miscellaneous">Miscellaneous</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <IoMdArrowDropdown className="mr-2" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center w-full">
          {news.map((newsItem, index) => (
            <NewsItem
              key={index}
              newsItem={newsItem}
              onNewsClick={handleNewsClick}
            />
          ))}
        </div>
        {modalNews && (
          <NewsModal newsItem={modalNews} closeModal={closeModal} />
        )}
      </div>
    </>
  );
};

export default NewsList;

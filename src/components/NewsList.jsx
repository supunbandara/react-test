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
    const getNews = async () => {
      const newsFromServer = await fetchNews();
      setNews(newsFromServer.data);
    };
    getNews();
  }, [selectedCategory]);

  // function to fetch the news list from the API
  const fetchNews = async () => {
    const res = await fetch(
      `https://inshorts.deta.dev/news?category=${selectedCategory}`
    );
    const data = await res.json();
    return data;
  };

  // function to handle news category click
  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  // function to handle news item click
  const handleNewsClick = (newsItem) => {
    setModalNews(newsItem);
  };

  const closeModal = () => {
    setModalNews(null);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl text-left font-bold mb-4">
        Our <span className="text-blue-600">News</span>
      </h1>
      <div className="flex justify-start items-center mb-4 md:mb-4">
        <div className="flex flex-wrap justify-center my-4">
          <button
            className={`border border-blue-600 rounded-lg py-2 px-4 mx-2 my-1 ${
              selectedCategory === "all" ? "bg-blue-600 text-white" : "bg-white"
            }`}
            onClick={() => handleButtonClick("all")}
          >
            All
          </button>
          <button
            className={`border border-blue-600 rounded-lg py-2 px-4 mx-2 my-1 ${
              selectedCategory === "national"
                ? "bg-blue-600 text-white"
                : "bg-white"
            }`}
            onClick={() => handleButtonClick("national")}
          >
            National
          </button>
          <button
            className={`border border-blue-600 rounded-lg py-2 px-4 mx-2 my-1 ${
              selectedCategory === "business"
                ? "bg-blue-600 text-white"
                : "bg-white"
            }`}
            onClick={() => handleButtonClick("business")}
          >
            Business
          </button>
          <button
            className={`border border-blue-600 rounded-lg py-2 px-4 mx-2 my-1 ${
              selectedCategory === "sports"
                ? "bg-blue-600 text-white"
                : "bg-white"
            }`}
            onClick={() => handleButtonClick("sports")}
          >
            Sports
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full">
        {news.map((newsItem, index) => (
          <NewsItem
            key={index}
            newsItem={newsItem}
            onNewsClick={handleNewsClick}
          />
        ))}
      </div>
      {modalNews && <NewsModal newsItem={modalNews} closeModal={closeModal} />}
    </div>
  );
};

export default NewsList;

import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const NewsModal = ({ newsItem, closeModal }) => {
  const { title, content, imageUrl, date } = newsItem;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                <MdOutlineArrowBackIosNew className="inline-block mr-1 h-5 w-5 text-blue-600" />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h2 className="text-gray-900 font-bold text-2xl mb-6">
                  {title}
                </h2>
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full mb-6 rounded-lg"
                />
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{content}</p>
                  <div className="flex items-center mt-2">
                    <AiOutlineCalendar className="mr-2 mt-2" />
                    <p className="text-gray-600 text-xs mt-2">{date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsModal;

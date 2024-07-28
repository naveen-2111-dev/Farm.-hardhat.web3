import React from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const FarmerAuth = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />

      <div className="flex justify-center h-screen items-center bg-gradient-to-b from-black to-nor">
        <div className="bg-gradient-to-b from-nor2 to-nor p-10 w-96 sm:w-full sm:m-6 lg:w-1/2 rounded-lg">
          <div className="mb-10 flex justify-between items-center">
            <h1 className="text-gray-200 font-extrabold text-md sm:text-sm md:text-md lg:text-xl flex gap-2 text-center">
              Farmer <span className="hidden sm:flex">Authendication</span>{" "}
              <span className="flex lg:hidden xl:hidden">Auth</span>
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              class="w-8 h-8 text-gray-600 hover:scale-110 cursor-pointer"
              onClick={() => navigate("/console")}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 7l5 5-5 5M6 7l5 5-5 5"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-4">
            <input type="text" placeholder="name" className="inputBox" />
            <input type="text" placeholder="email" className="inputBox" />
            <input type="text" placeholder="phone" className="inputBox" />
            <input type="text" placeholder="fan number" className="inputBox" />
            <input type="file" id="fileInput" class="hidden" />
            <label
              for="fileInput"
              class="cursor-pointer border-2 border-dashed border-gray-600 p-6 rounded-md flex flex-col items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <span class="mt-2 text-gray-500 flex">Upload Image</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerAuth;

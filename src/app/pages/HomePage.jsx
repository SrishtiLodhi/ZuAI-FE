import React from "react";
import Image from "next/image";
import frame from "../../../public/assets/home.png";
import upload from "../../../public/assets/upload.svg";

const HomePage = () => {
  console.log("Image source:", frame);
  return (
    <div className="flex justify-center items-center container w-3/4 gap-3">
      <div className="right-section w-75">
        <h1 className="text mb-4 mb-md-2">
          Hey IB Folks! Unsure about the quality of your answers?{" "}
          <span className="text-fontColor">We get you.</span>
        </h1>
        <div className="card bg-secondaryBackground">
          <div className="border-dashed border-2 bg-white border-purple-200 rounded-lg p-6 text-center justify-center flex flex-col items-center">
            <Image src={upload} alt="home" className="mb-2" />
            <h3 className="heading-text">Drag and drop a PDF </h3>
            <p className="para-text mb-4">*Limit 25 MB per file.</p>
            <button className="upload-button">Upload your file</button>
          </div>
          <div className="flex flex-col justify-start">
            <div class="mt-6 ">
              <label class="block para-text font-medium text-gray-700">
                Select your course & subjects*
              </label>
              <div class="flex space-x-2 mt-2">
                <select class="block border border-radius p-2 border-gray-300 text-gray-700 text-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50">
                  <option>Coursework Type</option>
                </select>
                <select class="block border border-radius p-2 border-gray-300 text-gray-700 text-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50">
                  <option>Subject</option>
                </select>
              </div>
            </div>
            <div class="mt-4">
              <label class="block para-text font-medium text-gray-700">
                Enter your essay title*
              </label>
              <input
                type="text"
                class="block mt-2 border border-gray-300 border-radius p-2 text-gray-700 text-sm placeholder-gray-400 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
                placeholder="how nation works....."
              />
            </div>
            <div class="mt-6">
              <button class="px-6 py-2 border-radius bg-gray-200 text-gray-700 rounded-lg text-sm flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Evaluate your Score</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="left-section w-25">
        <Image src={frame} alt="home" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default HomePage;

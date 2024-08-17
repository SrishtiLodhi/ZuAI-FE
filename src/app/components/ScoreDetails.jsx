import React from "react";

const ScoreDetails = () => {
  return (
    <div class="bg-gray-50 min-h-screen flex justify-center items-center p-4">
      <div class="bg-white shadow-md rounded-lg overflow-hidden max-w-lg w-full">
        <div class="bg-gray-100 p-4 flex items-center justify-between">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <span class="text-green-600 text-lg font-semibold">7/10</span>
            </div>
            <div>
              <h3 class="text-gray-800 font-semibold">Criteria A:</h3>
              <h4 class="text-gray-600 text-sm">
                Understanding Knowledge Questions
              </h4>
            </div>
          </div>
          <svg
            class="w-5 h-5 text-gray-500 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <div class="p-4 border-b border-gray-200">
          <p class="text-gray-600 text-sm">
            The essay identifies and focuses on the knowledge question regarding
            the resolvability of disputes over knowledge claims within
            disciplines.
          </p>
        </div>

        <div class="p-4">
          <h4 class="text-gray-800 font-semibold">Strengths</h4>
          <div class="bg-green-50 border border-green-200 rounded-md p-3 mt-2">
            <div class="flex items-start">
              <svg
                class="w-5 h-5 text-green-500 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p class="text-gray-700 text-sm ml-3">
                Demonstrates a good understanding of the prescribed title and
                the associated knowledge questions.
              </p>
            </div>
            <div class="flex items-start mt-2">
              <svg
                class="w-5 h-5 text-green-500 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p class="text-gray-700 text-sm ml-3">
                Addresses the nature of disputes in both the Natural Sciences
                and Human Sciences effectively.
              </p>
            </div>
          </div>
        </div>

        <div class="p-4">
          <h4 class="text-gray-800 font-semibold">Scope of Improvement</h4>
          <div class="bg-yellow-50 border border-yellow-200 rounded-md p-3 mt-2">
            <div class="flex items-start">
              <svg
                class="w-5 h-5 text-yellow-500 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m6.938-1.222a8.001 8.001 0 11-13.856 0M12 5a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8z"
                />
              </svg>
              <p class="text-gray-700 text-sm ml-3">
                Demonstrates a good understanding of the prescribed title and
                the associated knowledge questions.
              </p>
            </div>
            <div class="flex items-start mt-2">
              <svg
                class="w-5 h-5 text-yellow-500 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m6.938-1.222a8.001 8.001 0 11-13.856 0M12 5a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8z"
                />
              </svg>
              <p class="text-gray-700 text-sm ml-3">
                Addresses the nature of disputes in both the Natural Sciences
                and Human Sciences effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreDetails;

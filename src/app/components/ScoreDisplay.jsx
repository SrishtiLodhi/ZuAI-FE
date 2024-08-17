// components/EvaluationDisplay.tsx

import { useCourseworkStore } from "../store/useCourseworkStore";

export default function EvaluationDisplay() {
  return (
    <div class="bg-gray-50 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
        <div class="text-gray-600 font-medium">Overall Score</div>
        <div class="text-2xl font-semibold text-gray-800 mt-2">
          Remark : <span class="text-green-500">Excellent</span>
        </div>
        <div class="text-gray-500 text-sm mt-1">Evaluated on 12 Jul 2024</div>
        <div class="relative mt-4">
          <div class="flex justify-center items-center">
            <svg class="w-20 h-20" viewBox="0 0 36 36">
              <path
                class="text-gray-300"
                stroke-width="3"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                class="text-green-500"
                stroke-dasharray="65, 100"
                stroke-width="3"
                stroke-linecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
              />
            </svg>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-xl font-semibold text-gray-800">13/20</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-md flex items-center justify-between mt-4">
        <div class="flex items-center">
          <div class="relative">
            <svg class="w-12 h-12" viewBox="0 0 36 36">
              <path
                class="text-gray-300"
                stroke-width="3"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                class="text-green-500"
                stroke-dasharray="70, 100"
                stroke-width="3"
                stroke-linecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
              />
            </svg>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-sm font-semibold text-gray-800">7/10</span>
            </div>
          </div>
          <div class="ml-4">
            <div class="text-sm text-gray-500">Criteria A:</div>
            <div class="text-lg font-medium text-gray-800">
              Understanding Knowledge Questions
            </div>
          </div>
        </div>
        <div class="text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-md flex items-center justify-between mt-4">
        <div class="flex items-center">
          <div class="relative">
            <svg class="w-12 h-12" viewBox="0 0 36 36">
              <path
                class="text-gray-300"
                stroke-width="3"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                class="text-yellow-500"
                stroke-dasharray="50, 100"
                stroke-width="3"
                stroke-linecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
              />
            </svg>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-sm font-semibold text-gray-800">5/10</span>
            </div>
          </div>
          <div class="ml-4">
            <div class="text-sm text-gray-500">Criteria B:</div>
            <div class="text-lg font-medium text-gray-800">
              Understanding Knowledge Questions
            </div>
          </div>
        </div>
        <div class="text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-md flex items-center justify-between mt-4">
        <div class="flex items-center">
          <div class="relative">
            <svg class="w-12 h-12" viewBox="0 0 36 36">
              <path
                class="text-gray-300"
                stroke-width="3"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                class="text-orange-500"
                stroke-dasharray="30, 100"
                stroke-width="3"
                stroke-linecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
              />
            </svg>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-sm font-semibold text-gray-800">3/10</span>
            </div>
          </div>
          <div class="ml-4">
            <div class="text-sm text-gray-500">Criteria C:</div>
            <div class="text-lg font-medium text-gray-800">
              Understanding Knowledge Questions
            </div>
          </div>
        </div>
        <div class="text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <div class="text-center mt-6">
        <button class="text-purple-600 font-medium hover:text-purple-800 transition">
          Check detailed Evaluation →
        </button>
      </div>
    </div>
  );
}

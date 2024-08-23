"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import frame from "../../../public/assets/home.png";
import upload from "../../../public/assets/upload.svg";
import { useDropzone } from "react-dropzone";
import ExploreCoursework from "../components/ExploreCoursework"
import score from "../../../public/assets/score.svg"

export default function FileUpload({ onEvaluateClick }) {
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [showEvaluation, setShowEvaluation] = useState(false); // State to show EvaluationResult

  const onDrop = useCallback((acceptedFiles) => {
    setFiles([...files, ...acceptedFiles]);
    handleUpload([...files, ...acceptedFiles]);
  }, [files]);

  const handleUpload = (files) => {
    setIsUploading(true);

    // Simulate an upload delay (e.g., calling an API)
    setTimeout(() => {
      // After upload completes, save the files to local storage
      saveFiles(files);
      setIsUploading(false);
    }, 2000); // Adjust the timeout to simulate the upload time
  };

  const saveFiles = (files) => {
    const fileData = files.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
    }));
    localStorage.setItem("uploadedFiles", JSON.stringify(fileData));
  };

  const handleEvaluateClick = () => {
    setShowEvaluation(true); // Show the EvaluationResult component
  };

  if (showEvaluation) {
    return <ExploreCoursework />;
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "application/pdf",
    maxSize: 26214400, // 25 MB limit
  });

  return (
    <div className="flex justify-center items-center container w-3/4 gap-3">
      <div className="right-section w-75">
        <h1 className="text mb-4 mb-md-2">
          Hey IB Folks! Unsure about the quality of your answers?{" "}
          <span className="text-fontColor">We get you.</span>
        </h1>
        <div className="card bg-secondaryBackground">
          <div
            {...getRootProps({
              className: "border-dashed border-2 bg-white border-purple-200 rounded-lg p-6 text-center justify-center flex flex-col items-center"
            })}
          >
            <input {...getInputProps()} />
            <Image src={upload} alt="home" className="mb-2" />
            <h3 className="heading-text">Drag and drop a PDF </h3>
            <p className="para-text mb-4">*Limit 25 MB per file.</p>
            <button className="upload-button">
              {isUploading ? "Uploading..." : "Uploaded"}
            </button>
          </div>
          <div className="flex flex-col justify-start">
            <div className="mt-6 ">
              <label className="block course-text">
                Select your course & subjects*
              </label>
              <div className="flex space-x-2 mt-2 w-1/2 lg:max-w-sm">

  <select className="w-1/2 p-2.5 text-gray-500 border-radius bg-white border rounded-md shadow-sm outline-none pr-10">
    <option>Coursework Type</option>
    <option>Coursework Type</option>
    <option>Academic</option>
  </select>
  <select className="w-1/2 p-2.5 text-gray-500 border-radius bg-white border rounded-md shadow-sm outline-none pr-10">
    <option>Subject</option>
    <option>Mathematics</option>
    <option>English</option>
    <option>Science</option>
    <option>Literature</option>
  </select>


              </div>
            </div>
            <div className="mt-4">
              <label className="block course-text mb-1">
                Enter your essay title*
              </label>
              <input
                type="text"
                className="block mt-2 w-1/2 border border-gray-300 border-radius p-2 text-gray-700 text-sm placeholder-gray-400 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
                placeholder="how nation works....."
              />
            </div>
            <div className="mt-6">
              <button className="px-6 py-2 border-radius bg-gray-200 text-gray-700 rounded-lg text-sm flex items-center space-x-2"
              onClick={onEvaluateClick}>
               <Image src={score} alt="score" className="" />
                
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
}

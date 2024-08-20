"use client";
import React, {useState} from "react";
import Image from "next/image";
import frame from "../../../public/assets/home.png";
import upload from "../../../public/assets/upload.svg";
import FileUpload from "../components/FileUpload";
import ScoreDisplay from "../components/ScoreDisplay";
import ExploreCoursework from "../components/ExploreCoursework";
import ScoreDetails from "../components/ScoreDetails"

const HomePage = () => {
  const [showEvaluation, setShowEvaluation] = useState(false);

  const handleEvaluateClick = () => {
    setShowEvaluation(true); // Switch to show the EvaluationResult component
  };

  if (showEvaluation) {
    return <ExploreCoursework />;
  }

  return (
   <>
   <FileUpload onEvaluateClick={handleEvaluateClick}/>
   {/* <ScoreDisplay/> */}
   {/* <ExploreCoursework/> */}
   {/* <ScoreDetails/> */}
   </>
  );
};

export default HomePage;

import React from "react";
import Image from "next/image";
import frame from "../../../public/assets/home.png";
import upload from "../../../public/assets/upload.svg";
import FileUpload from "../components/FileUpload";
import ScoreDisplay from "../components/ScoreDisplay";
import ExploreCoursework from "../components/ExploreCoursework";
import ScoreDetails from "../components/ScoreDetails"

const HomePage = () => {
  console.log("Image source:", frame);
  return (
   <>
   <FileUpload/>
   {/* <ScoreDisplay/> */}
   {/* <ExploreCoursework/> */}
   {/* <ScoreDetails/> */}
   </>
  );
};

export default HomePage;

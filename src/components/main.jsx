import "./main.css";
import bgImage from "../assets/bg.jpg";
import StudJobs from "./Student/jobs";
import StudJobDetails from "./Student/jobdetails";
import HRJobs from "./HR/jobs";
import HRJobDetails from "./HR/jobdetails";
import { useState } from "react";

const Main = ({isHR}) => {
  const [jobIDStud, setJobIDStud] = useState(null);
  const [jobIDHR, setJobIDHR] = useState(null);
  const [stutusChange, setStutusChange] = useState(false);

  return (
    <div className="main">
      {!isHR ? <div className="top-section">
        <img src={bgImage} alt="bgImage" />
        <div className="overlay"></div>
        <div className="image-text">
          <h1>Find Your Dream Job</h1>
          <p>Explore opportunities that match your skills and passion</p>
        </div>
      </div> : <></>}


      <div className="bottom-section">
        <div className="jobs-section">
          {isHR ? <HRJobs jobID={jobIDHR} setJobID={setJobIDHR} stutusChange={stutusChange}/> : <StudJobs jobID={jobIDStud} setJobID={setJobIDStud} stutusChange={stutusChange}/>}
        </div>
        <div className="job-detail-section jobdetails-container">
          {isHR ? <HRJobDetails jobID={jobIDHR} stutusChange={stutusChange} setStutusChange={setStutusChange}/> : <StudJobDetails jobID={jobIDStud}/>}
        </div>
      </div>
    </div>
  );
};

export default Main;

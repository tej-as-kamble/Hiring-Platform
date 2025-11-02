import { useState } from "react";

function HRJobs({jobID, setJobID, jobList}) {
  const [activeTab, setActiveTab] = useState("active");

  
  return (
    <div className="jobs-container">
      <div className="jobs-header">
        <div
          className={`active-jobs-btn ${activeTab === "active" ? "active" : ""}`}
          onClick={() => setActiveTab("active")}
        >
          Active jobs
        </div>

        <div
          className={`archive-jobs-btn ${activeTab === "archive" ? "active" : ""}`}
          onClick={() => setActiveTab("archive")}
        >
          Archive jobs
        </div>
      </div>


      <div className="job-list">
        {jobList.map((job, index) => (
          <div key={index} className={`job-card ${index === jobID ? "clicked-job" : ""}`} onClick={() => setJobID(index)}>
            <h2>{job.title}</h2>
            <div className="job-info">
              <p>📍 {job.location}</p>
            </div>
            <p className="job-office">🏢 {job.office}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HRJobs;

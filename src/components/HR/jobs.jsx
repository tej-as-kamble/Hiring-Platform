import { useEffect, useState } from "react";

function HRJobs({jobID, setJobID, stutusChange}) {
  const [activeTab, setActiveTab] = useState("active");
  const [activeJobList, setActiveJobList] = useState([]);
  const [archiveJobList, setArchiveJobList] = useState([]);
  
  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        const activeJobs = data.jobs.filter((job) => job.status === true);
        const archiveJobs = data.jobs.filter((job) => job.status === false);
        
        setActiveJobList(activeJobs);
        setArchiveJobList(archiveJobs);
      })
      .catch((err) => console.error("Error fetching jobs:", err));
  }, [stutusChange]);
  
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

      {activeTab==="active" ? (
        <div className="job-list">
          {activeJobList.map((job, index) => (
            <div key={index} className={`job-card ${job.jobID === jobID ? "clicked-job" : ""}`} onClick={() => setJobID(job.jobID)}>
              <h2>{job.title}</h2>
              <div className="job-info">
                <p>📍 {job.location}</p>
              </div>
              <p className="job-office">🏢 {job.office}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="job-list">
          {archiveJobList.map((job, index) => (
            <div key={index} className={`job-card ${job.jobID === jobID ? "clicked-job" : ""}`} onClick={() => setJobID(job.jobID)}>
              <h2>{job.title}</h2>
              <div className="job-info">
                <p>📍 {job.location}</p>
              </div>
              <p className="job-office">🏢 {job.office}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default HRJobs;

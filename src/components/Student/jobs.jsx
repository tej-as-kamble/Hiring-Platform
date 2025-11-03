import { useEffect, useState } from "react";
import "../jobs.css";

function Jobs({jobID, setJobID}) {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobList(data.jobs)
      })
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  return (
    <div className="jobs-container">
      <div className="jobs-header">
        <div className="toggle-section">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <span>Turn job alert on</span>
        </div>

        <div className="sort-section">
          <span>Sort by</span>
          <select>
            <option>Most relevant</option>
            <option>Most recent</option>
          </select>
        </div>
      </div>

      <div className="job-list">
        {jobList.map((job, index) => (
          <div key={index} className={`job-card ${job.jobID === jobID ? "clicked-job" : ""}`} onClick={() => setJobID(job.jobID)}>
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

export default Jobs;

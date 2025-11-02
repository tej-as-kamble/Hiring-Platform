import { useState } from "react";
import "../jobdetails.css";

function StudJobDetails({jobID, jobList}) {
  const job = jobList.find((_, index) => index === jobID);

  if (!job) {
    return (
      <div className="jobdetails-empty">
        <p>Select a job to view details</p>
      </div>
    );
  }

  return (
    <>
      <div className="jobdetails-header">
        <h1>{job.title}</h1>
        <p className="jobdetails-location">{job.location}</p>
        <div className="jobdetails-actions">
          <button className="apply-btn">Apply</button>
          <button className="save-btn">Save</button>
        </div>
      </div>

      <div className="jobdetails-info">
        <div>
          <span>Job number</span>
          <p>{jobID}</p>
        </div>
        <div>
          <span>Work site</span>
          <p>{job.office}</p>
        </div>
        <div>
          <span>Role type</span>
          <p><b>Individual Contributor</b></p>
        </div>
        <div>
          <span>Profession</span>
          <p><b>Software Engineering</b></p>
        </div>
        <div>
          <span>Discipline</span>
          <p><b>Software Engineering</b></p>
        </div>
        <div>
          <span>Employment type</span>
          <p><b>Full-Time</b></p>
        </div>
      </div>

      <div className="jobdetails-section">
        <h2>Overview</h2>
        <p>{job.description.overview}</p>
      </div>

      <div className="jobdetails-section">
        <h2>Qualifications</h2>
        <ul>
          {job.description.qualifications.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ul>
      </div>

      <div className="jobdetails-section">
        <h2>Responsibilities</h2>
        <ul>
          {job.description.responsibilities.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default StudJobDetails;

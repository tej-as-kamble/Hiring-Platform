import { useState } from "react";
import "../jobdetails.css";
import HRJobStages from "./hrjobstages"

function HRJobDetails({jobID, jobList}) {
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
        <div div className="jobdetails-actions">
          {!job.isActive ? (
            <div className="job-status">
              <span className="active-icon"></span>
              <p>Active</p>
            </div>
          ) : (
            <div className="job-status">
              <span className="archive-icon"></span>
              <p>Archived</p>
            </div>
          )}
        </div>
        <div className="jobdetails-actions">
          {!job.isActive ? (
            <div className="job-status">
              <button className="archive-btn">Delete</button>
            </div>
          ) : (
            <div className="job-status">
              <button className="active-btn">Activate</button>
            </div>
          )}
          <button className="assessment-btn">Make Assessment</button>
          <button className="preview-btn">Preview Assessment</button>
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

      {/* placeholder for next div you will describe */}
      {/* <div className="hr-extra-section">
        will add content here as per your next instruction
      </div> */}

      <HRJobStages job={job}/>
    </>
  );
}

export default HRJobDetails;

import { useEffect, useState } from "react";
import "../jobdetails.css";

function StudJobDetails({ jobID }) {
  const [jobData, setJobData] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (!jobID) return;
    setLoad(true);

    fetch(`/api/jobStud/${jobID}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setJobData(data);
        setLoad(false);
      })
      .catch((err) => {
        console.error("Error fetching job:", err);
      });
  }, [jobID]);

  const [appliedJobs, setAppliedJobs] = useState({});
  const [savedJobs, setSavedJobs] = useState({});
  const [dots, setDots] = useState("");
  const [isApplying, setIsApplying] = useState(false);

  if (!jobData){
    return (
      <div className="jobdetails-empty">
        <p>Select a job to view details</p>
      </div>
    );
  }

  const job = jobData.job;
  const details = jobData.jobDetail.description;

  const isApplied = appliedJobs[jobID];
  const isSaved = savedJobs[jobID];

  const DoApply = () => {
    setIsApplying(true);
    let count = 0;
    const interval = setInterval(() => {
      count = (count + 1) % 4;
      setDots(".".repeat(count));
    }, 300);

    setTimeout(() => {
      clearInterval(interval);
      setIsApplying(false);
      setAppliedJobs((prev) => ({ ...prev, [jobID]: true }));
    }, 3000);
  };

  const DoSave = () => {
    setSavedJobs((prev) => ({ ...prev, [jobID]: !prev[jobID] }));
  };

  return (
    <>
      {load ? (
        <div className="jobdetails-empty">
          <p>Loading job details...</p>
        </div>
      ): (
      <>
        <div className="jobdetails-header">
          <h1>{job.title}</h1>
          <p className="jobdetails-location">{job.location}</p>
          <div className="jobdetails-actions">
            {isApplied ? (
              <p className="applied-p">Completed!</p>
            ) : (
              <>
                <button className="apply-btn" onClick={DoApply}>
                  {isApplying ? `Applying${dots}` : "Apply"}
                </button>
                <button className="save-btn" onClick={DoSave}>
                  {isSaved ? "Saved!" : "Save"}
                </button>
              </>
            )}
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
            <p><b>{job.roleType}</b></p>
          </div>
          <div>
            <span>Profession</span>
            <p><b>{job.profession}</b></p>
          </div>
          <div>
            <span>Discipline</span>
            <p><b>{job.discipline}</b></p>
          </div>
          <div>
            <span>Employment type</span>
            <p><b>{job.employmentType}</b></p>
          </div>
        </div>

        <div className="jobdetails-section">
          <h2>Overview</h2>
          <p>{details.overview}</p>
        </div>

        <div className="jobdetails-section">
          <h2>Qualifications</h2>
          <ul>
            {details.qualifications.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </div>

        <div className="jobdetails-section">
          <h2>Responsibilities</h2>
          <ul>
            {details.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </>
      )}
    </>
  );
}

export default StudJobDetails;

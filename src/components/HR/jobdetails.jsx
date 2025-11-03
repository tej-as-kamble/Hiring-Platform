import { use, useEffect, useState } from "react";
import "../jobdetails.css";
import HRJobStages from "./hrjobstages"

function HRJobDetails({jobID, stutusChange, setStutusChange}) {
  const [jobData, setJobData] = useState(null);
  const [load, setLoad] = useState(true);
  const [Status, setStutus] = useState(true);

  useEffect(() => {
    if (!jobID) return;
    setLoad(true);

    fetch(`/api/jobHR/${jobID}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setJobData(data);
        setLoad(false);
      })
      .catch((err) => {
        console.error("Error fetching job:", err);
      });
  }, [jobID, stutusChange]);


  useEffect(() => {
    if (!jobID || jobData === null) return;

    fetch(`/api/jobHR/${jobID}/status`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        setJobData(prev => ({
          ...prev,
          job: {
            ...prev.job,
            status: !prev.job.status,
          },
        }));
        setStutusChange(prev => !prev);
        // console.log(data)
      })
      .catch((err) => console.error("Error updating job:", err));
  }, [Status]);



  if (!jobData){
    return (
      <div className="jobdetails-empty">
        <p>Select a job to view details</p>
      </div>
    );
  }


  const changeStatus = () => {
    setStutus(prev => !prev);
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
          <h1>{jobData.job.title}</h1>
          <p className="jobdetails-location">{jobData.job.location}</p>
          <div className="jobdetails-actions">
            {jobData.job.status ? (
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
            {jobData.job.status ? (
              <div className="job-status">
                <button onClick={changeStatus} className="archive-btn">Delete</button>
              </div>
            ) : (
              <div className="job-status">
                <button onClick={changeStatus} className="active-btn">Activate</button>
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
            <p>{jobData.job.office}</p>
          </div>
          <div>
            <span>Role type</span>
            <p><b>{jobData.job.roleType}</b></p>
          </div>
          <div>
            <span>Profession</span>
            <p><b>{jobData.job.profession}</b></p>
          </div>
          <div>
            <span>Discipline</span>
            <p><b>{jobData.job.discipline}</b></p>
          </div>
          <div>
            <span>Employment type</span>
            <p><b>{jobData.job.employmentType}</b></p>
          </div>
        </div>

        <HRJobStages job={jobData.jobApplication}/>
      </>
      )}
    </>
  );
}

export default HRJobDetails;

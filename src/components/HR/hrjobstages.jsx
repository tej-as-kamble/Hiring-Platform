import React, { useState } from "react";
import "./hrjobstages.css";

const HRJobStages = ({ job }) => {
  const [activeStage, setActiveStage] = useState(0);

  const currentStageName = job.totalStages[activeStage];
  const currentStageCandidates = job.candidateList[activeStage]?.candidates || [];

  return (
    <div className="hr-stages-section">
      {/* Stage Tabs */}
      <div className="stage-buttons">
        {job.totalStages.map((stageName, index) => (
          <div
            key={index}
            className={`stage-btn ${activeStage === index ? "active" : ""}`}
            onClick={() => setActiveStage(index)}
          >
            {stageName}
          </div>
        ))}
      </div>

      {/* Shortlist Button */}
      <div className="shortlist-div">
        <button className="shortlist-btn">Make shortlist for Next Stage</button>
      </div>

      {/* Candidates Table */}
      <div className="stage-candidates">
        <h3>{currentStageName} Candidates</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Resume</th>
              <th>Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentStageCandidates.length > 0 ? (
              currentStageCandidates.map((c, idx) => (
                <tr key={idx}>
                  <td>{c.name}</td>
                  <td>
                    <a href="/" target="_blank" rel="noreferrer">
                      View Resume
                    </a>
                  </td>
                  <td>{c.score}</td>
                  <td>
                    <span className={c.score >= 70 ? "passed" : "failed"}>
                      {c.score >= 70 ? "Passed" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No candidates in this stage.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HRJobStages;

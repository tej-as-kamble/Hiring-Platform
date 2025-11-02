import React, { useState } from "react";
import "./hrjobstages.css";

const HRJobStages = ({ job }) => {
  // job.stages = [{ name: "Stage 1", candidates: [...] }, ...]
  const [activeStage, setActiveStage] = useState(0);

  const currentStage = job.stages[activeStage];

  return (
    <div className="hr-stages-section">
      <div className="stage-buttons">
        {job.stages.map((stage, index) => (
          <div
            key={index}
            className={`stage-btn ${activeStage === index ? "active" : ""}`}
            onClick={() => setActiveStage(index)}
          >
            {stage.name}
          </div>
        ))}
      </div>
      <div className="shortlist-div">
        <button className="shortlist-btn">Make shortlist for Next Stage</button>
      </div>

      <div className="stage-candidates">
        <h3>{currentStage.name} Candidates</h3>
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
            {currentStage.candidates.map((c, idx) => (
              <tr key={idx}>
                <td>{c.name}</td>
                <td>
                  <a href={c.resume} target="_blank" rel="noreferrer">
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HRJobStages;

import "./main.css";
import bgImage from "../assets/bg.jpg";
import StudJobs from "./Student/jobs";
import StudJobDetails from "./Student/jobdetails";
import HRJobs from "./HR/jobs";
import HRJobDetails from "./HR/jobdetails";
import { useState } from "react";

const Main = ({isHR}) => {
  const [jobID, setJobID] = useState(null);


  const jobList = [
    {
      title: "Senior Software Engineer",
      location: "Multiple Locations, United States",
      office: "0 days / week in-office - remote",
      description: {
        overview:
          "As a Senior Software Engineer, you will design, develop, and maintain scalable software solutions that power our global applications. You’ll work closely with cross-functional teams to ensure quality and performance at every step.",
        responsibilities: [
          "Design and implement robust backend and frontend systems.",
          "Collaborate with cross-functional teams to deliver new features.",
          "Write clean, efficient, and maintainable code following best practices.",
          "Participate in code reviews and mentor junior developers.",
          "Optimize applications for performance and scalability.",
        ],
        qualifications: [
          "Bachelor’s or Master’s degree in Computer Science or related field.",
          "5+ years of software development experience.",
          "Strong proficiency in JavaScript, React, Node.js, or Python.",
          "Experience with RESTful APIs, cloud services, and CI/CD pipelines.",
          "Excellent problem-solving and communication skills.",
        ],
      },
      stages: [
        {
          name: "Stage 1 - Resume Screening",
          candidates: [
            { name: "Tejas Kamble", resume: "#", score: 85 },
            { name: "Aarav Patel", resume: "#", score: 72 },
            { name: "Rohan Sharma", resume: "#", score: 67 },
            { name: "Anil Gupta", resume: "#", score: 80 },
            { name: "Kunal Nair", resume: "#", score: 68 },
          ],
        },
        {
          name: "Stage 2 - Technical Interview-1",
          candidates: [
            { name: "Tejas Kamble", resume: "#", score: 78 },
            { name: "Aarav Patel", resume: "#", score: 69 },
            { name: "Anil Gupta", resume: "#", score: 80 },
            { name: "Kunal Nair", resume: "#", score: 68 },
          ],
        },
        {
          name: "Stage 3 - Technical Interview-2",
          candidates: [
            { name: "Tejas Kamble", resume: "#", score: 91 },
            { name: "Anil Gupta", resume: "#", score: 80 },
          ],
        },
      ],
    },
    {
      title: "Senior Data Scientist",
      location: "Redmond, Washington, United States + 1 more",
      office: "4 days / week in-office",
      description: {
        overview:
          "As a Senior Data Scientist, you will leverage machine learning and statistical modeling to solve business-critical problems and drive data-informed decisions across teams.",
        responsibilities: [
          "Build and deploy predictive and prescriptive machine learning models.",
          "Collaborate with engineering and product teams to integrate data-driven insights.",
          "Perform exploratory data analysis and feature engineering.",
          "Communicate complex findings to technical and non-technical audiences.",
          "Stay updated with the latest research in AI and data science.",
        ],
        qualifications: [
          "Bachelor’s or Master’s in Computer Science, Statistics, or related field.",
          "5+ years of experience in Data Science or Machine Learning roles.",
          "Strong experience with Python, NumPy, Pandas, TensorFlow, or PyTorch.",
          "Solid understanding of statistics, probability, and model evaluation.",
          "Experience working with large-scale datasets and SQL/NoSQL databases.",
        ],
      },
      stages: [
        {
          name: "Stage 1 - Profile Review",
          candidates: [
            { name: "Anil Gupta", resume: "#", score: 80 },
            { name: "Rohan Verma", resume: "#", score: 70 },
            { name: "Kunal Nair", resume: "#", score: 68 },
          ],
        },
        {
          name: "Stage 2 - Data Challenge",
          candidates: [
            { name: "Anil Gupta", resume: "#", score: 77 },
            { name: "Rohan Verma", resume: "#", score: 73 },
          ],
        },
        {
          name: "Stage 3 - Final Interview",
          candidates: [{ name: "Anil Gupta", resume: "#", score: 89 }],
        },
      ],
    },
    {
      title: "Senior Cloud Network Engineer",
      location: "Multiple Locations, United States",
      office: "0 days / week in-office - remote",
      description: {
        overview:
          "The Senior Cloud Network Engineer is responsible for designing and managing scalable, secure, and reliable cloud network infrastructures across multiple environments.",
        responsibilities: [
          "Design, deploy, and maintain cloud-based network architectures.",
          "Implement and manage network security measures and policies.",
          "Monitor performance and optimize network configurations.",
          "Troubleshoot network-related issues across hybrid environments.",
          "Collaborate with DevOps and security teams for efficient workflows.",
        ],
        qualifications: [
          "Bachelor’s degree in Computer Networking, IT, or related discipline.",
          "5+ years of experience in cloud or network engineering.",
          "Hands-on experience with AWS, Azure, or Google Cloud networking.",
          "Proficiency with routing, VPNs, firewalls, and load balancers.",
          "Strong understanding of security protocols and automation tools.",
        ],
      },
      stages: [
        {
          name: "Stage 1 - Resume Review",
          candidates: [
            { name: "Aditya Joshi", resume: "#", score: 82 },
            { name: "Sameer Kaur", resume: "#", score: 75 },
            { name: "Nikhil Mehta", resume: "#", score: 62 },
          ],
        },
        {
          name: "Stage 2 - Network Design Test",
          candidates: [
            { name: "Aditya Joshi", resume: "#", score: 80 },
            { name: "Sameer Kaur", resume: "#", score: 69 },
          ],
        },
        {
          name: "Stage 3 - Technical Round",
          candidates: [{ name: "Aditya Joshi", resume: "#", score: 86 }],
        },
      ],
    },
    {
      title: "Senior Software Engineer",
      location: "Multiple Locations, United States",
      office: "0 days / week in-office - remote",
      description: {
        overview:
          "As a Senior Software Engineer, you will design, develop, and maintain scalable software solutions that power our global applications. You’ll work closely with cross-functional teams to ensure quality and performance at every step.",
        responsibilities: [
          "Design and implement robust backend and frontend systems.",
          "Collaborate with cross-functional teams to deliver new features.",
          "Write clean, efficient, and maintainable code following best practices.",
          "Participate in code reviews and mentor junior developers.",
          "Optimize applications for performance and scalability.",
        ],
        qualifications: [
          "Bachelor’s or Master’s degree in Computer Science or related field.",
          "5+ years of software development experience.",
          "Strong proficiency in JavaScript, React, Node.js, or Python.",
          "Experience with RESTful APIs, cloud services, and CI/CD pipelines.",
          "Excellent problem-solving and communication skills.",
        ],
      },
      stages: [
        {
          name: "Stage 1 - Resume Screening",
          candidates: [
            { name: "Tejas Kamble", resume: "#", score: 85 },
            { name: "Aarav Patel", resume: "#", score: 72 },
            { name: "Rohan Sharma", resume: "#", score: 67 },
          ],
        },
        {
          name: "Stage 2 - Technical Interview",
          candidates: [
            { name: "Tejas Kamble", resume: "#", score: 78 },
            { name: "Aarav Patel", resume: "#", score: 69 },
          ],
        },
        {
          name: "Stage 3 - HR Round",
          candidates: [{ name: "Tejas Kamble", resume: "#", score: 91 }],
        },
      ],
    },
    {
      title: "Senior Data Scientist",
      location: "Redmond, Washington, United States + 1 more",
      office: "4 days / week in-office",
      description: {
        overview:
          "As a Senior Data Scientist, you will leverage machine learning and statistical modeling to solve business-critical problems and drive data-informed decisions across teams.",
        responsibilities: [
          "Build and deploy predictive and prescriptive machine learning models.",
          "Collaborate with engineering and product teams to integrate data-driven insights.",
          "Perform exploratory data analysis and feature engineering.",
          "Communicate complex findings to technical and non-technical audiences.",
          "Stay updated with the latest research in AI and data science.",
        ],
        qualifications: [
          "Bachelor’s or Master’s in Computer Science, Statistics, or related field.",
          "5+ years of experience in Data Science or Machine Learning roles.",
          "Strong experience with Python, NumPy, Pandas, TensorFlow, or PyTorch.",
          "Solid understanding of statistics, probability, and model evaluation.",
          "Experience working with large-scale datasets and SQL/NoSQL databases.",
        ],
      },
      stages: [
        {
          name: "Stage 1 - Profile Review",
          candidates: [
            { name: "Anil Gupta", resume: "#", score: 80 },
            { name: "Rohan Verma", resume: "#", score: 70 },
            { name: "Kunal Nair", resume: "#", score: 68 },
          ],
        },
        {
          name: "Stage 2 - Data Challenge",
          candidates: [
            { name: "Anil Gupta", resume: "#", score: 77 },
            { name: "Rohan Verma", resume: "#", score: 73 },
          ],
        },
        {
          name: "Stage 3 - Final Interview",
          candidates: [{ name: "Anil Gupta", resume: "#", score: 89 }],
        },
      ],
    },
    {
      title: "Senior Cloud Network Engineer",
      location: "Multiple Locations, United States",
      office: "0 days / week in-office - remote",
      description: {
        overview:
          "The Senior Cloud Network Engineer is responsible for designing and managing scalable, secure, and reliable cloud network infrastructures across multiple environments.",
        responsibilities: [
          "Design, deploy, and maintain cloud-based network architectures.",
          "Implement and manage network security measures and policies.",
          "Monitor performance and optimize network configurations.",
          "Troubleshoot network-related issues across hybrid environments.",
          "Collaborate with DevOps and security teams for efficient workflows.",
        ],
        qualifications: [
          "Bachelor’s degree in Computer Networking, IT, or related discipline.",
          "5+ years of experience in cloud or network engineering.",
          "Hands-on experience with AWS, Azure, or Google Cloud networking.",
          "Proficiency with routing, VPNs, firewalls, and load balancers.",
          "Strong understanding of security protocols and automation tools.",
        ],
      },
      stages: [
        {
          name: "Stage 1 - Resume Review",
          candidates: [
            { name: "Aditya Joshi", resume: "#", score: 82 },
            { name: "Sameer Kaur", resume: "#", score: 75 },
            { name: "Nikhil Mehta", resume: "#", score: 62 },
          ],
        },
        {
          name: "Stage 2 - Network Design Test",
          candidates: [
            { name: "Aditya Joshi", resume: "#", score: 80 },
            { name: "Sameer Kaur", resume: "#", score: 69 },
          ],
        },
        {
          name: "Stage 3 - Technical Round",
          candidates: [{ name: "Aditya Joshi", resume: "#", score: 86 }],
        },
      ],
    },
    {
      title: "Senior Software Engineer",
      location: "Multiple Locations, United States",
      office: "0 days / week in-office - remote",
      description: {
        overview:
          "As a Senior Software Engineer, you will design, develop, and maintain scalable software solutions that power our global applications. You’ll work closely with cross-functional teams to ensure quality and performance at every step.",
        responsibilities: [
          "Design and implement robust backend and frontend systems.",
          "Collaborate with cross-functional teams to deliver new features.",
          "Write clean, efficient, and maintainable code following best practices.",
          "Participate in code reviews and mentor junior developers.",
          "Optimize applications for performance and scalability.",
        ],
        qualifications: [
          "Bachelor’s or Master’s degree in Computer Science or related field.",
          "5+ years of software development experience.",
          "Strong proficiency in JavaScript, React, Node.js, or Python.",
          "Experience with RESTful APIs, cloud services, and CI/CD pipelines.",
          "Excellent problem-solving and communication skills.",
        ],
      },
      stages: [
        {
          name: "Stage 1 - Resume Screening",
          candidates: [
            { name: "Tejas Kamble", resume: "#", score: 85 },
            { name: "Aarav Patel", resume: "#", score: 72 },
            { name: "Rohan Sharma", resume: "#", score: 67 },
          ],
        },
        {
          name: "Stage 2 - Technical Interview",
          candidates: [
            { name: "Tejas Kamble", resume: "#", score: 78 },
            { name: "Aarav Patel", resume: "#", score: 69 },
          ],
        },
        {
          name: "Stage 3 - HR Round",
          candidates: [{ name: "Tejas Kamble", resume: "#", score: 91 }],
        },
      ],
    },
    {
      title: "Senior Data Scientist",
      location: "Redmond, Washington, United States + 1 more",
      office: "4 days / week in-office",
      description: {
        overview:
          "As a Senior Data Scientist, you will leverage machine learning and statistical modeling to solve business-critical problems and drive data-informed decisions across teams.",
        responsibilities: [
          "Build and deploy predictive and prescriptive machine learning models.",
          "Collaborate with engineering and product teams to integrate data-driven insights.",
          "Perform exploratory data analysis and feature engineering.",
          "Communicate complex findings to technical and non-technical audiences.",
          "Stay updated with the latest research in AI and data science.",
        ],
        qualifications: [
          "Bachelor’s or Master’s in Computer Science, Statistics, or related field.",
          "5+ years of experience in Data Science or Machine Learning roles.",
          "Strong experience with Python, NumPy, Pandas, TensorFlow, or PyTorch.",
          "Solid understanding of statistics, probability, and model evaluation.",
          "Experience working with large-scale datasets and SQL/NoSQL databases.",
        ],
      },
      stages: [
        {
          name: "Stage 1 - Profile Review",
          candidates: [
            { name: "Anil Gupta", resume: "#", score: 80 },
            { name: "Rohan Verma", resume: "#", score: 70 },
            { name: "Kunal Nair", resume: "#", score: 68 },
          ],
        },
        {
          name: "Stage 2 - Data Challenge",
          candidates: [
            { name: "Anil Gupta", resume: "#", score: 77 },
            { name: "Rohan Verma", resume: "#", score: 73 },
          ],
        },
        {
          name: "Stage 3 - Final Interview",
          candidates: [{ name: "Anil Gupta", resume: "#", score: 89 }],
        },
      ],
    },
    {
      title: "Senior Cloud Network Engineer",
      location: "Multiple Locations, United States",
      office: "0 days / week in-office - remote",
      description: {
        overview:
          "The Senior Cloud Network Engineer is responsible for designing and managing scalable, secure, and reliable cloud network infrastructures across multiple environments.",
        responsibilities: [
          "Design, deploy, and maintain cloud-based network architectures.",
          "Implement and manage network security measures and policies.",
          "Monitor performance and optimize network configurations.",
          "Troubleshoot network-related issues across hybrid environments.",
          "Collaborate with DevOps and security teams for efficient workflows.",
        ],
        qualifications: [
          "Bachelor’s degree in Computer Networking, IT, or related discipline.",
          "5+ years of experience in cloud or network engineering.",
          "Hands-on experience with AWS, Azure, or Google Cloud networking.",
          "Proficiency with routing, VPNs, firewalls, and load balancers.",
          "Strong understanding of security protocols and automation tools.",
        ],
      },
      stages: [
        {
          name: "Stage 1 - Resume Review",
          candidates: [
            { name: "Aditya Joshi", resume: "#", score: 82 },
            { name: "Sameer Kaur", resume: "#", score: 75 },
            { name: "Nikhil Mehta", resume: "#", score: 62 },
            { name: "Rohan Verma", resume: "#", score: 73 },
          ],
        },
        {
          name: "Stage 2 - Network Design Test",
          candidates: [
            { name: "Aditya Joshi", resume: "#", score: 80 },
            { name: "Sameer Kaur", resume: "#", score: 69 },
            { name: "Rohan Verma", resume: "#", score: 73 }
          ],
        },
        {
          name: "Stage 3 - Technical Round",
          candidates: [
            { name: "Aditya Joshi", resume: "#", score: 86 },
            { name: "Rohan Verma", resume: "#", score: 73 }
          ],
          
        },
      ],
    },
  ];



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
          {isHR ? <HRJobs jobID={jobID} setJobID={setJobID} jobList={jobList}/> : <StudJobs jobID={jobID} setJobID={setJobID} jobList={jobList}/>}
        </div>
        <div className="job-detail-section jobdetails-container">
          {isHR ? <HRJobDetails jobID={jobID} jobList={jobList}/> : <StudJobDetails jobID={jobID} jobList={jobList}/>}
        </div>
      </div>
    </div>
  );
};

export default Main;

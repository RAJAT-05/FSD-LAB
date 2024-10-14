import React, { useState } from "react";
import "./ResumeBuilder.css";

function ResumeBuilder() {
  const [data, setData] = useState({
    summary: "",
    education: "",
    skills: "",
    objective: "",
    experience: "",
    achievements: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("Resume submitted successfully!");

    // Generate the HTML for the submitted data
    const output = `
      <div class="submitted-resume">
        <h3>Submitted Resume</h3>
        <p><strong>Professional Summary:</strong> ${data.summary}</p>
        <p><strong>Education Qualifications:</strong> ${data.education}</p>
        <p><strong>Skills:</strong> ${data.skills}</p>
        <p><strong>Career Objective:</strong> ${data.objective}</p>
        <p><strong>Experience and Internships:</strong> ${data.experience}</p>
        <p><strong>Skills and Achievements:</strong> ${data.achievements}</p>
      </div>
    `;

    // Append the generated HTML at the bottom using document.write()
    document.body.innerHTML += output;

    // Reset form fields after submission
    setData({
      summary: "",
      education: "",
      skills: "",
      objective: "",
      experience: "",
      achievements: "",
    });
  };

  return (
    <div className="resume-builder">
      <h2>Resume Builder</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="summary">Professional Summary:</label>
        <textarea
          id="summary"
          name="summary"
          value={data.summary}
          onChange={handleChange}
          rows="4"
          placeholder="Enter your professional summary"
        />

        <label htmlFor="education">Education Qualifications:</label>
        <input
          type="text"
          id="education"
          name="education"
          value={data.education}
          onChange={handleChange}
          placeholder="Enter your education qualifications"
        />

        <label htmlFor="skills">Skills:</label>
        <input
          type="text"
          id="skills"
          name="skills"
          value={data.skills}
          onChange={handleChange}
          placeholder="Enter your skills"
        />

        <label htmlFor="objective">Career Objective:</label>
        <input
          type="text"
          id="objective"
          name="objective"
          value={data.objective}
          onChange={handleChange}
          placeholder="Enter your career objective"
        />

        <label htmlFor="experience">Experience and Internships:</label>
        <input
          type="text"
          id="experience"
          name="experience"
          value={data.experience}
          onChange={handleChange}
          placeholder="Enter your experience and internships"
        />

        <label htmlFor="achievements">Skills and Achievements:</label>
        <input
          type="text"
          id="achievements"
          name="achievements"
          value={data.achievements}
          onChange={handleChange}
          placeholder="Enter your skills and achievements"
        />

        <button type="submit">Submit</button>
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
}

export default ResumeBuilder;

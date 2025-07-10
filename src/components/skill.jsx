import React from "react";
import "./skill.css";
const skills = () => {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 85 },
    { name: "Javascript", level: 70 },
    { name: "React", level: 70 },
    { name: "C", level: 90 },
    { name: "Python", level: 50 },
  ];

  return (
    <section id="skill">
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.level}% ` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default skills;

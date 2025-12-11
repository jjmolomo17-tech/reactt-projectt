import React from "react";

const skills = ["React", "JavaScript", "Tailwind CSS", "GitHub", "Node.js"];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Skills: coding HTML, CSS and JavaScript</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-md">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";

const projects = [
  { title: "Portfolio Website", description: "A responsive portfolio built with React.", image: "https://via.placeholder.com/300" },
  { title: "Quiz App", description: "Interactive quiz app using React state.", image: "https://via.placeholder.com/300" },
  { title: "E-commerce UI", description: "Frontend store interface with Tailwind.", image: "https://via.placeholder.com/300" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

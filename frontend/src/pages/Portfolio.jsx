import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('api/projects/')
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-800">KPA Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {projects.map(project => (
          <div key={project.id} className="bg-white p-4 shadow rounded">
            {project.image && (
              <img
                src={`http://localhost:8000${project.image}`}
                alt={project.title}
                className="w-full h-48 object-cover rounded"
              />
            )}
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
            {project.metrics && (
              <p className="text-sm text-gray-600">
                Metrics: {JSON.stringify(project.metrics)}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
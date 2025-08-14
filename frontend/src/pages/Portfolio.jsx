import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects/')
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">KPA Projects</h1>
        {projects.length === 0 ? (
          <p className="text-gray-600 text-center">No projects yet. Add some in the admin panel!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <div
                key={project.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={project.image ? `http://localhost:8000${project.image}` : 'https://via.placeholder.com/400x200?text=No+Image'}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-600">{project.title}</h3>
                <p className="text-gray-700 mt-2">{project.description}</p>
                {project.metrics && (
                  <p className="text-sm text-gray-500 mt-2">
                    Metrics: {Object.entries(project.metrics).map(([key, value]) => `${key}: ${value}`).join(', ')}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Portfolio;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Trends() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    axios.get('/api/trends/')
      .then(res => setTrends(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">Civil Engineering Trends</h1>
        {trends.length === 0 ? (
          <p className="text-gray-600 text-center">No trends yet. Add some in the admin panel!</p>
        ) : (
          <div className="space-y-8">
            {trends.map(trend => (
              <div key={trend.id} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-blue-600">{trend.title}</h3>
                <div className="text-gray-700 mt-4 prose" dangerouslySetInnerHTML={{ __html: trend.content }} />
                <p className="text-sm text-gray-500 mt-4">
                  Published: {new Date(trend.published_at).toLocaleDateString()}
                  {trend.tags && ` | Tags: ${trend.tags}`}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Trends;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('/api/blogs/')
      .then(res => setBlogs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">Engineering Insights</h1>
        {blogs.length === 0 ? (
          <p className="text-gray-600 text-center">No blog posts yet. Add some in the admin panel!</p>
        ) : (
          <div className="space-y-8">
            {blogs.map(blog => (
              <div key={blog.id} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-blue-600">{blog.title}</h3>
                <div className="text-gray-700 mt-4 prose" dangerouslySetInnerHTML={{ __html: blog.content }} />
                <p className="text-sm text-gray-500 mt-4">
                  Published: {new Date(blog.published_at).toLocaleDateString()}
                  {blog.tags && ` | Tags: ${blog.tags}`}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;
import React, { useEffect, useState, useRef } from 'react';
import Repo from './Repo';

function Foreground() {
  const ref = useRef(null);
  const [data, setData] = useState([]);

  // Fetch data from GitHub API and filter repos without a description
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/a-n-u-p-01/repos');
        const result = await response.json();

        // Filter repositories that have a non-null description
        const filteredData = result.filter(repo => repo.description !== null);
        setData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div ref={ref} className="p-10 flex gap-5 flex-wrap justify-between">
    {data.map((repo, index) => (
      <Repo key={index} data={repo} reference={ref} className="basis-[calc(20%-1rem)]" />
    ))}
  </div>
  
  );
}

export default Foreground;

import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { useParams } from 'react-router-dom';
import { fetchData } from './api';

const MenPage = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(category)
      .then(response => setData(response))
      .catch(error => console.error('Error fetching data:', error));
  }, [category]);

  return (
    <Layout>
      <div>
        <h2>MEN</h2>
        {data.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </Layout>
  );
};

export default MenPage;

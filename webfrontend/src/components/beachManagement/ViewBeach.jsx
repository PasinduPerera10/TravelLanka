import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import img1 from '../assests/image1.jpg'

const ViewBeach = () => {
  const { id } = useParams();
  const [beach, setBeach] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:8060/beaches/beach/view/${id}`)
      .then((response) => {
        setBeach(response.data);
        setLoading(false);
        setError('');
      })
      .catch((error) => {
        setLoading(false);
        setError('Error while fetching beach details.');
        console.error("Error while fetching beach details:", error);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!beach) {
    return <div>Beach not found</div>;
  }

  return (
    <div>
      <h1>Beach Details</h1>
      <h2>{beach.title}</h2>
      <img src={img1} alt="Beach" style={{width:"100px", height:"100px"}}/>
      <p>{beach.description}</p>
      <p>Province: {beach.province}</p>
      <p>District: {beach.district}</p>
      <p>Category: {beach.category}</p>
      <div>
        <img src={`/beachimages/${beach.images}`} alt="Beach" />
      </div>
    </div>
  );
};

export default ViewBeach;

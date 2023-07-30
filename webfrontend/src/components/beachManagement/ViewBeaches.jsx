import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewBeaches = () => {
  const [beaches, setBeaches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8060/beaches/beach/view')
      .then((response) => {
        setBeaches(response.data);
        setLoading(false);
        setError('');
      })
      .catch((error) => {
        setLoading(false);
        setError('Error while fetching beaches.');
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8060/beaches/beach/delete/${id}`)
      .then(() => {
        setBeaches((prevBeaches) => prevBeaches.filter((beach) => beach._id !== id));
        setError(''); // Reset error state on successful delete
      })
      .catch((error) => {
        setError('Error deleting beach.');
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>All Beaches</h2>
      {error && <div>{error}</div>}
      {beaches.length === 0 && <div>No beaches found</div>}
      {beaches.map((beach) => (
        <div key={beach._id}>
          <h3>{beach.title}</h3>
          <p>{beach.description}</p>
          <p>Province: {beach.province}</p>
          <p>District: {beach.district}</p>
          <p>Category: {beach.category}</p>
          <div>
            {Array.isArray(beach.images) && beach.images.map((image, index) => (
              <img key={index} src={image} alt={`Beach ${index + 1}`} />
            ))}
          </div>
          <Link to={`/viewbeach/${beach._id}`}>View Details</Link>
          <Link to={`/updatebeach/${beach._id}`}>Update</Link>
          <button onClick={() => handleDelete(beach._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ViewBeaches;
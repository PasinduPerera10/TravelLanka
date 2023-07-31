import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateBeach = () => {
  const { id } = useParams();
  const [beach, setBeach] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null); // Initialize as null
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:8060/beaches/beach/view/${id}`)
      .then((response) => {
        setBeach(response.data);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setProvince(response.data.province);
        setDistrict(response.data.district);
        setCategory(response.data.category);
      })
      .catch((error) => {
        setErrorMessage('Error while fetching beach details.');
      });
  }, [id]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleProvinceChange = (e) => {
    setProvince(e.target.value);
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('province', province);
    formData.append('district', district);
    formData.append('category', category);

    // Check if image is not null before appending it to the form data
    if (image !== null) {
      formData.append('image', image);
    }

    axios
      .put(`http://localhost:8060/beaches/beach/update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        setSuccessMessage('Beach updated successfully!');
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage('Error while updating beach.');
        setSuccessMessage('');
      });
  };

  if (!beach) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Update Beach</h2>
      {successMessage && <div className="success">{successMessage}</div>}
      {errorMessage && <div className="error">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={handleDescriptionChange} />
        </div>
        <div>
          <label>Province:</label>
          <input type="text" value={province} onChange={handleProvinceChange} />
        </div>
        <div>
          <label>District:</label>
          <input type="text" value={district} onChange={handleDistrictChange} />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" value={category} onChange={handleCategoryChange} />
        </div>
        <div>
          <label>Upload Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateBeach;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateLocation = () => {
  const { id } = useParams();
  const [location, setBeach] = useState(null);
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
      .get(`https://visitlanka-60b4.onrender.com/beaches/location/view/${id}`)
      .then((response) => {
        setBeach(response.data);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setProvince(response.data.province);
        setDistrict(response.data.district);
        setCategory(response.data.category);
      })
      .catch((error) => {
        setErrorMessage('Error while fetching location details.');
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
      .put(`https://visitlanka-60b4.onrender.com/beaches/location/update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        setSuccessMessage('Location updated successfully!');
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage('Error while updating location.');
        setSuccessMessage('');
      });
  };

  if (!location) {
    return <div>Loading...</div>;
  }

  const categories = ["Beaches", "Cultural and Historical", "Wildlife and Nature", "Adventure and Trekking", "Ayurveda and Wellness", "Hill Country", "Cuisine", "Festivals and Events"];
  const provinces = ["Central Province", "Eastern Province", "North Central Province", "Northern Province", "North Western Province", "Sabaragamuwa Province", "Southern Province", "Uva Province", "Western Province"];

  return (
    <div>
      <h2>Update Location</h2>
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
          <select value={province} onChange={handleProvinceChange}>
            <option value="">Select a province</option>
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>District:</label>
          <input type="text" value={district} onChange={handleDistrictChange} />
        </div>
        <div>
          <label>Category:</label>
          <select value={category} onChange={handleCategoryChange}>
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
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

export default UpdateLocation;
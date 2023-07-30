import React, { useState } from 'react';
import axios from 'axios';

const AddBeach = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleProvinceChange = (e) => setProvince(e.target.value);
  const handleDistrictChange = (e) => setDistrict(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const handleImageChange = (e) => {
    // Handling a single image (overwrite the previous image)
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('province', province);
      formData.append('district', district);
      formData.append('category', category);

      // Append the single image to the form data
      if (image) {
        formData.append('image', image);
      }

      const response = await axios.post('http://localhost:8060/beaches/beach/new', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccessMessage('Beach added successfully'); // Assuming the response from the server contains the success message
      setErrorMessage('');
      // Reset the form after successful submission
      setTitle('');
      setDescription('');
      setProvince('');
      setDistrict('');
      setCategory('');
      setImage(null);

      // You can perform any additional actions here after successful submission
      // For example, display a success notification or navigate to another page
    } catch (error) {
      setErrorMessage('Error while adding beach.');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h2>Add New Beach</h2>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBeach;
import React, { useState } from 'react';
import axios from 'axios';

const AddBeach = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [category, setCategory] = useState('');
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleProvinceChange = (e) => setProvince(e.target.value);
  const handleDistrictChange = (e) => setDistrict(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const handleImage1Change = (e) => setImage1(e.target.files[0]);
  const handleImage2Change = (e) => setImage2(e.target.files[0]);
  const handleImage3Change = (e) => setImage3(e.target.files[0]);
  const handleImage4Change = (e) => setImage4(e.target.files[0]);
  const handleImage5Change = (e) => setImage5(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('province', province);
      formData.append('district', district);
      formData.append('category', category);
      formData.append('image1', image1);
      formData.append('image2', image2);
      formData.append('image3', image3);
      formData.append('image4', image4);
      formData.append('image5', image5);

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
      setImage1(null);
      setImage2(null);
      setImage3(null);
      setImage4(null);
      setImage5(null);

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
          <label>Upload Image 1:</label>
          <input type="file" accept="image/*" onChange={handleImage1Change} />
        </div>
        <div>
          <label>Upload Image 2:</label>
          <input type="file" accept="image/*" onChange={handleImage2Change} />
        </div>
        <div>
          <label>Upload Image 3:</label>
          <input type="file" accept="image/*" onChange={handleImage3Change} />
        </div>
        <div>
          <label>Upload Image 4:</label>
          <input type="file" accept="image/*" onChange={handleImage4Change} />
        </div>
        <div>
          <label>Upload Image 5:</label>
          <input type="file" accept="image/*" onChange={handleImage5Change} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBeach;
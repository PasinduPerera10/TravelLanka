import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateBeach = () => {
  const [ad, setAd] = useState({
    title: '',
    description: '',
    province: '',
    district: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8060/beaches/beach/view/${id}`)
      .then((res) => {
        setAd({
          title: res.data.title,
          description: res.data.description,
          province: res.data.province,
          district: res.data.district
        });
      })
      .catch((err) => {
        console.log('Unsucessfully');
      });
  }, [id]);

  const onChange = (e) => {
    setAd({ ...ad, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: ad.title,
      description: ad.description,
      province: ad.province,
      district: ad.district
    };

    axios
      .put(`http://localhost:8060/beaches/beach/update/${id}`, data)
      .then((res) => {
        navigate(`/viewads-client`);
      })
      .catch((err) => {
        console.log('Error in UpdateBookInfo!');
      });
  };

  return (
    <div className="container" style={{marginLeft:"250px"}}>
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Update Ad</h1>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">title</label>
            <input
              type='text'
              name='title'
              id='title'
              value={ad.title}
              onChange={onChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="desc" className="block text-gray-700 font-bold mb-2">description</label>
            <input
              type='text'
              name='description'
              id='description'
              value={ad.description}
              onChange={onChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">province</label>
            <input
              type='text'
              name='province'
              id='province'
              value={ad.province}
              onChange={onChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="desc" className="block text-gray-700 font-bold mb-2">district</label>
            <input
              type='text'
              name='district'
              id='district'
              value={ad.district}
              onChange={onChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex justify-center">
            <button
              type='submit'
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBeach;

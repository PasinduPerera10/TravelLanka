import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewBeach = (props) => {
  const [ad, setAd] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8060/beaches/beach/view/${id}`)
      .then((res) => {
        setAd(res.data);
      })
      .catch((err) => {
        console.log('Unsucessfully');
      });
  }, [id]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginLeft:"250px" }}>
      <div style={{ width: '80%', backgroundColor: '#f5f5f5', padding: '25px', borderRadius: '10px', boxShadow: '0px 5px 10px #d3d3d3' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>View Ad</h1>
        <br></br>
        <table style={{ width: '100%', borderCollapse: 'collapse', }}>
          <tbody>
            <tr><td style={{ padding: '10px', backgroundColor: '#ffffff' }}>
              <img src={typeof (ad.image1) !== 'undefined' ? require(`E:/Pro Work/My Developments/TravelLanka/webfrontend/src/components/beachimages/${ad.image1}`) : 'Error'} style={{ width: "100px", height: "100px", margin: "auto" }} alt="AD1" />
              <img src={typeof (ad.image2) !== 'undefined' ? require(`E:/Pro Work/My Developments/TravelLanka/webfrontend/src/components/beachimages/${ad.image1}`) : 'Error'} style={{ width: "100px", height: "100px", margin: "auto" }} alt="AD2" />
              </td></tr>
            <tr>
              <td style={{ padding: '10px', backgroundColor: '#fafafa', fontWeight: 'bold' }}>title</td>
              <td style={{ padding: '10px', backgroundColor: '#ffffff' }}>{ad.title}</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', backgroundColor: '#fafafa', fontWeight: 'bold' }}>description</td>
              <td style={{ padding: '10px', backgroundColor: '#ffffff' }}>{ad.description}</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', backgroundColor: '#fafafa', fontWeight: 'bold' }}>province</td>
              <td style={{ padding: '10px', backgroundColor: '#ffffff' }}>{ad.province}</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', backgroundColor: '#fafafa', fontWeight: 'bold' }}>district</td>
              <td style={{ padding: '10px', backgroundColor: '#ffffff' }}>{ad.district}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewBeach;

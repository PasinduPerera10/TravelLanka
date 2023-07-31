import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ViewBeach = () => {
  const { id } = useParams();
  const [beach, setBeach] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`https://visitlanka-backend.onrender.com/beaches/beach/view/${id}`)
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

  // Generate a unique class name based on the beach ID
  const cardClass = `unique-card-${beach.id}`;

  return (
    <CenteredDiv>
      <div>
        <CustomCard className={cardClass}>
          <CustomCardTitle>{beach.title}</CustomCardTitle>
          <CustomImageGrid>
          <CustomImage src={`/beachimages/${beach.image1}`} alt="Beach" />
            {/* <CustomImage src={`/beachimages/${beach.image2}`} alt="Beach" />
            <CustomImage src={`/beachimages/${beach.image3}`} alt="Beach" />
            <CustomImage src={`/beachimages/${beach.image4}`} alt="Beach" /> */}
            {/* <CustomImage src={`/beachimages/${beach.image5}`} alt="Beach" /> */}
          </CustomImageGrid>
          <CardBody>
            <CustomText>Province: {beach.province}</CustomText>
            <CustomText>District: {beach.district}</CustomText>
            {/* <CustomText>Category: {beach.category}</CustomText> */}
            <CustomText>{beach.description}</CustomText>
          </CardBody>
        </CustomCard>
      </div>
    </CenteredDiv>
  );
};

export default ViewBeach;

// Styled-components styles

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150vh;
  margin-top: -130px
`;

const CustomCard = styled.div`
  width: 47rem;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
`;

const CustomCardTitle = styled.h2`
  color: #000; /* Orange color */
  font-size: 24px;
  margin-bottom: 10px;
`;

const CustomImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

const CustomImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
`;

const CardBody = styled.div`
  max-height: 200px;
  overflow: hidden;
`;

const CustomText = styled.p`
  text-align: center;
  margin-bottom: 5px;
`;
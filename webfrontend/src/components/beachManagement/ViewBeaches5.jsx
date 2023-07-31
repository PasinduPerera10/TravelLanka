import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

// Styled-components styles
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 20px;
  padding: 20px;
`;

const CustomCard = styled(Card)`
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

const CustomCardTitle = styled(Card.Title)`
  text-align: center;
  color: #000;
  font-size: 20px;
  margin-bottom: 10px;
`;

const CenteredImage = styled(Card.Img)`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const CenteredText = styled(Card.Text)`
  text-align: center;
`;

// const CustomButtonGreen = styled(Button)`
//   background-color: #5cb85c;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   padding: 5px 10px;
//   margin-right: 5px;
//   cursor: pointer;
//   &:hover {
//     background-color: #449d44;
//   }
// `;

// const CustomButtonYellow = styled(Button)`
//   background-color: #f0ad4e;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   padding: 5px 10px;
//   margin-right: 5px;
//   cursor: pointer;
//   &:hover {
//     background-color: #ec971f;
//   }
// `;

// const CustomButtonRed = styled(Button)`
//   background-color: #d9534f;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   padding: 5px 10px;
//   margin-right: 5px;
//   cursor: pointer;
//   &:hover {
//     background-color: #c9302c;
//   }
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 10px;
// `;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Pagination = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const PaginationItem = styled.li`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: ${(props) => (props.active ? '#007bff' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#007bff')};
  border: 1px solid #007bff;
  border-radius: 5px;
  cursor: pointer;
`;

const PaginationLink = styled.span`
  cursor: pointer;
`;

const ViewBeaches5 = () => {
  const [beaches, setBeaches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    axios
      .get('https://visitlanka-backend.onrender.com/beaches/beach/view5')
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

  // const handleDelete = (id) => {
  //   axios
  //     .delete(`https://visitlanka-backend.onrender.com/beaches/beach/delete/${id}`)
  //     .then(() => {
  //       setBeaches((prevBeaches) => prevBeaches.filter((beach) => beach._id !== id));
  //       setError('');
  //     })
  //     .catch((error) => {
  //       setError('Error deleting beach.');
  //     });
  // };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get the current items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBeaches = beaches.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CardContainer>
        {error && <div>{error}</div>}
        {currentBeaches.length === 0 && <div>No beaches found</div>}
        {currentBeaches.map((beach) => (
          <CustomCard key={beach._id}>
            <CustomCardTitle>{beach.title}</CustomCardTitle>
            {/* Display the image1 */}
            <CenteredImage variant="top" src={`/beachimages/${beach.image1}`} alt="Beach" />
            <Card.Body>
              <CenteredText>{beach.description}</CenteredText>
              <CenteredText>Province: {beach.province}</CenteredText>
              <CenteredText>District: {beach.district}</CenteredText>
              <CenteredText>Category: {beach.category}</CenteredText>
              {/* <ButtonContainer>
                <Link to={`/viewbeach/${beach._id}`}>
                  <CustomButtonGreen variant={`button-${beach._id}`}>View Details</CustomButtonGreen>
                </Link>
                <Link to={`/updatebeach/${beach._id}`}>
                  <CustomButtonYellow variant={`button-${beach._id}`}>Update</CustomButtonYellow>
                </Link>
                <CustomButtonRed variant={`button-${beach._id}`} onClick={() => handleDelete(beach._id)}>
                  Delete
                </CustomButtonRed>
              </ButtonContainer> */}
            </Card.Body>
          </CustomCard>
        ))}
      </CardContainer>
      <PaginationContainer>
        {beaches.length > itemsPerPage && (
          <Pagination>
            {Array.from({ length: Math.ceil(beaches.length / itemsPerPage) }, (_, index) => (
              <PaginationItem key={index} active={index + 1 === currentPage}>
                <PaginationLink onClick={() => paginate(index + 1)}>{index + 1}</PaginationLink>
              </PaginationItem>
            ))}
          </Pagination>
        )}
      </PaginationContainer>
    </div>
  );
};

export default ViewBeaches5;

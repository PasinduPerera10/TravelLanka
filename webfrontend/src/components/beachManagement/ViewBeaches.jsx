import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, Row, Col } from "react-bootstrap";

function ViewBeaches() {
  const [getaddata, setAddata] = useState([]);

  const getdata = async () => {
    const res = await axios.get("http://localhost:8060/beaches/beach/view");
    console.log(res.data);

    if (res.status === 422 || !res) {
      console.log("error ");
    } else {
      setAddata(res.data.getaddata);

      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const deleteBeach = async (id) => {
    try {
      await axios.delete(`http://localhost:8060/beaches/beach/delete/${id}`);
      alert("Beach deleted successfully");
      getdata();
    } catch (err) {
      console.error(err);
      alert("Failed to delete beach");
    }
  };
  
  

  return (
    <div style={{marginLeft:"250px"}}>
      <div><h1>Beaches</h1></div>
    <Row xs={1} md={2} lg={3} className="g-4" style={{ margin: "0 auto", marginTop: "50px"}}>
      {getaddata.map((element, id) => (
        <Col key={id}>
          <Card>
            
          <Link to={`/view/${element._id}`} className="card-link">
  <Card className="my-3 shadow-sm">
    <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
      <Card.Img
        variant="top"
        src={typeof (element.image1) !== 'undefined' ? require(`E:/Pro Work/My Developments/TravelLanka/webfrontend/src/components/beachimages/${element.image1}`) : 'Error'}
        alt={element.name}
        className="img-fluid"
      />
    </div>
    <Card.Body>
      <Card.Title className="mb-3">{element.title}</Card.Title>
      <Card.Text className="mb-2">{element.description}</Card.Text>
      <Card.Text className="mb-2">{element.province}</Card.Text>
      <Card.Text className="mb-2">{element.district}</Card.Text>
    </Card.Body>
  </Card>
</Link>
<Link to={`/viewbeach/${element._id}`} className="btn btn-primary mr-2">
  View
</Link>
<Link to={`/updatebeach/${element._id}`} className="btn btn-secondary mr-2">
  Update
</Link>
<button onClick={() => deleteBeach(element._id)} className="btn btn-danger mr-2">
  Delete
</button>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
}

export default ViewBeaches;

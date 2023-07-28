import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const AddBeach = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("province", province);
    formData.append("district", district);
    formData.append("image1", image1);
    formData.append("image2", image2);
    try {
      const result = await axios.post("http://localhost:8060/beaches/beach/new", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (result?.status === 201) {
        alert("Success");
        navigate("/");
        resetForm();
      }else {
        // Handle other response statuses (if needed)
        console.log("Server response:", result); // Log the response for debugging purposes
      }
    } catch (err) {
      console.error(err?.response?.data?.errorMessage);
      alert(err?.response?.data?.errorMessage);
      console.log("Server response:", err);
    }
  };

  const handleFileChange1 = (e) => {
    setImage1(e.target.files[0]);
  };

  const handleFileChange2 = (e) => {
    setImage2(e.target.files[0]);
  };

  const resetForm = (e) => {
    // setName("");
    // setDesc("");
    // setImage1(null);
    // setImage2(null);
    // setImage3(null);
    // setImage4(null);
    // setImage5(null);
  };

  return (
    <div className="addad-contatiner">
      <div className="addad-form">
      <Form onSubmit={handleSubmit} style={{ width: "400px" }}>
        <div className="addad-form-left">
        <Form.Group controlId="condition">
          <Form.Label>title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </Form.Group>

        
        <Form.Group controlId="brand">
          <Form.Label>description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </Form.Group>

       
        <Form.Group controlId="name">
          <Form.Label>province</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter province"
            required
            onChange={(e) => setProvince(e.target.value)}
            value={province}
          />
        </Form.Group>

      
        <Form.Group controlId="trim">
          <Form.Label>district</Form.Label>
          <Form.Control
            type="district"
            placeholder="Enter district"
            required
            onChange={(e) => setDistrict(e.target.value)}
            value={district}
          />
        </Form.Group>

        </div>
        <div className="addad-form-middle">

        <Form.Group controlId="image1">
          <Form.Label>Image1</Form.Label>
          <Form.Control type="file" onChange={handleFileChange1} />
        </Form.Group>

        <Form.Group controlId="image2">
          <Form.Label>Image2</Form.Label>
          <Form.Control type="file" onChange={handleFileChange2} />
        </Form.Group>
        </div>
        <div className="addad-button">
          <Button
            onClick={resetForm}
            variant="secondary"
            size="lg"
            style={{ width: "45%", margin: "5px" }}
          >
            Reset
          </Button>

          <Button
            variant="primary"
            size="lg"
            type="submit"
            style={{ width: "45%", margin: "5px" }}
          >
            Add New Beach
          </Button>
        </div>
      </Form>
      </div>
    </div>
  );
};

export default AddBeach;

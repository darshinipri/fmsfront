import axios from "axios";
import Tab from 'react-bootstrap/Tab';
import { Nav, Navbar } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Row,
  FormGroup,
  Col,
  InputGroup,
  Spinner,
  Alert,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";

const AddProduct = (props) => {
    const [typelist, setTypelist] = useState([]);
  const [pro, setPro] = useState({ status: { status: "pndg" } });
  const [alert, setAlert] = useState();
  const [popttl, setpopttl] = useState("sample");
  const [popmsg, setpopmsg] = useState("sample");

    const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h1">{popttl}</Popover.Title>
      <Popover.Content>{popmsg}</Popover.Content>
    </Popover>
  );

  useEffect(() => {
    axios.get("http://localhost:8080/fms/product").then((res) => {
      console.log(res);
      console.log(res.data.response);
      setTypelist(res.data.response);
    });
  }, []);


useEffect(() => {}, [popttl]);

  const product = (e) => {
    e.preventDefault();
    setAlert(<Spinner animation="border" variant="success" />);
    console.log(pro);
    axios.post("http://localhost:8080/fms/product",pro).then((res) => {
      console.log(res);
      console.log(res.data);
      if (res.data.error) {
        setAlert(
          <Alert variant="danger">Unable to add the product! please Try Later</Alert>
        );
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setAlert(
          <Alert variant="success">
            Added Successfully
            <br></br>
            Your Product Id is {res.data.response.productId}
            <br></br>
            Kindly make note of it for future reference
          </Alert>
        );
        document.product.reset();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  };

 return (
    <div >
      <div>{alert}</div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="dark" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Add Product</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Upadte Product</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third"> Delete Product</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="4">View Product</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <div className="card card-body  offset-md-2 col-md-8 mt-5">
        <Form name="product" onSubmit={product}>
        <h1>Product</h1>
        <hr />
        <Form.Group as={Row}>
          <Col>
          <Form.Label>Product Name</Form.Label>
          <OverlayTrigger
              trigger="focus"
              placement="bottom"
              overlay={popover}
            >
              <Form.Control
                required
                onClick={() => {
                  setpopttl("Product Name");
                
                }}
                onChange={(e) => {
                  const val = e.target.value;
                  setPro((prevState) => {
                    return { ...prevState, productName: val };
                  });
                }}></Form.Control>
                 </OverlayTrigger>
          </Col>
          <Col>
            <Form.Label>Company Name</Form.Label>
            <OverlayTrigger
              trigger="focus"
              placement="bottom"
              overlay={popover}
            >
              <Form.Control
                required
                onClick={() => {
                  setpopttl("Company Name");
                
                }}
                onChange={(e) => {
                  const val = e.target.value;
                  setPro((prevState) => {
                    return { ...prevState, companyName: val };
                  });
                }}
              ></Form.Control>
            </OverlayTrigger>
          </Col>
        </Form.Group>    
        
        <Button
          type="submit"
          variant="success"
          className="offset-md-5"
          onClick={product}
        >
          Add Product
        </Button>
        </Form>
        </div>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <div className="updateblock">
      <div className="col-md-4 offset-md-4 card card-body mt-5 queryblock">
        <Form onSubmit={forward}>
          <Form.Group>
            <Form.Label>Product Id</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setProductId(e.target.value);
              }}
            ></Form.Control>
          </Form.Group>
          <Button
            type="submit"
            onClick={forward}
            className="offset-md-5"
            variant="success"
          >
            Find
          </Button>
        </Form>
      </div>
    </div>
        
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
      
        </div>
  );
};
export default AddProduct;
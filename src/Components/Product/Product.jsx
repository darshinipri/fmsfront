import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Nav, Button, Navbar } from "react-bootstrap";


class Product extends Component {
  render() {
    return (
      <div>
        <h1>PRODUCTS</h1>
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
        <form>
      <div className="card card-body  offset-md-2 col-md-8 mt-5  appblock">
        <label htmlFor="ProductName">Product Name</label>
        <input
          type="text"
          id="ProductName"
          name="ProductName"
        />
        <label htmlFor="Company Name">Company Name</label>
        <input
          type="text"
          id="password"
          name="password"
        />
        <br></br>
    
      <button>Add Product</button>
      </div>
    </form>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

      </div>
    );
  }
}

export default Product;


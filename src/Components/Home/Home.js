import React, { Fragment,useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Product from "../Product/Product"
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Nav, Button, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AddProduct from '../Product/AddProduct';




const Home = () => (
  <div>
      <div>
   <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">FMS</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/AddProduct">Home</Nav.Link>
      <Nav.Link href="/AddProduct">Pricing</Nav.Link>
      <NavDropdown title="Features" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/AddProduct" >Product</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Product Plan</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">More</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
 </div>
  <div>
    <Router>
      <Route  exact path="/AddProduct" component={AddProduct}></Route>
    </Router>
    </div>
    </div>
);

export default Home;

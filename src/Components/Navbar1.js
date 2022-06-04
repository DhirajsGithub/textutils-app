// import bootstrap from 'bootstrap'
import React from 'react'      // imr
import { NavDropdown, Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import PropTypes from 'prop-types'     // impt 


// rfce 
function Navbar1(props) {
  return (
    <div>
    <Navbar color='white' bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">{props.title}</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-50 my-lg-0"
        style={{ maxHeight: '100px'}}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Content" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" >
          {props.about}
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>

  )
}

export default Navbar1

// setting types to props
Navbar1.propTypes = {
    title: PropTypes.string,  // pts
    content: PropTypes.string.isRequired,    // --> says that content must be pass as props, if not then it will show error 
    // if default value is used and content is not pass as props then it won't show any erroe
    about: PropTypes.string
}

// setting default props. If we don't use any props in component then use the default one
Navbar1.defaultProps = {
    title : "set titile here",
    content : 'set content here',
    about : "About us"
}
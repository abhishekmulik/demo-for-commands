import React from 'react'
import {Navbar,Container,Offcanvas,Nav} from 'react-bootstrap'


function HeaderNavbar() {
  return (
    <div>
    <Navbar bg="light" expand={false} >
    <Container fluid>
    <Navbar.Brand href="/">Newsomatic</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
      </Offcanvas.Header>     
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/">Top news</Nav.Link>
          <Nav.Link href="addEvent">Post news</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    </div>
  )
}

export default HeaderNavbar


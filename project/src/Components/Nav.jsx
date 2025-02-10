import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, Outlet} from "react-router-dom"
import React from 'react';
import { FaHome } from "react-icons/fa";
import { MdInsertDriveFile } from "react-icons/md";
import { CgDisplayGrid } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TopNav = () =>{
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className='admin'>ADMIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link >Services</Nav.Link>
            <Nav.Link >Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item >Action</NavDropdown.Item>
              <NavDropdown.Item >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
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


        <div className="content">
          
        <div className="side">
           <nav>
            <ul>
                <li><Link className='linkstyle' to={'home'}><FaHome />Home</Link></li>
                <li><Link className='linkstyle' to={'insert'} ><MdInsertDriveFile />Insert</Link></li>
                <li><Link className='linkstyle' to={'display'}><CgDisplayGrid />Display</Link></li>
                <li><Link className='linkstyle' to={'search'}><MdDelete />Delete</Link></li>
                <li><Link className='linkstyle' to={'update'}><FaEdit />Edit</Link></li>
            </ul>
           </nav>
        </div>


        <div className="sidecontent">
            <Outlet/>
        </div>


        </div>

        
         
    

       
        </>
    )
}

export default TopNav
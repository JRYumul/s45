import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function NavBar (){
    return(
        <Navbar bg="light" expand="lg">
            <Link className="navbar-brand" to="/">Zuitt Booking</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/courses">Courses</Link>
                <Link className="nav-link" to="/register">Register</Link>
                <Link className="nav-link" to="/login">Log In</Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

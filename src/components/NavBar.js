import { useContext } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import UserContext from "../UserContext"

export default function NavBar (){
    const { user, unsetUser } = useContext(UserContext)
    const history = useHistory()

    const logout = () => {
        unsetUser()
        //history.push redirects the user to the given location
        history.push('/login')
    }

    let rightNav = (!user.id) ? (
        <>
            <Link className="nav-link" to="/register">Register</Link>
            <Link className="nav-link" to="/login">Log In</Link>        
        </>
    ) : (
        <Nav.Link onClick={logout}>Log Out</Nav.Link>
    )

    return(
        <Navbar bg="light" expand="lg">
            <Link className="navbar-brand" to="/">Zuitt Booking</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/courses">Courses</Link>
                {rightNav}
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}
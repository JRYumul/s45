import { useState, useEffect, useContext } from 'react'
import { Container } from "react-bootstrap";
import AdminView from "../components/AdminView";
import UserView from "../components/UserView";
import UserContext from '../UserContext';

export default function Courses() {

    const { user } = useContext(UserContext);

    const [courses, setCourses] = useState([])

    const fetchData = () => {
        fetch(`${ process.env.REACT_APP_API_URL}/courses/all`)
        .then(res => res.json())
        .then(data => {
            setCourses(data)
        })        
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <Container>
        {(user.isAdmin === true)
            ? <AdminView coursesData={courses} fetchData={fetchData}/>
            : <UserView coursesData={courses}/>
        }
        </Container>
    );
}
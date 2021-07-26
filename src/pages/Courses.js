import { useState, useEffect } from 'react'
import { Container } from "react-bootstrap";
import Course from "../components/Course";
// import coursesData from "../data/courses";

export default function Courses() {
    // const courses = coursesData.map(course => {
    //     return (
    //         //"courseData" in this case is a user-defined label for the data that we want to pass to our Course Component
    //         <Course courseProp={course} key={course.id}/>
    //     );
    // });

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch(`${ process.env.REACT_APP_API_URL}/courses/all`)
        .then(res => res.json())
        .then(data => {
           console.log(data)

            const coursesArr = data.map(course => {
                return (
                    <Course courseProp={course} key={course._id}/>
                );
            });

            //set the courses state to the result of our map function to bring our returned course components outside of the scope of this .then where our return statement below can see it
            setCourses(coursesArr)
        })
    }, [])

    return(
        <Container>
            {courses}
        </Container>
    );
}
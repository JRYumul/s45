import { Container } from "react-bootstrap";
import Course from "../components/Course";
import coursesData from "../data/courses";

export default function Courses (){
    const courses = coursesData.map((element)=>{
        return (
            //"courseData" in this case is a user-defined label for the data that we want to pass to our Course Component
            <Course courseProp={element} key={element.id}/>
        ) 
    })
    return(
        <Container>
            {courses}
        </Container>

    )
 
}
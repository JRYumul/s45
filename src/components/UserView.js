import { useState, useEffect } from 'react'
import Course from "./Course";
// import coursesData from "../data/courses";

export default function UserView({coursesData}) {
    console.log(coursesData)
    // const courses = coursesData.map(course => {
    //     return (
    //         //"courseData" in this case is a user-defined label for the data that we want to pass to our Course Component
    //         <Course courseProp={course} key={course.id}/>
    //     );
    // });

    const [courses, setCourses] = useState([])

    useEffect(() => {

        const coursesArr = coursesData.map(course => {
        	if(course.isActive === true){
				return (
					<Course courseProp={course} key={course._id}/>
				)
        	}else{
        		return null;
        	}
        });

        //set the courses state to the result of our map function to bring our returned course components outside of the scope of this .then where our return statement below can see it
        setCourses(coursesArr)

    }, [coursesData])

    return(
        <>
            {courses}
        </>
    );
}
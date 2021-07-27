import { useState, useEffect, useContext } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link, useParams, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import UserContext from '../UserContext';

export default function SpecificCourse(){

	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [price, setPrice] = useState(0)

	const { user } = useContext(UserContext);
	//useParams() contains any values we are trying to pass in the URL stored in a key/value pair

	//useParams is how we receive the courseId passed via the URL
	const { courseId } = useParams();

	const history = useHistory();

	useEffect(()=> {
		// console.log(courseId)

		//MINI ACTIVITY:
		//Inside of this useEffect, fetch the data for the specific course and display the results in the console

		//PART 2:
		//Display the fetch request results in the component return statement

		fetch(`${ process.env.REACT_APP_API_URL }/courses/${courseId}`)
		.then(res => res.json())
		.then(data => {
			// console.log(data)
			setName(data.name)
			setDescription(data.description)
			setPrice(data.price)
		})

	}, [])

	const enroll = (courseId) => {
		fetch(`${ process.env.REACT_APP_API_URL }/users/enroll`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${ localStorage.getItem('token') }`
			},
			body: JSON.stringify({
				courseId: courseId
			})
		})
		.then(res => res.json())
		.then(data => {
			// console.log(data)
			if(data === true){
				Swal.fire({
					title: "Successfully enrolled",
					icon: 'success',
					text: "You have successfully enrolled for this course."
				})

				history.push("/courses")
			}else{
				Swal.fire({
					title: "Something went wrong",
					icon: "error",
					text: "Please try again."
				})
			}
		})
	}

	return(
		<Container>
			<Card className="mt-5">
				<Card.Header className="bg-dark text-white text-center pb-0">
					<h4>{name}</h4>
				</Card.Header>
				<Card.Body>
					<Card.Text>{description}</Card.Text>
					<h6>Price: Php {price}</h6>
				</Card.Body>
				<Card.Footer>
					{user.id !== null
						? <Button variant="primary" block onClick={() => enroll(courseId)}>Enroll</Button>
						: <Link className="btn btn-danger btn-block" to="/login">Log in to Enroll</Link>
					}
				</Card.Footer>				
			</Card>
		</Container>
	)
}
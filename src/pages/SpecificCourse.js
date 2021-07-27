import { useState, useEffect, useContext } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

import UserContext from '../UserContext';

export default function SpecificCourse(){

	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [price, setPrice] = useState(0)

	const { user } = useContext(UserContext);
	//useParams() contains any values we are trying to pass in the URL stored in a key/value pair

	//useParams is how we receive the courseId passed via the URL
	const { courseId } = useParams();

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
						? <Button variant="primary" block>Enroll</Button>
						: <Link className="btn btn-danger btn-block" to="/login">Log in to Enroll</Link>
					}
				</Card.Footer>				
			</Card>
		</Container>
	)
}
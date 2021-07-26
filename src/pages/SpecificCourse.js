import { useEffect, useContext } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

import UserContext from '../UserContext';

export default function SpecificCourse(){

	const { user } = useContext(UserContext);
	//useParams() contains any values we are trying to pass in the URL stored in a key/value pair
	const { courseId } = useParams();

	useEffect(()=> {
		console.log(courseId)
	}, [])

	return(
		<Container>
			<Card className="mt-5">
				<Card.Header className="bg-dark text-white text-center pb-0">
					<h4>Name</h4>
				</Card.Header>
				<Card.Body>
					<Card.Text>Description</Card.Text>
					<h6>Price: Php Price</h6>
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
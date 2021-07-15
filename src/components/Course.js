import { Card, Button } from 'react-bootstrap';

// In this file, create a card component showing a particular course with the following information:

//Name: Sample Course
//Description: Lorem Ipsum placeholder text
//Price: Any

export default function Course(){
	return(
		<Card>
			<Card.Body>
				<Card.Title>Sample Course</Card.Title>
				<h6>Description:</h6>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur ea, animi, rem voluptate voluptas provident quasi alias laborum optio ad soluta molestiae. Non mollitia praesentium distinctio? Ab, quaerat ea.</p>
				<h6>Price</h6>
				<p>PHP 40,000</p>
				<Button variant="primary">Enroll</Button>
			</Card.Body>
		</Card>
	)
}
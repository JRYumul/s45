import { Row, Col, Button, Jumbotron } from 'react-bootstrap';

export default function Banner(){
	return(
		<Row>
			<Col>
				<Jumbotron>
					<h1>Zuitt Coding Bootcamp</h1>
					<p>Opportunities for everyone, everywhere.</p>
					<Button variant="primary">Enroll now!</Button>
				</Jumbotron>
			</Col>
		</Row>
	)
}
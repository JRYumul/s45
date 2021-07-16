import { Row, Col, Button, Jumbotron } from 'react-bootstrap';

export default function Banner(){
    return (
        <Row>
            <Col>
                <Jumbotron>
                    <h1>Zuitt Coding Bootcamp</h1>
                    <p>Opportunities for everyone.</p>
                    <Button variant="primary">Enroll Now</Button>
                </Jumbotron>
            </Col>   
        </Row>
    )
}
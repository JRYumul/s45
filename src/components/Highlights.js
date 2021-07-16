import { Row, Col, Card } from 'react-bootstrap';

export default function Highlights(){
    return (
        <Row>
            <Col xs={12} md={4}>
                <Card className="card-highlight">
                    <Card.Body>
                        <Card.Title>Learn From Home</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur ea, animi, rem voluptate voluptas provident quasi alias laborum optio ad soluta molestiae. Non mollitia praesentium distinctio? Ab, quaerat ea.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card className="card-highlight">
                    <Card.Body>
                        <Card.Title>Study Now, Pay Later</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur ea, animi, rem voluptate voluptas provident quasi alias laborum optio ad soluta molestiae. Non mollitia praesentium distinctio? Ab, quaerat ea.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card className="card-highlight">
                    <Card.Body>
                        <Card.Title>Be Part of Our Community</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur ea, animi, rem voluptate voluptas provident quasi alias laborum optio ad soluta molestiae. Non mollitia praesentium distinctio? Ab, quaerat ea.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>  
        </Row>
    )
}
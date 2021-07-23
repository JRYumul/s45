import { Row, Col, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Banner({bannerProps}){

    console.log(bannerProps)

    const { title, content, destination, label } = bannerProps;

    return (
        <Row>
            <Col>
                <Jumbotron>
                    <h1>{title}</h1>
                    <p>{content}</p>
                    <Link className="btn btn-primary" to={destination}>{label}</Link>
                </Jumbotron>
            </Col>   
        </Row>
    )
}
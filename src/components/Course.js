import { Card, Button} from 'react-bootstrap'

export default function Course({courseProp}){
    const {name, description, price} = courseProp
    console.log(name)
    return (
            <Card className="card-highlight">
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h6>{description}</h6>
                    <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur ea, animi, rem voluptate voluptas provident quasi alias laborum optio ad soluta molestiae. Non mollitia praesentium distinctio? Ab, quaerat ea.
                    </Card.Text>
                    <h6>Price:</h6>
                    <p>{price}</p>
                    <Button variant="primary">Enroll</Button>
                </Card.Body>
            </Card>        
    )
}
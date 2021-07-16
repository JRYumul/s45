import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Course({ courseProp }){
    const { name, description, price } = courseProp;
    // console.log(name);

    // Course states
    // [ getter, setter ] -> state hooks
    // getter and setter identifiers are user-defined
    // setter(<expression>)
    // -> is a function that accepts an expression as an argument
    // -> the argument provided will update the value of getter
    // useState(<initial_value>)
    // <initial_values> -> any valid JavaScript data types
    const [ count, setCount ] = useState(0); // will monitor enrollment in a course
    const [ seatsCount, setSeatsCount ] = useState(30); // will monitor the number of available seats

    // function enroll() {
    //     setCount(count + 1);
    // }
    const enroll = () => {
        setCount(count + 1);
    };

    const updateSeats = () => {
        setSeatsCount(seatsCount - 1);
    };

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
                    <p>{count} enrollees</p>
                    <Button onClick={() => {
                        if (seatsCount === 0) {
                            // do something
                            alert('No more seats available');
                        } else {
                            enroll();
                            updateSeats();
                        }
                    }} variant="primary">Enroll</Button>
                </Card.Body>
            </Card>        
    );
}
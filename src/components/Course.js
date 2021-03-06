import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Course({ courseProp }){
    const { _id, name, description, price } = courseProp;
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
    //for the enroll button
    const [isDisabled, setIsDisabled] = useState(false);

    // function enroll() {
    //     setCount(count + 1);
    // }
    const enroll = () => {
        setCount(count + 1);
        setSeatsCount(seatsCount - 1);
    };


    useEffect(()=>{

        if(seatsCount === 0){
            setIsDisabled(true);
        }
    }, [seatsCount])


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
{/*                    <p>{count} enrollees</p>
                    <p>{seatsCount} Seats Remaining</p>
                    {isDisabled ? 
                        <Button onClick={enroll} variant="primary" disabled>Enroll</Button>
                     :
                        <Button onClick={enroll} variant="primary">Enroll</Button>
                    }*/}
                    <Link className="btn btn-primary" to={`/courses/${_id}`}>Details</Link>
                </Card.Body>
            </Card>        
    );
}
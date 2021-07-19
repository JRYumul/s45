import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


export default function Register() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [verifyPassword, setVerifyPassword] = useState('');

	//EXPLANATION FOR THE SCRIPT WE USED IN THE REGISTRATION;:
	//The values is in the fields of the form is bound to the getter of the state and the event is bound to the setter. This is what is called two-way binding.

	//"Bind" the user input states into their corresponding input fields via onChange JSX event handler. Also, set the values of the form input fields as their respective states to implement the two-way binding.

	//What is two way binding?
	//The two data binding means The data we changed in the view has updated the state.
	//The data in the state has updated view



	//let's create a function that will simulate an actual register page
	//we want to add an alert if registration is successful
	function registerUser(e){
		e.preventDefault(); 

		//let's modify our current logic to validate the data inserted by the user
		if((email !== '' && password !== '' && verifyPassword !== '') && (password === verifyPassword)){
			alert('You have successfully registered');

		}else{
			alert('Something Went Wrong, Check your Credentials')
		}

		//clearout the data inside the input fields
		//call the state setters
		setEmail('');
		setPassword('');
		setVerifyPassword('');
	}

	return(
		<Form onSubmit={ (e) => registerUser(e)}>
			<Form.Group>
				<Form.Label>Email Address:</Form.Label>
				<Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required/>
				<Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group>
				<Form.Label>Password:</Form.Label>
				<Form.Control type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} required/>
			</Form.Group>

			<Form.Group>
				<Form.Label>Verify Password:</Form.Label>
				<Form.Control type="password" placeholder="Verify Password" value={verifyPassword} onChange={e => setVerifyPassword(e.target.value)} required/>
			</Form.Group>

			<Button variant="primary" type="submit">Submit</Button>
		</Form>


		)
}
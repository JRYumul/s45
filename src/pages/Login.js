//Using the code from the Register page component, create a Login.js in the pages folder and create a page that simulates the login using an email and password.

//Also create a function that fires when the login form is submitted that shows a sweetalert2 alert confirming user log in AND set all states back to an empty string

//Update the App.js so that the Login page is shown.

import { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'

export default function Login(){
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const loginUser = (e) => {
		e.preventDefault()

		Swal.fire({
			title: "Login successful",
			icon: "success",
			text: "You have successfully logged in."
		})

		setEmail("")
		setPassword("")
	}

	return(
		<Container>
			<Form onSubmit={e => loginUser(e)}>
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

				<Button variant="primary" type="submit">Login</Button>

			</Form>
		</Container>
	)
}
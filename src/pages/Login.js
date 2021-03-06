//Using the code from the Register page component, create a Login.js in the pages folder and create a page that simulates the login using an email and password.

//Also create a function that fires when the login form is submitted that shows a sweetalert2 alert confirming user log in AND set all states back to an empty string

//Update the App.js so that the Login page is shown.

import { useState, useContext } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';

export default function Login(){
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	//"consume" the UserContext object via the useContext hook to access our global user state and its state setter
	const { user, setUser } = useContext(UserContext)

	// console.log(user)

	const loginUser = (e) => {
		e.preventDefault()

		fetch(`${ process.env.REACT_APP_API_URL }/users/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
		.then(res => res.json())
		.then(data => {
			// console.log(data)

			if(typeof data.access !== "undefined"){
				localStorage.setItem('token', data.access)
				retrieveUserDetails(data.access)
			}else{
				Swal.fire({
					title: "Authentication failed",
					icon: "error",
					text: "Check your login details and try again."
				})
			}
		})

		// Swal.fire({
		// 	title: "Login successful",
		// 	icon: "success",
		// 	text: "You have successfully logged in."
		// })

		// localStorage.setItem('email', email)
		
		// setUser({
		// 	email: email
		// })

		// setEmail("")
		// setPassword("")
	}

	const retrieveUserDetails = (token) => {
	    fetch(`${ process.env.REACT_APP_API_URL }/users/details`, {
	      headers: {
	        Authorization: `Bearer ${ token }`
	      }
	    })
	    .then(res => res.json())
	    .then(data => {
	        setUser({
	          id: data._id,
	          isAdmin: data.isAdmin
	        })	      
	    })		
	}

	if(user.id != null){
		return <Redirect to="/"/>
	}

	return(
		<Container>
			<Form className="mt-3" onSubmit={e => loginUser(e)}>
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
//let's demonstrate the useEffect Hook and events

//Base Imports
import React, { useState, useEffect } from 'react';

//Bootstrap Components
import { Container, Button } from 'react-bootstrap';


export default function Counter() {

	const [count, setCount] = useState(0)

	//Effect hooks in React allow us to execute a piece of code whenever a component gets rendered to the page or if the value of a state changes.
	//using the useEffect requires two arguments: a function and an array of variables
	//When the value of a variable in a given array is changed, the given function will be triggered
	useEffect(() =>{
		document.title = `You clicked ${count} times`
	}, [count])

	/*
	useEffect

	useEffect allows us to perform tasks/function on initial render:
		-when the component is displayed for the first time

	What allows us to control when our useEffect will run AFTER the initial render?
		-We add an optional dependency array to control when useEffect will run, instead that it runs on initial render and when states are updated, we can control the useEffect to run only when the state/s in the dependency array is updated.

	When the optional dependency array is empty, when will our useEffect run?
		-The useEffect will run ONLY on initial render
	*/

	//In the case of the code above, when the value of count has been changed, the page title will be updated with the number of times the button has been clicked

	//in the button component, we see the use of onClick event prop. Every time the button is clicked, it uses an anonymous function that will update the count state.
	return(
		<Container>
			<p>You clicked {count}</p>
			<Button variant="primary" onClick={() => setCount(count + 1)}>Click Me</Button>
		</Container>

		)
}
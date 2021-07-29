import { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

export default function AdminView(props){

	//destructure our courses data from the props being passed by the parent component
	//as well as our fetchData function
	const { coursesData, fetchData } = props

	const [courses, setCourses] = useState([])
	const [showEdit, setShowEdit] = useState(false)
	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [price, setPrice] = useState(0)

	const openEdit = (courseId) => {

		fetch(`${ process.env.REACT_APP_API_URL}/courses/${ courseId }`)
		.then(res => res.json())
		.then(data => {
			// console.log(data)
			//ACTIVITY:
			//Make it so that when our Edit Modal is opened, all input values are populated with the course information that we fetched
			setName(data.name)
			setDescription(data.description)
			setPrice(data.price)
		})
		setShowEdit(true)
	}

	const closeEdit = () => {
		setShowEdit(false)
	}

	useEffect(() => {

		const coursesArr = coursesData.map(course => {
			return(
				<tr key={course._id}>
					<td>{course.name}</td>
					<td>{course.description}</td>
					<td>{course.price}</td>
					<td>
						{course.isActive
							? <span>Available</span>
							: <span>Unavailable</span>
						}
					</td>
					<td>
						<Button variant="primary" size="sm" onClick={() => openEdit(course._id)}>Update</Button>
						{course.isActive
							?
							<Button variant="danger" size="sm" onClick={() => archiveToggle(course._id, course.isActive)}>Disable</Button>
							:
							<Button variant="success" size="sm" onClick={() => archiveToggle(course._id, course.isActive)}>Enable</Button>
						}
					</td>
				</tr>
			)
		})

		setCourses(coursesArr)

	}, [coursesData])

	const editCourse = (e) => {
		e.preventDefault()

		//OPTIONAL HOMEWORK:
		//Finish the edit course functionality (when user submits form, the course is edited based on the input values)
		//Something to consider: How do we get (and pass) the specific course's ID?
	}

	const archiveToggle = (courseId, isActive) => {
		fetch(`${ process.env.REACT_APP_API_URL }/courses/${ courseId }/archive`, {
			method: 'PUT',
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${ localStorage.getItem('token') }`
			},
			body: JSON.stringify({
				isActive: isActive
			})
		})
		.then(res => res.json())
		.then(data => {
			//call fetchData upon receiving the response from the server so we can repopulate the data, which makes our component re-render.
			fetchData()
			console.log(data)
		})
	}

	return(
		<>
			<div className="text-center my-4">
				<h2>Admin Dashboard</h2>
				<div className="d-flex justify-content-center">
					<Button variant="primary">Add New Course</Button>			
				</div>			
			</div>
			<Table striped bordered hover responsive>
				<thead className="bg-dark text-white">
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Price</th>
						<th>Availability</th>
						<th>Actions</th>
					</tr>					
				</thead>
				<tbody>
					{courses}
				</tbody>
			</Table>
			{/*EDIT MODAL*/}
			<Modal show={showEdit} onHide={closeEdit}>
				<Modal.Header closeButton>
					<Modal.Title>Edit Course</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={e => editCourse(e)}>
						<Form.Group controlId="courseName">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" value={name} onChange={e => setName(e.target.value)} required/>
						</Form.Group>
						<Form.Group controlId="courseDescription">
							<Form.Label>Description</Form.Label>
							<Form.Control type="text" value={description}  onChange={e => setDescription(e.target.value)} required/>
						</Form.Group>
						<Form.Group controlId="coursePrice">
							<Form.Label>Price</Form.Label>
							<Form.Control type="number" value={price}  onChange={e => setPrice(e.target.value)} required/>
						</Form.Group>	
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={closeEdit}>Close</Button>
					<Button variant="success" type="submit">Submit</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}
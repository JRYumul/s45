import { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';

export default function AdminView(props){

	const { coursesData } = props

	const [courses, setCourses] = useState([])

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
						<Button variant="primary" size="sm">Update</Button>
						{course.isActive
							?
							<Button variant="danger" size="sm">Disable</Button>
							:
							<Button variant="success" size="sm">Enable</Button>
						}
					</td>
				</tr>
			)
		})

		setCourses(coursesArr)

	}, [coursesData])

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
		</>
	)
}
import React from "react";
import { useState, useEffect } from "react";
import Input from "../Input/Input";
import "./Body.css";

const Body = () => {
	const [records, setRecord] = useState([]);

	useEffect(() => {
		fetch("https://dummyjson.com/users")
			.then((response) => response.json())
			.then((data) => {
				setRecord(data.users);
			})
			.catch((error) => {
				console.log("Error: ", error);
			});
	}, []);

	return (
		<div className='body-container'>
			<Input />
			<table className='table-container'>
				<thead>
					<tr>
						<th>S. No</th>
						<th>Name</th>
						<th>Age</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Gender</th>
					</tr>
				</thead>
				<tbody className='table-body' id='table-body'>
					{records.map((list, index) => (
						<tr key={index + 1}>
							<td>{index + 1}</td>
							<td>{list.firstName + " "+list.lastName}</td>
							<td>{list.age}</td>
							<td>{list.email}</td>
							<td>{list.phone}</td>
							<td>{list.gender}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Body;

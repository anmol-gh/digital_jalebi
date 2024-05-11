import React from "react";
import { useState, useEffect } from "react";
import "./Input.css";

const Input = () => {
	//Use state for multiple variables
	const [name, setName] = useState("");
	const [pressed, setPressed] = useState(false);
	const [result, setResult] = useState([]);

	// Set variable name
	const nameChange = (event) => {
		setName(event.target.value);
		console.log(name);
	};

	const changeTable = () => {
		const tableBody = document.getElementById("table-body");
		tableBody.innerHTML = "";

		result.map((list, index) => {
			// A new row is created for each user
			const row = document.createElement("tr");
			// Data is inserted for each user

			//Serial Number of user is added
			const sNo = document.createElement("td");
			sNo.textContent = index + 1;
			row.appendChild(sNo);

			// Name of user is inserted
			const userName = document.createElement("td");
			userName.textContent = list.firstName + " " + list.lastName;
			row.appendChild(userName);

			// Age of user is inserted
			const age = document.createElement("td");
			age.textContent = list.age;
			row.appendChild(age);

			// Email of user is inserted
			const email = document.createElement("td");
			email.textContent = list.email;
			row.appendChild(email);

			// Phone Number of user is inserted
			const phone = document.createElement("td");
			phone.textContent = list.phone;
			row.appendChild(phone);

			// Gender of user is inserted
			const gender = document.createElement("td");
			gender.textContent = list.gender;
			row.appendChild(gender);
			console.log(row);

			const tableBody = document.getElementById("table-body");
			// tableBody.app;
			tableBody.appendChild(row);
		});
		// tableBody.innerHTML = elements;
	};

	// UseEffect hook to
	useEffect(() => {
		if (pressed == true) {
			fetch(`https://dummyjson.com/users/search?q=${name}`)
				.then((response) => response.json())
				.then((data) => {
					setResult(data.users);
				})
				.catch((error) => {
					console.log("error");
				});
			setPressed(false);
			console.log(result, "usestate");
			changeTable();
		}
	});

	// Butoon that triggers when button is clicked
	const submit = () => {
		setPressed(true);
	};
	return (
		<div className='input-container'>
			<input
				value={name}
				type='text'
				placeholder='Enter a name'
				onChange={nameChange}
				id='input-text'
				className='input-text'
			></input>
			<button id='input-btn' onClick={submit} className='input-btn'>
				Search
			</button>
		</div>
	);
};

export default Input;

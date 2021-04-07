import React, { useState, useEffect } from 'react'

import axios from 'axios'

export const SignupContainer = () => {

	const intialValues = { email: "", password: "" };
	const [formValues, setFormValues] = useState(intialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);


	// eslint-disable-next-line react-hooks/exhaustive-deps
	const submitForm = async () => {
		console.log(formValues);
		axios.post('http://localhost:3000/signup',
			{
				email: formValues.email,
				password: formValues.password
			})
			.then((response) => {
				console.log(response.data.token);
				localStorage.setItem('token',response.data.token)
			}, (error) => {
				console.log(error);
			});

	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmitting(true);
	};

	const validate = (values) => {
		let errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.email) {
			errors.email = "Cannot be blank";
		} else if (!regex.test(values.email)) {
			errors.email = "Invalid email format";
		}
		if (!values.password) {
			errors.password = "Cannot be blank";
		} else if (values.password.length < 4) {
			errors.password = "Password must be more than 4 characters";
		}
		return errors;
	};

	useEffect(() => {
		if (Object.keys(formErrors).length === 0 && isSubmitting) {
			submitForm();
		}
	}, [formErrors, isSubmitting, submitForm]);


	return (
		<div className="container">
			<h1>Create an account</h1>
			{Object.keys(formErrors).length === 0 && isSubmitting && (
				<span className="success-msg">Signed in successfully</span>
			)}
			<form onSubmit={handleSubmit} noValidate>
				<div className="form-row">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						value={formValues.email}
						onChange={handleChange}
						className={formErrors.email && "input-error"}
					/>
					{formErrors.email && (
						<span className="error">{formErrors.email}</span>
					)}
				</div>
				<div className="form-row">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						value={formValues.password}
						onChange={handleChange}
						className={formErrors.password && "input-error"}
					/>
					{formErrors.password && (
						<span className="error">{formErrors.password}</span>
					)}
				</div>
				<button type="submit">Sign In</button>
			</form>
		</div>

	)
}

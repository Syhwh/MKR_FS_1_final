import React, { useState, useEffect } from 'react';
import { API } from '../../API/APIHost';
import { AuthFormView } from './AuthFormView';
import { validate } from '../utils/validation';


export const AuhFormContainer = ({ submittedForm }) => {
	const [values, setValues] = useState({
		email: '',
		password: '',
		password2: ''
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = e => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true)
	};

	const submitForm = async () => {
		API.post('/signup',
			{
				email: values.email,
				password: values.password
			})
			.then((response) => {
				console.log(response.data.token);
				localStorage.setItem('token', response.data.token)
				submittedForm(true);
			})
			.catch(error => {
				console.log(error.response)
				if (error.response.status === 409){
					setErrors({...errors, response:'user or password invalid'})
				}
				setErrors({ ...errors, response: `UPS! ${error.response.data.error.message}` })
			})
	};

	useEffect(
		() => {
			if (Object.keys(errors).length === 0 && isSubmitting) {
				submitForm();
			}
		},
		[errors, isSubmitting]
	);
	return (
		<AuthFormView
			handleChange={handleChange}
			handleSubmit={handleSubmit}
			values={values}
			errors={errors}
		/>
	)
}

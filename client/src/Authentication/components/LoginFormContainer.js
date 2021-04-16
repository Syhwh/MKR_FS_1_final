import React, { useState, useEffect, useContext } from 'react';

import { LoginFormView } from './LoginFormView';
import { loginValidate } from '../utils/loginValidation';
import { AuthContext } from '../../Global/Context/AuthContext';
import { useHistory } from 'react-router';
export const LoginFormContainer = () => {
	const history = useHistory()
	const { login, user } = useContext(AuthContext);

	const [values, setValues] = useState({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		setErrors(loginValidate(values));
		setIsSubmitting(true);
	};

	const submitForm = () => {
		login(values);
		history.push('/projects');
	};


	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			submitForm();
		}
	}, [errors, isSubmitting]);

	useEffect(() => {
		if (user) {
			history.push('/projects');
		}
	}, []);

	return (
		<LoginFormView
			handleChange={handleChange}
			handleSubmit={handleSubmit}
			values={values}
			errors={errors}
		/>
	)
}

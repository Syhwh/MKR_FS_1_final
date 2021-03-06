export const validate = (values) => {
	const errors = {};

	if (!values.email) {
		errors.email = 'Email required';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Email address is invalid';
	}
	if (!values.password) {
		errors.password = 'Password is required';
	} else if (values.password.length < 5) {
		errors.password = 'Password needs to be 6 characters or more';
	} else if (!(/(?=.*[A-Z])/.test(values.password))) {
		errors.password = 'Password needs at leas one uppercase letter';
	}
	if (!values.password2) {
		errors.password2 = 'Password is required';
	} else if (values.password2 !== values.password) {
		errors.password2 = 'Passwords do not match';
	}
	return errors;
}
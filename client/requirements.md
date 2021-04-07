###
Feature: authentication
Pages
Login / register
* forms email - pass
-> response token -> save local storage

Validations register
register -> valid email
pass-> confirmation - equal min 5

validation login
* valid email
* non empty fields

-> form 2 fields -> axios POST -> server res->token

const token = axios.post(/login,{
	headers,
	body={
		email,
		pass
	}

})

localStorage.setItem({'token':token})

### Feature create projects * private route

* form
-> project title *NO empty >5ch
-> project description

send -> id del user -> token

## Features tasks *private route
 input
 no empty
edit status - title
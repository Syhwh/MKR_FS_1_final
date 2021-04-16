import React from 'react'
import { LoginFormContainer } from '../components/LoginFormContainer'

import '../styles/styles.css'

export const LoginPage = () => {
	return (
		<div className='loginPage'>
			<div className='form-container'>
				<div className='form-content-left'>
					<img alt='' className='form-img' src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/features/b845022d8d738ba8fa5e8b293e434149/card-back.svg' />
				</div>
				<LoginFormContainer />
			</div>
		</div>
	)
}

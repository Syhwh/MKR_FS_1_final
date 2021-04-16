import React, { useState } from 'react';
import { AuhFormContainer } from '../components/AuhFormContainer';
import { AuthSuccess } from '../components/AuthSuccess';
import '../styles/styles.css'

export const AuthenticationPage = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	return (
		<>
			<div className='loginPage'>

				<div className='form-container'>
					<div className='form-content-left'>
						<img
							alt=''
							className='form-img'
							src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/features/35366a300daac434fa02bc3ef83d8132/automation.png'
						/>
					</div>
					{!isSubmitted ? (
						<AuhFormContainer submittedForm={setIsSubmitted} />
					) : (
						<AuthSuccess />
					)}
				</div>
			</div>
		</>
	);
}

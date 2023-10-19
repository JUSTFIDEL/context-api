import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const [userInfo, setUserInfo] = useState()

	const onSubmit = data => {
		setUserInfo(data)
		console.log(data)
	}

	return (
		<div className='container'>
			<pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Login</h1>
				<div className='ui divider'></div>
				<div className='ui form'>
					<div className='field'>
						<label>Username</label>
						<input
							type='text'
							// name='username'
							placeholder='Username'
							{...register('Username', {
								required: 'Username is required',
								minLength: {
									value: 5,
									message: 'not less than 5 characters',
								},
								maxLength: {
									value: 20,
									message: 'not more than 20 characters',
								},
							})}
						/>
						{errors.Username && (
							<p className='error'>{errors.Username.message}</p>
						)}
					</div>
					<div className='field'>
						<label>Email</label>
						<input
							type='email'
							name='email'
							placeholder='Email'
							{...register('Email', {
								required: 'Email Address is required',
								// pattern: {
								// 	value: /^[A-Za-z]+$/i,
								// 	message: 'This is not a valid email',
								// },
							})}
						/>
						{/* <p className='error'>
							{errors.Email && (
								<span>⚠︎ This field is required</span>
							)}
							
						</p> */}

						{errors.Email && (
							<p className='error'>{errors.Email.message}</p>
						)}
					</div>
					<div className='field'>
						<label>Password</label>
						<input
							type='password'
							name='password'
							placeholder='Password'
							{...register('Password', {
								required: 'Password is required',
								minLength: {
									value: 7,
									message:
										'Password must be more than 6 characters',
								},
								maxLength: {
									value: 20,
									message:
										'Password must not be more than 20 characters',
								},
							})}
						/>
						{errors.Password && (
							<p className='error'>{errors.Password.message}</p>
						)}
					</div>
					<button className='fluid ui button blue'>Submit</button>
				</div>
			</form>
		</div>
	)
}

export default LoginForm

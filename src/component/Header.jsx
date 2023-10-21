import React, { useContext } from 'react'
import { userContext } from '../context/userContext'

function Header() {
	const { user, logOut } = useContext(userContext)
	console.log(user)

	return (
		<div className='ui fixed menu'>
			<div className='ui container center'>
				<h2>React ContextAPI</h2>
				<div className='profile'>
					<p className='nav_welcome'>Welcome, {user.name}</p>
					{!user.isGuestUser && (
						<button className='ui button blue' onClick={logOut}>
							LogOut
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default Header

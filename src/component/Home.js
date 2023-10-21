import React, { useContext } from 'react'
import { userContext } from '../context/userContext'

function Home() {
	const { user, logOut } = useContext(userContext)
	return (
		<div className='ui container center'>
			<div className='home-profile'>
				<div className='ui message success d_flex'>
					<h3>You are now logged in as, {user.name}</h3>
					{!user.isGuestUser && (
						<button
							className='ui button blue w_small'
							onClick={logOut}
						>
							LogOut
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default Home

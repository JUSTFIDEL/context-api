import { createContext, useState } from 'react'

export const userContext = createContext()

const USER = { name: 'Guest', isGuestUser: true }

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(USER)

	function logIn(username) {
		setUser({ isGuestUser: false, name: username })
	}

	function logOut() {
		setUser(USER)
	}

	const value = {
		logIn,
		logOut,
		user,
	}

	// ({ user }, logIn, logOut)

	return <userContext.Provider value={value}>{children}</userContext.Provider>
}

export default UserContextProvider

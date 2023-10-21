import { useContext } from 'react'
import { userContext } from '../context/userContext'
import Home from './Home'
import LoginForm from './LoginForm'

function Auth() {
	const { user } = useContext(userContext)

	return <>{user.isGuestUser ? <LoginForm /> : <Home />}</>
}

export default Auth

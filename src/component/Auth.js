import Home from './Home'
import LoginForm from './LoginForm'

function Auth() {
	const user = true

	return <>{user ? <LoginForm /> : <Home />}</>
}

export default Auth

import Auth from './component/Auth'
import Header from './component/Header'
import UserContextProvider from './context/userContext'

function App() {
	return (
		<UserContextProvider>
			<div className='ui container'>
				<Header />
				<Auth />
			</div>
		</UserContextProvider>
	)
}

export default App

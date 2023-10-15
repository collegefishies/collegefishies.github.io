import Header     	from './comp/Header'
import Blog       	from './pages/Blog'
import Samples    	from './pages/Samples'
import UsefulLinks	from './pages/UsefulLinks'
import About      	from './pages/About'
import { useState, useEffect }	from 'react'
import { Routes, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import './assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const lightTheme = {
	background: 'white',
	gray: '#D0D0D0',
	color: 'black',
}

const darkTheme = {
	background: '#212529',
	gray: '#343a40',
	color: 'white',
}

const NotFound = () => {
	return <h1>Page Not Found</h1>;
};

const Root = styled.div`
	background: ${props => props.theme.background};
	color: ${props => props.theme.color};
`

function App() {
	const [isDarkMode, setIsDarkMode] = useState(true)

	//listen for darkMode
	useEffect(() => {
		const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
		const handleDarkModeChange = (e) => {
			setIsDarkMode(e.matches)
		}
		handleDarkModeChange(darkModeQuery)
		darkModeQuery.addEventListener('change', handleDarkModeChange)
		return () => darkModeQuery.removeEventListener('change', handleDarkModeChange)
	}, [])
	return ( 
		<ThemeProvider theme={isDarkMode? darkTheme : lightTheme}>
			<Root className="App">
				<Header title="collegefishies' coding blog"/>  
				<Routes>
					<Route path="/" element={<Blog />} />
					<Route path="/samples" element={<Samples />} />
					<Route path="/useful-links" element={<UsefulLinks />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Root> 
		</ThemeProvider>
	); 
} 
 
export default App;
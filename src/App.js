import Header	from './comp/Header'
import Blog  	from './pages/Blog'
import Samples 	from './pages/Samples'
import About 	from './pages/About'
import {Routes, Route} from 'react-router-dom'
import './assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const NotFound = () => {
	return <h1>Page Not Found</h1>;
};


function App() {
	return ( 
		<div className="App">
			<Header title="collegefishies' coding blog"/>  
			<Routes>
				<Route path="/" element={<Blog />} />
				<Route path="/samples" element={<Samples />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div> 
	); 
} 
 
export default App;
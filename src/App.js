import Header from './comp/Header'
import Blog from './Blog'
import About from './About'
import {Routes, Route} from 'react-router-dom'
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
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div> 
  ); 
} 
 
export default App;
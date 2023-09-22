import Header from './comp/Header'
import Main from './Main'
import About from './About'
import ContentArea from './comp/ContentArea'
import Sidebar, {getFilenames} from './comp/Sidebar'
import UsefulLinks from './comp/UsefulLinks'
import BlogPosts from './comp/BlogPosts'
import BlogPost from './comp/BlogPost'
import Row from 'react-bootstrap/Row'
import {Routes, Route, Link} from 'react-router-dom'
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
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div> 
  ); 
} 
 
export default App;
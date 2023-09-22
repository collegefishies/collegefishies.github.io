import Header from './comp/Header'
import ContentArea from './comp/ContentArea'
import Sidebar, {getFilenames} from './comp/Sidebar'
import UsefulLinks from './comp/UsefulLinks'
import BlogPosts from './comp/BlogPosts'
import BlogPost from './comp/BlogPost'
import Row from 'react-bootstrap/Row'
import {Routes, Route, Link} from 'react-router-dom'
import { blog } from './blogs'

function returnPost(post, index) {
  return <BlogPost title={post.title} date={post.date}>{post.content}</BlogPost>
}

function Blog() {
  return ( 
      <ContentArea>
        <Row>
          <Sidebar>
            <UsefulLinks title="Web Design Portfolio">
              <ul>
                <li>Lucky Shrub</li>
              </ul>
            </UsefulLinks>
            <UsefulLinks title="Git Cheat Sheets">
              <ul>
                {getFilenames}
              </ul>
            </UsefulLinks>
            <UsefulLinks title="HTML/CSS Cheat Sheets"></UsefulLinks>
          </Sidebar>
          <BlogPosts>
            {blog.posts.map(returnPost)}
          </BlogPosts>
        </Row>
      </ContentArea>
  ); 
} 
 
export default Blog;
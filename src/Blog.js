import ContentArea from './comp/ContentArea'
import Sidebar from './comp/Sidebar'
import UsefulLinks from './comp/UsefulLinks'
import Content from './comp/Content'
import BlogPost from './comp/BlogPost'
import Row from 'react-bootstrap/Row'
import { blog } from './blogs'

function returnPostComponent(post, index) {
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
              </ul>
            </UsefulLinks>
            <UsefulLinks title="HTML/CnSS Cheat Sheets"></UsefulLinks>
          </Sidebar>
          <Content title="Blog">
            {blog.posts.map(returnPostComponent)}
          </Content>
        </Row>
      </ContentArea>
  ); 
} 
 
export default Blog;
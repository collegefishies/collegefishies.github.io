//Blog.js
import ContentArea	from '../comp/ContentArea'
import Sidebar    	from '../comp/Sidebar'
import UsefulLinks	from '../comp/UsefulLinks'
import Content    	from '../comp/Content'
import BlogPost   	from '../comp/BlogPost'
import Row        	from 'react-bootstrap/Row'
import { blog }   	from '../assets/blogs'
import { links }  	from '../assets/links'

function returnPostComponent(post, index) {
	return <BlogPost {...post}>{post.content}</BlogPost>
}

function Blog() {
	return ( 
			<ContentArea>
				<Row>
					<Content title="Blog">
						{blog.posts.map(returnPostComponent)}
					</Content>
				</Row>
			</ContentArea>
	); 
} 
 
export default Blog;

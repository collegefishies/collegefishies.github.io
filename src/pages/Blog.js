//Blog.js
import ContentArea	from '../comp/ContentArea'
import Sidebar    	from '../comp/Sidebar'
import UsefulLinks	from '../comp/UsefulLinks'
import Content    	from '../comp/Content'
import BlogPost   	from '../comp/BlogPost'
import styled     	from 'styled-components'
import Row        	from 'react-bootstrap/Row'
import { blog }   	from '../assets/blogs'
import { links }  	from '../assets/links'

const CardSize = styled.div`
	max-width: 360px;
	height: {360*1.618}px;
`
function returnPostComponent(post, index) {
	return <CardSize>
		<BlogPost {...post}>{post.content}</BlogPost>
	</CardSize>
}

const Grid = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`
function Blog() {
	return ( 
			<ContentArea>
				<Row>
					<h1>Blog</h1>
					<Grid>
						{blog.posts.map(returnPostComponent)}
					</Grid>
				</Row>
			</ContentArea>
	); 
} 
 
export default Blog;

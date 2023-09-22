import {size, device} from '../html'
import styled from 'styled-components';

const BlogPostsStyle = styled.div.attrs({
  className: "col-12 col-lg-9"
})`
`;


export default function BlogPosts(props){
  return (
      <BlogPostsStyle>
        <h1>Blog</h1>
        {props.children}
      </BlogPostsStyle>
    )
};

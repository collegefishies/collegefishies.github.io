import styled from 'styled-components';

const Article = styled.article.attrs({
  className: "card"
})`
  margin: 1rem;
  padding: 1rem;
`

export default function BlogPost(props){
  const titleContent = props.title? props.title : "a blog post"
  const title = <h2>{titleContent}</h2>
  const dateContent = props.date ? props.date : "undated"
  const date = <h6>Date: {dateContent}</h6>
  return (
    <Article>
      {title}
      {date}
      {props.children}
    </Article>
    )
}
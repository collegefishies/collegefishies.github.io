//BlogPost.jsx

import styled from 'styled-components';

const Article = styled.article.attrs({
})`
  border: 1px solid ${props => props.theme.color};
  border-radius: 5px;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  margin: 1rem;
  padding: 1rem;
`;

const Title = styled.h2``;

const DateText = styled.h6``;

const Image = styled.img`
  padding: 1rem;
`;

function returnImageComponent(image) {
  return (
    <Image src={image} />
  );
}
export default function BlogPost({ title = "a blog post", date = "undated", children, images = []}) {
  return (
    <Article>
      <Title>{title}</Title>
      <DateText>Date: {date}</DateText>
      {children}
    </Article>
  );
}

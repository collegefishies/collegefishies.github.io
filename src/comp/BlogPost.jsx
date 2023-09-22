//BlogPost.jsx

import styled from 'styled-components';

const Article = styled.article.attrs({
  className: "card",
})`
  margin: 1rem;
  padding: 1rem;
`;

const Title = styled.h2`
  // Add any styles specific to the title here
`;

const DateText = styled.h6`
  // Add any styles specific to the date here
`;

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
      {/*{images.map(returnImageComponent)}*/}
    </Article>
  );
}

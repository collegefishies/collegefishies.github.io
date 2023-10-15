//BlogPost.jsx

import styled from 'styled-components';

const Card = styled.article.attrs({
})`
  border: 1px solid ${props => props.theme.gray};
  border-radius: 10px;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  margin: 1rem;
`;

const Title = styled.h2`
  margin: 1rem;
`;

const DateText = styled.h6`
  margin: 1rem;
`;

const Image = styled.img`
  padding: 1rem;
`;

const TitleImage = styled.img`
  border-radius: 10px 10px 0 0;
  margin: -1rem;

  width: 100%;
  margin: 0;
`

const Content = styled.div`
  margin: 1rem;
  `;

function returnImageComponent(image) {
  return (
    <Image src={image} />
  );
}
export default function BlogPost({ title = "a blog post", date = "undated", children, ...rest}) {
  return (
    <Card>
      {rest.title_image? <TitleImage src={rest.title_image}/> : null}
      <Title>{title}</Title>
      {rest.title_image ? null : <>
        <DateText>Date: {date}</DateText>
        <Content>{children}</Content>
      </>}
    </Card>
  );
}

export { Card }
//BlogPost.jsx
import { useState } from 'react'
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
`;

const Image = styled.img`
  padding: 1rem;
`;

const TitleImage = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
  margin: 0;
`

const Content = styled.div`
  max-height: ${props => props.isExpanded ? '300vh' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease, margin-bottom 0.25s linear;
  margin: 0 1rem 1rem 1rem;
  margin-bottom: ${props => props.isExpanded ? '1rem' : '0'};
`;

const Text = styled.p`
  color: ${props => props.theme.darkGray};
  display: flex;
  align-items: center;
  margin-left: 1rem;
`
const Symbol = styled.span`
  transform: ${ props => props.isExpanded? 'rotate(630deg)' : 'rotate(90deg)'};
  transition: transform 0.3s ease;
  font-weight: 800;
`
function SeeMore (props) {
  return (
    <Text>
      See More &nbsp;
      <Symbol {...props}>→</Symbol>
    </Text>
  );
}
function returnImageComponent(image) {
  return (
    <Image src={image} />
  );
}
export default function BlogPost({ title = "a blog post", date = "undated", children, ...rest}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleContent = (e) => { setIsExpanded(!isExpanded)};
  return (
    <Card onClick={toggleContent}>
      {rest.title_image? <TitleImage src={rest.title_image} loading="lazy"/> : null}
      <Title>{title}</Title>
      <SeeMore isExpanded={isExpanded}/>
      <Content isExpanded={isExpanded}>
        <DateText>Date: {date}</DateText>
        {children}
      </Content>
    </Card>
  );
}

export { Card }
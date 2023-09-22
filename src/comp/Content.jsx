import styled from 'styled-components';

const ContentStyle = styled.div.attrs({
  className: "col-12 col-lg-9"
})`
`;


export default function Content(props){
  return (
      <ContentStyle>
        <h1>{props.title}</h1>
        {props.children}
      </ContentStyle>
    )
};
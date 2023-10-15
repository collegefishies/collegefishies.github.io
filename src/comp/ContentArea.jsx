import styled from "styled-components";

const Main = styled.main`
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
`

function ContentArea(props){
  return (
    <Main className="content-container mt-5 min-vh-100">
      <div className="container">
        <div className="row">
          {props.children}
        </div>
      </div>
    </Main>
  );
}

export default ContentArea;
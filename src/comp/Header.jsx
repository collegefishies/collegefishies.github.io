import styled from 'styled-components'
import NavToBurger from './NavToBurger'

const HeaderContainer = styled.header.attrs({
  className: "bg-dark text-white px-3 py-3"
})`
  word-wrap: normal;
`

const Title = styled.h1.attrs({
  className: 'text-white text-decoration-none'
})`
  overflow-wrap: break-word;
  white-space: normal;
`



function Header(props){
  return (
    <HeaderContainer>
      <NavToBurger />
    </HeaderContainer>
  );
}

export default Header;

export {Title}
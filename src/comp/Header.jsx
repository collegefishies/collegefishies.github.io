import styled from 'styled-components'
import NavToBurger from './NavToBurger'

const HeaderContainer = styled.header.attrs({
  className: "bg-dark text-white px-3 py-3"
})``

const Title = styled.h1.attrs({
  className: 'text-white text-decoration-none'
})`
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
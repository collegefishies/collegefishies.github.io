import {Link} from 'react-router-dom'
import {Title} from './Header'
import styled from 'styled-components'

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.25rem;
  color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 0.5rem;
  &:hover {
    color: grey;
  }
`

const LI = styled.li`
  margin: 1rem;
`

export default function NavToBurger(props) {
  return (
    <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand"><Title>collegefishies' coding blog</Title></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <LI className="nav-item">
              <NavLink to="/">Home</NavLink>
            </LI>
            <LI className="nav-item">
              <NavLink to="/samples">Design Samples</NavLink>
            </LI>
            <LI className="nav-item">
              <NavLink to="/useful-links">Useful Links</NavLink>
            </LI>
            <LI className="nav-item">
              <NavLink to="/about">About</NavLink>
            </LI>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}
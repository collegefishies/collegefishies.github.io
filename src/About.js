import ContentArea from './comp/ContentArea'
import Sidebar from './comp/Sidebar'
import UsefulLinks from './comp/UsefulLinks'
import Content from './comp/Content'
import Row from 'react-bootstrap/Row'
function Main() {
  return ( 
      <ContentArea>
        <Row>
          <Sidebar>
            <UsefulLinks title="Web Design Portfolio">
              <ul>
                <li>Lucky Shrub</li>
              </ul>
            </UsefulLinks>
            <UsefulLinks title="Git Cheat Sheets">
              <ul>
                {}
              </ul>
            </UsefulLinks>
            <UsefulLinks title="HTML/CSS Cheat Sheets"></UsefulLinks>
          </Sidebar>
          <Content title="About me">
          </Content>
        </Row>
      </ContentArea>
  ); 
} 
 
export default Main;
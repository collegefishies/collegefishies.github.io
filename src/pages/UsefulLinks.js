import ContentArea	from '../comp/ContentArea'
import Sidebar    	from '../comp/Sidebar'
import UsefulLinks	from '../comp/UsefulLinks'
import Content    	from '../comp/Content'
import Row from 'react-bootstrap/Row'

function Main() {
	return ( 
			<ContentArea>
						<Sidebar forceVisible={true}/>
			</ContentArea>
	); 
} 
 
export default Main;
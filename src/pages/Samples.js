import ContentArea	from '../comp/ContentArea'
import Sidebar    	from '../comp/Sidebar'
import UsefulLinks	from '../comp/UsefulLinks'
import Content    	from '../comp/Content'
import Row from 'react-bootstrap/Row'

//import Samples
import AgeCalculator from '../comp/samples/AgeCalculator'

function Sample(props){
	return (
		<div>
			<h3>{props.title}</h3>
			{props.children}
		</div>
	)
}

function Main() {
	return ( 
			<ContentArea>
				<Row>
					<Sidebar>
					</Sidebar>
					<Content title="Samples">
						<Sample title="Age Calculator"> <AgeCalculator /> </Sample>
					</Content>
				</Row>
			</ContentArea>
	); 
} 
 
export default Main;
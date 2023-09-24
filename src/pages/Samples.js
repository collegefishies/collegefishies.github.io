import ContentArea	from '../comp/ContentArea'
import Sidebar    	from '../comp/Sidebar'
import UsefulLinks	from '../comp/UsefulLinks'
import Content    	from '../comp/Content'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//import Samples
import AgeCalculator from '../comp/samples/AgeCalculator/AgeCalculator'

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
					<Sidebar />
					<Content title="Samples">
						<Sample title="Age Calculator"> <AgeCalculator /> </Sample>
					</Content>
				</Row>
			</ContentArea>
	); 
} 
 
export default Main;
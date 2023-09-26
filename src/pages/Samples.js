import styled     	from 'styled-components'
import ContentArea	from '../comp/ContentArea'
import Sidebar    	from '../comp/Sidebar'
import UsefulLinks	from '../comp/UsefulLinks'
import Content    	from '../comp/Content'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//import Samples
import AgeCalculator from '../comp/samples/AgeCalculator/AgeCalculator'
import SudokuApp from '../comp/samples/Sudoku/SudokuApp'


const SampleStyle = styled.div`
margin-bottom: 3rem;
`

function Sample(props){
	return (
		<SampleStyle>
			<h3>{props.title}</h3>
			{props.children}
		</SampleStyle>
	)
}

function Main() {
	return ( 
			<ContentArea>
				<Row>
					{/*<Sidebar />*/}
					<Content title="Samples">
						<Sample title="Age Calculator"> <AgeCalculator /> </Sample>
						<Sample title="Sudoku"> <SudokuApp /> </Sample>
					</Content>
				</Row>
			</ContentArea>
	); 
} 
 
export default Main;
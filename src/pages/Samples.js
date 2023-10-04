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
import RandomUser from '../comp/samples/FetchUsers/RandomUser'

const SampleStyle = styled.div`
margin-bottom: 3rem;
`

function Sample(props){
	return (
		<SampleStyle>
			<h3>{props.title}</h3>
			<br />
			{props.description ? <p>{props.description}</p>:null}
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
						<Sample title="Fetch Random Users" description={<p>Design inspired by <a href="https://randomuser.me">randomuser.me</a></p>}>
							<RandomUser />
						</Sample>
						<Sample title="Sudoku" description="A simple Sudoku app written for keyboard usage.">
							<SudokuApp /> 
						</Sample>
						<Sample title="Age Calculator"> <AgeCalculator /> </Sample>
					</Content>
				</Row>
			</ContentArea>
	); 
} 
 
export default Main;
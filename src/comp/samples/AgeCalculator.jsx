import styled from 'styled-components'

const mobile = "375px";
const desktop = "1440px";	
//colors
const purple = "hsl(259deg, 100%, 65%)"
const lightRed = "hsl(0deg, 100%, 67%)"
const white = "hsl(0, 0%, 100%)"
const offWhite = "hsl(0, 0%, 94%)"
const lightGrey = "hsl(0, 0%, 86%)"
const smokeyGrey = "hsl(0, 1%, 44%)"
const offBlack = "hsl(0, 0%, 8%)"

const Main = styled.div`
	font-size: 32px;
	font-family: 'Poppins', sans-serif;
`

const Card = styled.div`
	border: 1px solid black;	
`

const EntryStyle = styled.div`
	display: flex;
	flex-direction: column;
`
const DateTitle = styled.div`
	color: ${smokeyGrey}
	font-weight: 400i;
`
const InputBox = styled.div`
	padding: 0.5rem;
	width: 6rem;
	border: 1px solid ${lightGrey};
`
const DateEntry = styled.div`
	display: flex;
`
function Entry(props){
	return (
		<EntryStyle>
			<DateTitle>{props.title}</DateTitle>
			<InputBox>{props.children}</InputBox>
		</EntryStyle>
	)
}

export default function AgeCalculator(){

	return (
		<Main>
			<Card>
				<DateEntry>
					<Entry title="Day">DD</Entry>
					<Entry title="Month">MM</Entry>
					<Entry title="Year">YYYY</Entry>
				</DateEntry>

				-- years
				-- months
				-- days
			</Card>
			<div class="attribution">
				Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
				Coded by <a href="#">Your Name Here</a>.
			</div>

		</Main>
	);
}
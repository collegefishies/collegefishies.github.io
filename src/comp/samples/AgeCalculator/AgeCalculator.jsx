import {useState} from 'react'
import arrow from './icon-arrow.svg'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const mobile = "375px";
const mini = "433px"
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
	border-radius: 1rem;
	padding: 1rem;
	border: 1px solid rgb(0,0,0,0.04);
	box-shadow: 1rem 1rem 1rem rgb(0,0,0,0.4);
	border-bottom-right-radius: 9rem;
	margin: 2rem 1rem;
`


const DateTitle = styled.div`
	letter-spacing: 0.190rem;
	text-transform: uppercase;
	font-size:33%;
	color: ${smokeyGrey};
	font-weight: 700;
`
const InputBox = styled.input`
	padding: 1rem;
	font-size: 75%;
	padding: 0.5rem 0.5rem 0.5rem 1rem;
	width: 100%;
	border: 1px solid ${lightGrey};
	border-radius: 0.5rem;
	font-weight: 800;

	@media (max-width: ${mini}) {
		margin: 0 0.5rem;
		font-size: 70%;
		padding: 0.5rem 0.5rem 0.5rem 0.5rem;
	}
	@media (max-width: ${mobile}) {
		margin: 0 0.5rem;
		font-size: 60%;
		padding: auto;
	}
  /* For WebKit browsers like Chrome and Safari */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* For Firefox */
  & {
    -moz-appearance: textfield;
  }

`


const DateEntry = styled.div`
	display: flex;
	justify-content: left
`
const EntryStyle = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem 0.5rem;
	@media (max-width: ${mini}) {
		margin: 0 0.5rem;
		width: auto%;
	}
`
function Entry(props){
	return (
		<EntryStyle>
			<DateTitle>{props.title}</DateTitle>
			<InputBox type="number" placeholder={props.placeholder} defaultValue={props.defaultValue} onChange={props.onChange} min={props.min} max={props.max} required></InputBox>
		</EntryStyle>
	)
}

const AnswerStack = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 200%;
	font-style: italic;
	font-weight: 800;
	padding: 1rem;
	padding-top: -1rem;
	width: 100%;

	@media (max-width: ${mini}) {
		font-size: 175%
	}
	@media (max-width: ${mobile}) {
		font-size: 140%;
	}
`
const AnswerNumber = styled.div`
	display:inline;
	padding-right: 0.5rem;
	color: ${purple};

`
const AnswerString = styled.div`
	display:inline;
	color: ${offBlack};
`
const AnswerLineStyle = styled.div`
	margin: -0.75rem 0rem -0.75rem 0rem;
`
function AnswerLine(props){
	return (
		<AnswerLineStyle>
			<AnswerNumber>{props.value}</AnswerNumber>
			<AnswerString>{props.str}</AnswerString>
		</AnswerLineStyle>
	)
}

const Holder = styled.div`
	display: flex;
	align-items: center;
	padding-left: 1rem;
	padding-right: 1rem;
	@media (max-width: ${mini}) {
		padding-top: 1rem;
	}
`
const Seperator = styled.hr`
	flex-grow: 1;
	color: ${smokeyGrey};
`
const RightSeperator = styled.hr`
	flex-grow: 1;
	color: ${smokeyGrey};
	width: 0;
	@media (max-width: ${mini}) {
		width: auto;
	}
`
const Indicator = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 4.5rem;
	height: 4.5rem;
	background-color: ${purple};
	border-radius: 50%;
`

const Arrow = styled.img`
	height: 2rem;
`

const Attribution = styled.div`
	justify-content: right;
	font-size: 1rem;
	opacity: 0.2
`

function SeperatorAndButton(){
	return (
		<Holder>
			<Seperator />
			<Indicator>
				<Arrow src={arrow}/>
			</Indicator>
			<RightSeperator />
		</Holder>
	)
}


function calculateAge({day, month, year}){
	const today = new Date();
	const birthDate = new Date();
	birthDate.setFullYear(year, month - 1, day)
	let ageInMilliseconds = Math.abs(today - birthDate)/1000;

	const ageInYears = Math.floor(ageInMilliseconds/(365*24*60*60))
	ageInMilliseconds -= ageInYears*365*24*60*60
	const ageInMonths = Math.floor(ageInMilliseconds/(30*24*60*60))
	ageInMilliseconds -= ageInMonths*30*24*60*60
	const ageInDays = Math.floor(ageInMilliseconds/(24*60*60))

	return {
		ageYears: ageInYears,
		ageMonths: ageInMonths,
		ageDays: ageInDays,
	}
}

export default function AgeCalculator(){
	const today = new Date();
	const maxyear = today.getFullYear()
	const [date, setDate] = useState({day: 24, month: 9, year: 1984})
	const {ageYears, ageMonths, ageDays} = calculateAge(date)
	const {day, month, year} = date
	const valid = !isNaN(day) && !isNaN(month) && !isNaN(year)
	function handleDay(e){
		let day = e.target.value;
		if (day >= 1 && day <= 31){}else{day = NaN}
	setDate({...date, day})
	}
	function handleMonth(e){
		let month = e.target.value;
		if (month >=1 && month <= 12){}else{month = NaN}
		setDate({...date, month})
	}
	function handleYear(e){
		let year = e.target.value;
		if (year >= 0 && year <= maxyear){}else{year = NaN}
		setDate({...date, year})
	}
	return (
		<Main>
			<Card>
				<DateEntry>
					<Entry title="Day" placeholder="DD" defaultValue="24" onChange={handleDay} min="1" max="31"/>
					<Entry title="Month" placeholder="MM" defaultValue="9" onChange={handleMonth} min="1" max="12"></Entry>
					<Entry title="Year" placeholder="YYYY" defaultValue="1984" onChange={handleYear} min="0" max={maxyear}></Entry>
				</DateEntry>
				<SeperatorAndButton />
				<AnswerStack>
					<AnswerLine value={valid ? ageYears : "--"} str="years" />
					<AnswerLine value={valid ? ageMonths : "--"} str="months" />
					<AnswerLine value={valid ? ageDays : "--"} str="days" />
				</AnswerStack>
			</Card>
			<Attribution>
				* 1 year is defined to be 365 days, 1 month is defined to be 30 days <br/>
				Challenge by <a href="https://www.frontendmentor.io">Frontend Mentor</a>. 
				Coded by <Link to="/about">Enrique Mendez</Link>.
			</Attribution>

		</Main>
	);
}
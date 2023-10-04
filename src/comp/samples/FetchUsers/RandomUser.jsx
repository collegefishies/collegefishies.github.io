import {useState, useEffect} from 'react'
import styled from 'styled-components'
import { FaUser, FaCalendar, FaEnvelope, FaFile, FaPhone, FaMapPin, FaLock } from 'react-icons/fa';
import { MdPerson, MdDateRange, MdEmail, MdDescription, MdPhone, MdPlace, MdLock } from 'react-icons/md';

const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	width: 100%;
	background: #F5F6F8;
	box-shadow: 1rem 1rem 1rem rgb(0,0,0,0.4);
	border-radius: 10px;
`

const Profile = styled.img`
	background-color: white;
	// border: 1px solid black;
	padding: 3px;
	width: 20%;
	border-radius: 50%;
	box-shadow: 0px 0px 3px black;

	@media (max-width: 580px) {
		width: 40%
	}
`

const Line = styled.div`
	width: 75%;
	border: 0.5px solid grey;
	margin-top: 1rem;
	margin-bottom: 1rem;

	@media (max-width: 580px) {
		width: 100%
	}
`

const Icons = styled.div`
	transition: transform 0.7s;
	padding: 1rem;
	width: 75%;
	display:flex;
	align-items: center;
	justify-content: space-between;
	color: lightgray;

	& > *:hover {
		color: black;
		transform: scale(1.4);
	}

	@media (max-width: 580px) {
		width: 100%
	}
`

const InfoDisplayStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

`
const InfoDescription = styled.div``
const InfoContent = styled.div``
function InfoDisplay(props) {
	return (
		<InfoDisplayStyle>
		<InfoDescription><h6>{props.description}</h6></InfoDescription>
		<InfoContent><h3>{props.content}</h3></InfoContent>
	</InfoDisplayStyle>
	)
}

const icons = ['user', 'email', 'calendar', 'map', 'phone', 'lock']
export default function RandomUser(props) {
	const [user, setUser] = useState([]);
	const [activeIcon, setActiveIcon] = useState('user');

	const RenderUserInfo = () => {
		switch(activeIcon) {
		case 'user':
			return <InfoDisplay description="Hi, my name is" content={user.results[0].name.first + ' '+  user.results[0].name.last}/>
		case 'email':
			return <InfoDisplay description="My email is" content={user.results[0].email}/>
		case 'calendar':
			return <InfoDisplay description="My birthday is" content={user.results[0].dob.date.slice(0,10)}/>
		case 'map':
			return <InfoDisplay description="My address is " content={user.results[0].location.street.number + ' ' + user.results[0].location.street.name}/>
		case 'phone':
			return <InfoDisplay description="My number is" content={user.results[0].phone}/>
		case 'lock':
			return <InfoDisplay description="My password is" content={user.results[0].login.password}/>
		}
	}
	const fetchData = () => {
		fetch("https://randomuser.me/api/?results=1")
			.then(response => response.json())
			.then(data => setUser(data))
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		Object.keys(user).length > 0 ? 
		<Card>
			<Profile src={user.results[0].picture.large}/>
			<Line />
			<RenderUserInfo />
			<Icons>
				<FaUser    	onMouseOver={() => setActiveIcon('user')}/>
				<FaEnvelope	onMouseOver={() => setActiveIcon('email')}/>
				<FaCalendar	onMouseOver={() => setActiveIcon('calendar')}/>
				<FaMapPin  	onMouseOver={() => setActiveIcon('map')}/>
				<FaPhone   	onMouseOver={() => setActiveIcon('phone')}/>
				<FaLock    	onMouseOver={() => setActiveIcon('lock')}/>
			</Icons>



		</Card> : 
		<Card> <h1>Loading...</h1></Card>
	)
}
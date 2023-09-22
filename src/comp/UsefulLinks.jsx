import styled from 'styled-components'

const Title = styled.h4`
	
`
const Credit = styled.p`
	color: #999;
`

function UsefulLinks(props) {
	return (
		<div>
			{props.title ? <Title>{props.title}</Title> : "Useful Links"}
			{props.credit ? <Credit>Credit: {props.credit}</Credit> : null}
			{props.children}
		</div>
	)
}

export default UsefulLinks;
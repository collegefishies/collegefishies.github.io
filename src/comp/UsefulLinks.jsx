import styled from 'styled-components'

const Title = styled.h4`
	margin-bottom: 0;
`
const UsefulLinksStyle = styled.ul`
	list-style-type: none;
	margin-bottom: 3rem;
`
const Credit = styled.p`
	color: #999;
	margin-top: 0;
	margin-bottom: 0;
`

function UsefulLinks(props) {
	return (
		<UsefulLinksStyle>
			{props.title ? <Title>{props.title}</Title> : "Useful Links"}
			{props.credit ? <Credit>Credit: {props.credit}</Credit> : null}
			{props.children}
		</UsefulLinksStyle>
	)
}

export default UsefulLinks;
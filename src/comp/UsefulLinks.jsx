import styled from 'styled-components'

const LinkStyle = styled.div`
	flex: 1
`

function UsefulLinks(props) {
	const title = props.title ? <h4>{props.title}</h4> : "Useful Links"
	const credit = props.credit ? <h6>Credit: {props.credit}</h6> : null
	return (
		<div>
			{title}
			{credit}
			{props.children}
		</div>
	)
}

export default UsefulLinks;
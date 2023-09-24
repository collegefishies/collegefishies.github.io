// Non modular. Holds all the useful links
import UsefulLinks	from './UsefulLinks';
import styled     	from 'styled-components';
import {links}    	from '../assets/links';

const SidebarStyle = styled.div.attrs({
	className: "d-none d-sm-block col-lg-3"
})``;

const VisibleSidebarStyle = styled.div.attrs({
	className: "col-12 col-lg-3"
})``;

function returnSectionComponent({title, credit, links}){
	return (
		<UsefulLinks title={title} credit={credit}>
			{links.map(link => <li>{link}</li>)}
		</UsefulLinks>
	)
}
export default function Sidebar({forceVisible}){
	return (
		<>
		{forceVisible ? 
		<VisibleSidebarStyle>
			{links.map(returnSectionComponent)}
		</VisibleSidebarStyle>
		:
		<SidebarStyle>
			{links.map(returnSectionComponent)}
		</SidebarStyle>}
		</>
	)
};
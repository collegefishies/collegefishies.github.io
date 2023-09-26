import React, {useRef, useEffect, useState} from 'react'
import styled from 'styled-components'

// Breakpoints and colors (keeping as you had them)
const mobile = "375px";
const mini = "433px";
const desktop = "1440px";	
const purple = "hsl(259deg, 100%, 65%)";
const lightRed = "hsl(0deg, 100%, 67%)";
const white = "hsl(0, 0%, 100%)";
const offWhite = "hsl(0, 0%, 94%)";
const lightGrey = "hsl(0, 0%, 86%)";
const smokeyGrey = "hsl(0, 1%, 44%)";
const offBlack = "hsl(0, 0%, 8%)";


export default function Cell({value, notes, parentRef}) {
	const fraction = 10/100;
	const [containerHeight, setContainerHeight] = useState(0);
	
	useEffect(()=>{
	      	const containerElement = parentRef.current;
	      	const height = containerElement.clientWidth;
	      	setContainerHeight(height * fraction);
	},[]);	

	// Styling for the NoteCell
	const NoteCell = styled.div`
		font-size: ${containerHeight*fraction}px;
		display: flex;
		border: 1px solid black;
		justify-content: center;
		align-items: center;
		width: 100%;
		aspect-ratio: 1 / 1;
	`;

	return (
		<NoteCell>
				{value ? value : notes}
		</NoteCell>
	);
}

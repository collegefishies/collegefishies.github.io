import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import Cell from './Cell'
//colors
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

const Board = styled.div`
	font-family: 'Noto Sans Mono';
	width: 100%;
	aspect-ratio: 1;
`

export default function SudokuApp(props){
	const parentRef = useRef(null)
	let list = new Array(81).fill(0)

	
	return (
		<Board ref={parentRef}>
			<Cell value={2} parentRef={parentRef}/>
		</Board>
	)
}
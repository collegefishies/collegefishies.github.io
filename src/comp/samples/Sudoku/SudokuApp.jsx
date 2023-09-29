//sudokuapp.jsx
import React, { useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import Cell from './Cell';
import MiniGrid, {MiniGridContainer, InnerBorder} from './MiniGrid';  // Make sure to import MiniGrid

const floor = Math.floor;

const Card = styled.div`
	font-family: 'Arial Rounded MT Bold';
	padding: 5rem;
	width: 100%;
	aspect-ratio: 413 / 653;
	background: #F5F6F8;
	box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
`;

const Board = styled.div`
	font-weight: 100;
	padding: 0;
	aspect-ratio: 1;
	// display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	outline: 1px solid black;
`;

export function squareItemToRowColumn(square, item){
	const row   	= 3*floor(square / 3) + floor(item / 3)
	const column	= 3*floor(square % 3) + floor(item % 3)
	return [row, column]
}

export function rowColumnToSquareItem(row, column){
	const square   	= floor(row / 3) + floor(column / 3)
	const subrow   	= row % 3
	const subcolumn	= column % 3
	const item     	= 3 * subrow + subcolumn
	return [square, item]
}

export default function SudokuApp(props) {
	//state vars
	let [board, setBoard] = useState([
			[null,null,null,null,null,null,null,null,null],
			[null,null,null,null,null,null,null,null,null],
			[null,null,null,null,null,null,null,null,null],
			[null,null,null,null,null,null,null,null,null],
			[null,null,null,null,null,null,null,null,null],
			[null,null,null,null,null,null,null,null,null],
			[null,null,null,null,null,null,null,null,null],
			[null,null,null,null,null,null,null,null,null],
			[null,null,null,null,null,null,null,null,null],
		])
	let [selectedCell, setSelectedCell] = useState([null, null])

	const handleKeyPress = (event) => {
		const { key } = event;

		if (key >= '1' && key <= '9') {
			let [square, item] = selectedCell;
			if (square != null && item != null) {
				let newBoard = [...board]
				newBoard[square][item] = Number(key)
				setBoard(newBoard) 
			}
		}
	}

	useEffect(()=>{
		window.addEventListener('keypress', handleKeyPress);
		return () => {
			window.removeEventListener('keypress', handleKeyPress)
		}
	}, [selectedCell])

	return (
		<Card>
			<h1>Sudoku</h1>
			<Board>
				<div style={{outline: '1px solid black'}}>
				<MiniGridContainer>
					{board.map((miniGridValues, index) => (
						<MiniGrid 
							key={index} 
							square={index} 
							values={miniGridValues} 
							setSelected={setSelectedCell}/>
					))}
				</MiniGridContainer>
				</div>
			</Board>
		</Card>
	);
}


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
	const square   	= 3*floor(row / 3) + floor(column / 3)
	const subrow   	= row % 3
	const subcolumn	= column % 3
	const item     	= 3 * subrow + subcolumn
	return [square, item]
}

function getNeighbors([square, item]) {
	const [row, column] = squareItemToRowColumn(square, item)
	let neighbors = []
	//find all neighbors
	for (var i = 0; i < 9; i++){
		neighbors.push(rowColumnToSquareItem(i, column))
		neighbors.push(rowColumnToSquareItem(row, i))
		neighbors.push([square, i])
	}
	//convert to string
	neighbors = neighbors.map( val => JSON.stringify(val) )
	//get unique elements
	neighbors = new Set(neighbors)

	return neighbors;
}

export const SudokuContext = React.createContext();

export default function SudokuApp(props) {
	//state vars
	let [board, setBoard] = useState([
			[1,null,null,null,null,null,null,null,null],
			[null,2,null,null,null,null,null,null,null],
			[null,null,3,null,null,null,null,null,null],
			[null,null,null,4,null,null,null,null,null],
			[null,null,null,null,5,null,null,null,null],
			[null,null,null,null,null,null,null,null,null],
			[null,null,null,null,null,null,null,null,null],
			[null,null,null,null,null,null,null,null,null],
			[null,null,null,null,null,null,null,null,null],
		])
	let [selectedCell, setSelectedCell] = useState([null, null])
	let [neighbors, setNeighbors] = useState(new Set())
	const handleClick = ([square, item]) => {
		setSelectedCell([square, item])
		setNeighbors(getNeighbors([square, item]))
	}
	const handleKeyPress = (event) => {
		const { key } = event;

		if (key >= '1' && key <= '9') {
			let [square, item] = selectedCell;
			if (square != null && item != null) {
				let newBoard = [...board]
				newBoard[square][item] = Number(key)
				setBoard(newBoard) 
			}
		} else if (key == 'Backspace') {
			let [square, item] = selectedCell;
			let newBoard = [...board]
			newBoard[square][item] = null
			setBoard(newBoard)
		}
	}

	useEffect(()=>{
		window.addEventListener('keypress', handleKeyPress);
		return () => {
			window.removeEventListener('keypress', handleKeyPress)
		}
	}, [selectedCell])

	return (
		<SudokuContext.Provider value={{ selectedCell, neighbors }}>
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
								setSelected={handleClick}/>
						))}
					</MiniGridContainer>
					</div>
				</Board>
			</Card>
		</SudokuContext.Provider>
	);
}


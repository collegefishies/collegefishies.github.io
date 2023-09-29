/**
 * SudokuApp Component
 * 
 * This is the main component for the Sudoku game application.
 * 
 * Functionalities:
 * 1. Initializes an empty 9x9 Sudoku board with some pre-filled cells.
 * 2. Allows users to click to select a cell.
 * 3. Keyboard inputs are captured to fill the selected cell with numbers 1-9 or to clear it.
 * 4. Arrow keys can be used to navigate through the board's cells.
 * 5. Utilizes SudokuContext to share state like selected cells and their neighbors.
 * 
 * Grid Structure and Coordinate System:
 * - The 9x9 grid is divided into nine 3x3 "mini-grids" or "squares."
 * - `square`: Refers to one of these 3x3 mini-grids. The squares are indexed from 0 to 8.
 * - `item`: Refers to a cell within a 3x3 square. Items are also indexed from 0 to 8.
 * - Together, `[square, item]` uniquely identifies any cell within the 9x9 grid.
 * - Helper functions `squareItemToRowColumn` and `rowColumnToSquareItem` are used for conversions between these coordinate systems and the traditional row-column system.
 * 
 * State Variables:
 * - board: Represents the 9x9 Sudoku board where each mini-grid is an array of 9 numbers or null.
 * - selectedCell: Contains the coordinates ([square, item]) of the currently selected cell.
 * - neighbors: Contains the set of neighboring cells for the currently selected cell.
 * 
 * Helper Functions:
 * - squareItemToRowColumn: Converts square and item coordinates to row and column coordinates.
 * - rowColumnToSquareItem: Converts row and column coordinates to square and item coordinates.
 * - getNeighbors: Returns a set of neighboring cells for a given cell.
 * 
 * Event Handlers:
 * - handleClick: Handles cell selection upon user click.
 * - handleKeyDown: Handles keyboard inputs to manipulate the board and selected cell.
 * 
 * Dependencies:
 * - Cell Component: Represents an individual cell in the Sudoku board.
 * - MiniGrid Component: Represents a 3x3 grid in the Sudoku board.
 * - styled-components: For component styling.
 * - React's useState, useEffect: For state management and side-effects.
 * 
 * @author Enrique Mendez
 * @version 1.0
 */

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

	const ArrowKeys = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'])
	const handleClick = ([square, item]) => {
		setSelectedCell([square, item])
		setNeighbors(getNeighbors([square, item]))
	}
	const handleKeyDown = (event) => {
		const { key } = event;
		let [square, item] = selectedCell;
		if (square == null || item == null) {
			return;
		}

		if (key >= '1' && key <= '9') {
			let newBoard = [...board]
			newBoard[square][item] = Number(key)
			setBoard(newBoard) 
		} else if (key == 'Backspace') {
			let newBoard = [...board]
			newBoard[square][item] = null
			setBoard(newBoard)
		}  else if (ArrowKeys.has(key)) {
			console.log(key)
			event.preventDefault();
			console.log(selectedCell)
			let [row, column] = squareItemToRowColumn(...selectedCell);
			console.log(row, column)
			switch (key) {
			case 'ArrowUp':
				row = Math.max(row - 1, 0); break;
			case 'ArrowDown':
				row = Math.min(row + 1, 8); break;
			case 'ArrowRight':
				column = Math.min(column + 1, 8); break;
			case 'ArrowLeft':
				column = Math.max(column - 1, 0); break;
			}

			console.log([row, column])
			setSelectedCell(rowColumnToSquareItem(row, column))
			setNeighbors(getNeighbors(rowColumnToSquareItem(row, column)))
		}
	}

	useEffect(()=>{
		console.log(selectedCell)
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown)
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


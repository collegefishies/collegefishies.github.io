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
 * Sudoku Database:
 * - https://github.com/grantm/sudoku-exchange-puzzle-bank
 * @author Enrique Mendez
 * @version 1.0
 */

//sudokuapp.jsx
import React, { useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import MiniGrid, {MiniGridContainer} from './MiniGrid';  // Make sure to import MiniGrid


const puzzles = [
"083020090000800100029300008000098700070000060006740000300006980002005000010030540",
"200050006010000090600801003007090600000703000900080002100000005060902010003060200",
"590000007040010083008034900001402000069000820000109300004670200980040030700000016",
"006000200900000004243000896000591000002080300400203001300000007000907000010408020",
"000000000560000032230040079000060000070501090000708000053000920009806500700000004",
"000310000060097040001420300030000502786000139502000060003059700020680010000074000",
"076009400000801007300000009610307080000090000020108034500000006900204000001600790",
"103070002000000040090005001020100503007000200405002060200800030050000000800020709",
"850000031000070000000809000003000600970301052000020000100407006205000307000080000",
"031006009000040060008007300184070020000000000090020148005800400040060000300500780",
"100605009000000000053010840000951000000060000002080600607000905300807002009000100",
"000030000560749083000802000000000000001608500090307040300090006070103050005000800",
"074800900001050004500000063000305008060070090900106000730000006800030200005004830",
"070000010000040000600208009860000091300106007002000300000070000050804030906305702",
"300090002020104000000300700603500080870000014010007605002001000000905020900030006",
"520010007080040032007500100000000700410060059002000000009006200360070080200050043",
"502070430000400050000020700400502073000010000970603001008050000010004000059030807",
"040062000900000020026300480000004870007000600052800000085001360030000008000530010",
"040280030010006007609070008000092000900000004000740000500020803400800010070035090",
"000600309306700010001004720900500000010000070000006001053900100070005804809007000",
"030004000000800020900026400100000050049050170060000003003740009020001000000500060",
"000000407702000090059700030000186002004090600300254000030001920090000704801000000",
"040607080100050004003104200006803100000000000480070053020000010507000908000030000",
"024600007006070000003800560000200800300000004002001000069002100000030600100006240",
"608000301700050002040000050200608004105020708000070000000000000810000079070103080",
"003010800900050006700040003000104000070000050090578020040000080107000905502090407",
"070090040140208037900010008080000090201040603400000001010000020000629000700080009",
"000030600040800901006700005083000200600040008005000490900005800501008030004090000",
"001000008709300001008701093000160050000000000080049000830402600900008205600000300",
"004070900700020008000000000003902500450000029090107080040000030006304200900080001",
"302090000080000000407056000030007069040601050670400030000360501000000090000010706",
"000003500036405070100000060610309040000040000020706038070000009060504380008100000",
"700040006000759000900801003000524000030000020400000007501000208080000010209000304",
"009103002000060830000004009008000020910050048050000700200600000096010000100207300",
"000000000007010200800603001005908300000040000020000050001762500500000008060000020",
"078040600600000590500610000000000009019402350200000000000038005065000003003090480",
"007000500000080000900070001025108930003000600009000200000503000700000006010207040",
"000000000012080450005206700004801200000000000290050068800000002000379000063000970",
"021408000004002730630090000000009043003000600450300000000060074046100500000804360",
"000080000002000500000702000500000003036000740900000002300801007008040900095030680",
"050600090800051020006002030300007000041000270000100009080400700090280005010005080",
"500007000200900800000000460020710005000506000600039040087000000005001009000800006",
"010700000406020000902105000048090000601000507000050840000503702000070906000006050",
"704000905010040070089050310000010000000708000300604001070000090032000450400030007",
"090602005080100000004050000000000082060403050950000000000070100000005060600908030",
"700000810040008200000206003000320900200804007003067000800602000009500080051000002",
"000208006900050800020000090037080000500040003000070680010000040009030002400507000",
"009107300704000908030000060078000530000308000400000009500409003800070005001000400",
"040901050600000001150000027004708500071000230003000600000216000000803000010070060",
"006100002080020000034805000307000040060000090040000103000601930000030050500008200",
"900000005004129600000605000040060020000708000780000063007000300020304080008050100",
"000080004709004530800000600000400700307906405005002000002000003038500109900030000",
"200003004004100000008060790500010020002406500010050003021030800000001300600800005",
"000028000027300860300000041000500700010000020003006000730000004048007690000980000",
"000905100140020005002006000006000002400802009800000400000500700700080054009204000",
"310500000600008004004007090002000010500070002080000300060800900400700005000001073",
"008020900600000005500901002001070500072000690300000007000407000010503020050010080",
"100700050000008300409060080600000090000307000010000002090020105003500000020006004",
"000693000064000380020000050001902700000507000030000090006070500070208060082060470",
"100009600200006009040000010500390480080605070092087001020000050700500008003900007",
"000109000108000509009532100300070004051000860002000700904000308063000420000000000",
"300600005029700060000093040007000054006030700280000600060310000090005120500009006",
"000080000010506030000473000000000000402000603038040790043000960500000008800102007",
]

const floor = Math.floor;

const Card = styled.div`
	font-family: 'Arial Rounded MT Bold';
	padding: 1rem 2rem 2rem 2rem;
	background: #F5F6F8;
	box-shadow: 1rem 1rem 1rem rgb(0,0,0,0.4);
	border-radius: 10px;
`;
const Board = styled.div`
	font-weight: 100;
	padding: 0;
	aspect-ratio: 1 /;
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
	const puzzle_choice = Math.floor(Math.random() * puzzles.length)

	//state vars
	const initializeBoard = (n) => {
		var board = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => null))
		if (n == null) {
			return board;
		}

		const puzzle = puzzles[n % puzzles.length];
		for (var i = 0; i < 81; i++){
			var row   	= Math.floor(i / 9)
			var column	= Math.floor(i % 9)
			let [square, item] = rowColumnToSquareItem(row, column)
			board[square][item] = Number(puzzle[i])
		}
		return board;
	};
	let [board, setBoard] = useState(initializeBoard(puzzle_choice));
	let [initialBoard] = useState(initializeBoard(puzzle_choice));
	let [selectedCell, setSelectedCell] = useState([null, null])
	let [neighbors, setNeighbors] = useState(new Set())

	const ArrowKeys = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'])
	const handleClick = ([square, item]) => {
		setSelectedCell([square, item])
		setNeighbors(getNeighbors([square, item]))
	}
	const handleKeyDown = useCallback((event) => {
		const { key } = event;
		let [square, item] = selectedCell;

		if (square == null || item == null) {return;}

		if (ArrowKeys.has(key)) {
			event.preventDefault();
			let [row, column] = squareItemToRowColumn(...selectedCell);
			switch (key) {
				case 'ArrowUp':
					row = Math.max(row - 1, 0); break;
				case 'ArrowDown':
					row = Math.min(row + 1, 8); break;
				case 'ArrowRight':
					column = Math.min(column + 1, 8); break;
				case 'ArrowLeft':
					column = Math.max(column - 1, 0); break;
				default:
					break;
			}
			setSelectedCell(rowColumnToSquareItem(row, column))
			setNeighbors(getNeighbors(rowColumnToSquareItem(row, column)))
		}

		if (initialBoard[square][item] !== 0) {return;}

		if (key >= '1' && key <= '9') {
			let newBoard = [...board]
			newBoard[square][item] = Number(key)
			setBoard(newBoard) 
		} else if (key === 'Backspace') {
			let newBoard = [...board];
			newBoard[square][item] = null;
			setBoard(newBoard);
		}
	}, [selectedCell, board])

	useEffect(()=>{
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [selectedCell, handleKeyDown])

	return (
		<SudokuContext.Provider value={{ selectedCell, neighbors }}>
			<Card>
				<h1>Sudoku</h1>
				<Board>
					<MiniGridContainer>
						{board.map((miniGridValues, index) => (
							<MiniGrid 
								key={index} 
								square={index} 
								values={miniGridValues} 
								setSelected={handleClick}/>
						))}
					</MiniGridContainer>
				</Board>
			</Card>
		</SudokuContext.Provider>
	);
}


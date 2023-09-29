//cell.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { squareItemToRowColumn } from './SudokuApp';

function color(isSelected, isNeighbor) {
  if (isSelected) {
    return "#BFDCFE"
  } else if (isNeighbor) {
    return "#E1E7ED"
  } else {
    return "#F5F6F8"
  }
}
const CellContainer = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  outline: 1px solid #BEC6D4;
  outline-offset: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  background-color: ${props => color(props.$isSelected, props.$isNeighbor)}

`

const Cell = ({ value, square, item, setSelected, neighbors, selected}) => {
  const curr = JSON.stringify([square, item])
  const isSelected = curr == selected
  const isNeighbor = neighbors.has(curr)

  return (
    <CellContainer 
      onClick={() => setSelected([square, item])} 
      $isSelected={isSelected} 
      $isNeighbor={isNeighbor}>
      {value !== 0 ? value : ''}
    </CellContainer>
  );
};

Cell.propTypes = {
  value: PropTypes.number
};

export default Cell;

//cell.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { squareItemToRowColumn } from './SudokuApp';

const CellContainer = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  outline: 1px solid #BEC6D4;
  outline-offset: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
`

const Cell = ({ value, square, item, setSelected }) => {
  return (
    <CellContainer onClick={() => setSelected([square, item])}>
      {value !== 0 ? value : ''}
    </CellContainer>
  );
};

Cell.propTypes = {
  value: PropTypes.number
};

export default Cell;

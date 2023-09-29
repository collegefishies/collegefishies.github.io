//minigrid.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cell from './Cell';  // Import the Cell component


const MiniGridContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  outline: 1px solid black;
  outline-offset: -1px
`;




const MiniGrid = ({ values, square, setSelected, neighbors, selected}) => {

  return (
    <MiniGridContainer>
      {values.map((value, index) => (
        <Cell key={index} square={square} item={index} value={value} setSelected={setSelected} neighbors={neighbors} selected={selected}/>
      ))}
    </MiniGridContainer>
  );
};
MiniGrid.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default MiniGrid;
export { MiniGridContainer};


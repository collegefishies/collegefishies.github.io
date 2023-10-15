//minigrid.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cell from './Cell';  // Import the Cell component


const MiniGridContainer = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  grid-template-rows: repeat(3, minmax(0,1fr));
  outline: 1px solid black;
  outline-offset: -1px
`;




const MiniGrid = ({ values, square, setSelected}) => {

  return (
    <MiniGridContainer>
      {values.map((value, index) => (
        <Cell key={index} square={square} item={index} value={value} setSelected={setSelected}/>
      ))}
    </MiniGridContainer>
  );
};
MiniGrid.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default MiniGrid;
export { MiniGridContainer};


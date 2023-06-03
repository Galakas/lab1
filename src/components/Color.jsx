import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'


const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Color = () => {
    const [color, setColor] = useState('red')

    const colors = [
        {color:"red"},
        {color:"green"},
        {color:"black"},
        {color:"yellow"},
        {color:"grey"},
        {color:"orange"},
    ]

  return (
    <Wrapper>
      <h1 >I'm a <span style={{color:color}}>{color}</span> Product!</h1>
      <select onChange={(e) => setColor(e.target.value)}>
       {colors.map(res => <option value={res.color}>{res.color}</option>)}
      </select>
    </Wrapper>
  );
}

export default Color
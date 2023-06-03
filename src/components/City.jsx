import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`
const Select = styled.select`
  width: 200px;
  height: 20px;
`


const City = () => {
    const cities = [
      { id: 1, name: "Chicago", img: "chicago.jpg" },
      { id: 2, name: "Los Angeles", img: "los-angeles.jpg" },
      { id: 3, name: "New York", img: "new-york.jpg" },
    ];

  return (
    <Wrapper>
        <Select>
            {cities.map(city => <option value={city.name}>{city.name}</option>)}
        </Select>
        <Select>
            {cities.map(city => <option value={city.img}>{city.img}</option>)}
        </Select>
    </Wrapper>
  )
}

export default City
import React from 'react'
import styled from 'styled-components'


const TableStyle = styled.table`
  border: 2px solid crimson;
  border-collapse: collapse;
  width: 500px;
  border-spacing: 3px;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Table = () => {
    const obj = {
        "First Name":'Vlad',
        "Last Name":'Trotskyi',
        "Occupation":'Student'
    }
    const key = Object.keys(obj)
    const values = Object.values(obj)

  return (
    <Wrapper id='root' >
        <TableStyle>
          <tbody>
            <tr><th>{key[0]}</th><td>{values[0]}</td></tr>
            <tr><th>{key[1]}</th><td>{values[1]}</td></tr>
            <tr><th>{key[2]}</th><td>{values[2]}</td></tr>
            </tbody>
        </TableStyle>
    </Wrapper>
  )
}

export default Table
import React from 'react'
import styled from 'styled-components'


const Span = styled.span`
  color: crimson;
`
const Props = ({name}) => {
  return (
    <>
    <h1>My name :<Span>{name}</Span></h1>
    </>
  )
}

export default Props
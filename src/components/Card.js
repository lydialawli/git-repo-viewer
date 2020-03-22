import React from 'react'
import styled from 'styled-components'


const CardWrapper = styled('div')({
  width: '90%',
  height: '70px',
  marginLeft: 30,
  marginRight: 30,
  border: '3px solid palevioletred',
  padding: '8px 20px',
  borderRadius: 4,
  // boxShadow: ' 2px 1px 10px 0.5px rgb(231, 231, 231)',
})


const Card = ({ pullReq }) => {
  console.log('pullReq-->', pullReq)
  return (
    <CardWrapper>
      <div>yeayeya</div>
    </CardWrapper>
  )
}

export default Card

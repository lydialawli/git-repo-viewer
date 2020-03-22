import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import moment from 'moment'

const CardWrapper = styled('div')({
  width: '90%',
  minHeight: '70px',
  margin: '30px 5px 30px 30px',
  border: '3px solid palevioletred',
  padding: '3px 10px',
  borderRadius: 4,
  // boxShadow: ' 2px 1px 10px 0.5px rgb(231, 231, 231)',
})

const CardTopContent = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
})

const Tag = styled('span')({
  display: 'inline-block',
  margin: '4px 4px 4px 0',
  backgroundColor: '#eee',
  borderRadius: 3,
  padding: '2px 6px 3px',
  color: '#666',
  fontSize: 13,
})

const Card = ({ data }) => {
  console.log('data-->', data)
  const comments = data.comments.edges

  return (
    <CardWrapper>
      <CardTopContent>
        <h3>{data.title}</h3>
        <h4>{!!data.comments.edges.length ? comments.length : '0'} comments</h4>
      </CardTopContent>
      <Tag>#{data.number}</Tag>
      <Tag>by {data.author.login}</Tag>
      <Tag>{`created on ${moment(data.createdAt).format('MMMM Do YYYY, h:mm:ss a')}`}</Tag>
      {data.closedAt && <Tag>{`closed on ${moment(data.closedAt).format('MMMM Do YYYY, h:mm:ss a')}`}</Tag>}
    </CardWrapper>
  )
}


Card.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Card

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import moment from 'moment'
import Comment from './Comment'

const CardWrapper = styled('div')({
  width: '90%',
  minHeight: '70px',
  margin: '30px 5px 30px 30px',
  border: '3px solid palevioletred',
  padding: '3px 15px 10px',
  borderRadius: 4,
  cursor: 'pointer'
})

const TopContent = styled('div')(({ justifyContent }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: justifyContent || 'space-between',
  flexDirection: 'row',
  paddingTop: 10,
  fontWeight: 500,
}))


const Tag = styled('span')({
  display: 'inline-block',
  margin: '4px 4px 4px 0',
  backgroundColor: '#eee',
  borderRadius: 3,
  padding: '2px 6px 3px',
  color: '#666',
  fontSize: 13,
})



const Card = ({ data, isPressed, cardPressed }) => {

  return (
    <CardWrapper onClick={() => cardPressed(isPressed ? '' : data.id)}>
      <TopContent>
        <h3>{data.title}</h3>
        <h4>{data.comments.totalCount} comments</h4>
      </TopContent>
      <Tag>#{data.number}</Tag>
      <Tag>by {data.author.login}</Tag>
      <Tag>{`created on ${moment(data.createdAt).format('LLL')}`}</Tag>
      {data.closedAt && <Tag>{`closed on ${moment(data.closedAt).format('LLL')}`}</Tag>}
      {isPressed && data.comments.totalCount > 0 &&
        data.comments.edges.map(c => {
          return (
            <Comment key={c.node.id} comment={c} />
          )
        })
      }
    </CardWrapper>
  )
}


Card.propTypes = {
  data: PropTypes.object.isRequired,
  isPressed: PropTypes.bool.isRequired,
}

export default Card

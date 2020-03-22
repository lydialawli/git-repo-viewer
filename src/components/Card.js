import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Avatar, GreyText } from './Styles'

const CardWrapper = styled('div')({
  width: '90%',
  minHeight: '70px',
  margin: '30px 5px 30px 30px',
  border: '3px solid palevioletred',
  padding: '3px 15px 10px',
  borderRadius: 4,
  cursor: 'pointer'
  // boxShadow: ' 2px 1px 10px 0.5px rgb(231, 231, 231)',
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

const CommentContainer = styled('div')({
  display: 'flex',
  boxShadow: ' 2px 1px 10px 0.5px rgb(231, 231, 231)',
  borderRadius: 5,
  padding: 10,
  fontSize: 13,
  fontFamily: 'Rubik',
  marginTop: 10,
  flexDirection: 'column',
  transition: 'all .3s ease-in-out'
})

const CommentBody = styled('p')({
  fontSize: 13,
  paddingLeft: 40
})


const Card = ({ data }) => {
  console.log('data-->', data.comments)

  return (
    <CardWrapper>
      <TopContent>
        <h3>{data.title}</h3>
        <h4>{data.comments.totalCount} comments</h4>
      </TopContent>
      <Tag>#{data.number}</Tag>
      <Tag>by {data.author.login}</Tag>
      <Tag>{`created on ${moment(data.createdAt).format('LLL')}`}</Tag>
      {data.closedAt && <Tag>{`closed on ${moment(data.closedAt).format('LLL')}`}</Tag>}
      {data.comments.totalCount > 0 &&
        data.comments.edges.map(c => {
          return (
            <CommentContainer key={c.id}>
              <TopContent justifyContent='flex-start'>
                <Avatar margin={10} width={20} height={20} src={c.node.author.avatarUrl} />
                <span>{c.node.author.login}</span>
                <GreyText>commented on {moment(c.node.createdAt).format('LLL')}</GreyText>
              </TopContent>
              <CommentBody>{c.node.body}</CommentBody>
            </CommentContainer>
          )
        })
      }
    </CardWrapper>
  )
}


Card.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Card

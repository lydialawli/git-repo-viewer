import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Avatar, GreyText } from './Styles'

const TopContent = styled('div')(({ justifyContent }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: justifyContent || 'space-between',
  flexDirection: 'row',
  paddingTop: 10,
  fontWeight: 500,
}))


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


const Comment = ({ comment }) => {

  return (
    <CommentContainer>
      <TopContent justifyContent='flex-start'>
        <Avatar margin={10} width={20} height={20} src={comment.node.author.avatarUrl} />
        <span>{comment.node.author.login}</span>
        <GreyText>commented on {moment(comment.node.createdAt).format('LLL')}</GreyText>
      </TopContent>
      <CommentBody>{comment.node.body}</CommentBody>
    </CommentContainer>
  )
}


Comment.propTypes = {
  comment: PropTypes.object.isRequired,
}

export default Comment

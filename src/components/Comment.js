import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {
  Avatar,
  GreyText,
  TopContent,
  CommentContainer,
  CommentBody
} from './Styles'


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

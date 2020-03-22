import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import moment from 'moment'
import Comment from './Comment'
import { GreyText, InputContainer } from './Styles'

const CardWrapper = styled('div')({
  width: '90%',
  minHeight: '70px',
  margin: '30px 5px 30px 30px',
  border: '3px solid palevioletred',
  padding: '3px 15px 10px',
  borderRadius: 4,
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

const IconWrapper = styled('i')({
  display: 'flex',
  paddingTop: 15,
  justifyContent: 'center',
  color: 'rgb(163,168,174)',
  cursor: 'pointer',
})

const Card = ({ data, isPressed, cardPressed }) => {
  const [filteredComments, setFilteredComments] = useState(data.comments.edges)

  const filterSearch = (text) => {

    let filtered = data.comments.edges.filter(e =>
      e.node.body.toUpperCase().includes(text.toUpperCase()) ||
      e.node.author.login.toUpperCase().includes(text.toUpperCase()) ||
      moment(e.node.createdAt).format('LLL').toUpperCase().includes(text.toUpperCase())
    )
    setFilteredComments(filtered)
  }

  return (
    <CardWrapper>
      <TopContent>
        <h3>{data.title}</h3>
        <IconWrapper onClick={() => cardPressed(isPressed ? '' : data.id)} className="fas fa-comment-alt">
          <GreyText>{data.comments.totalCount}</GreyText>
        </IconWrapper>
      </TopContent>
      <Tag>#{data.number}</Tag>
      <Tag>by {data.author.login}</Tag>
      <Tag>{`created on ${moment(data.createdAt).format('LLL')}`}</Tag>
      {data.closedAt &&
        <Tag>{`closed on ${moment(data.closedAt).format('LLL')}`}</Tag>
      }
      {!isPressed &&
        <IconWrapper onClick={() => cardPressed(data.id)} className="fas fa-chevron-down" />
      }
      {isPressed &&
        <>
          < IconWrapper onClick={() => cardPressed('')} className="fas fa-chevron-up" />
          <TopContent>
            <h4>Comments</h4>
            {data.comments.totalCount > 0 &&
              < InputContainer
                onChange={e => { filterSearch(e.target.value) }}
                type='text'
                placeholder={'search...'}
              />}
          </TopContent>
          {
            data.comments.totalCount === 0 ?
              <em>no comments</em>
              :
              (
                <>
                  {filteredComments.map(c => {
                    return (
                      <Comment key={c.node.id} comment={c} />
                    )
                  })}
                  {data.comments.totalCount > 4 &&
                    < IconWrapper onClick={() => cardPressed('')} className="fas fa-chevron-up" />
                  }
                </>
              )
          }
        </>
      }

    </CardWrapper>
  )
}


Card.propTypes = {
  data: PropTypes.object.isRequired,
  isPressed: PropTypes.bool.isRequired,
}

export default Card

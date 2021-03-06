import React, { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Comment from './Comment'
import {
  GreyText,
  InputContainer,
  TopContent,
  CardWrapper,
  Tag,
  IconWrapper
} from './Styles'


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

  const openGithubLink = () => {
    if (data.url) {
      window.open(data.url)
    }
  }

  return (
    <CardWrapper>
      <TopContent>
        <h3 style={{ display: 'flex', flexDirection: 'row' }}><IconWrapper noPadding className="fas fa-code-branch" />{data.title}</h3>
        <IconWrapper onClick={() => cardPressed(isPressed ? '' : data.id)} className="fas fa-comment">
          <GreyText>{data.comments.totalCount}</GreyText>
        </IconWrapper>
      </TopContent>
      <Tag>#{data.number}</Tag>
      <Tag>by {data.author.login}</Tag>
      <Tag>{`created on ${moment(data.createdAt).format('LLL')}`}</Tag>
      {data.closedAt &&
        <Tag>{`closed on ${moment(data.closedAt).format('LLL')}`}</Tag>
      }
      <Tag>
        <IconWrapper
          noPadding
          onClick={openGithubLink}
          className="fab fa-github"
        />
      </Tag>
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
  cardPressed: PropTypes.func.isRequired,
}

export default Card

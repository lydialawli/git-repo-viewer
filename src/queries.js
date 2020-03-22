import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'

export const PULL_REQUESTS_QUERY = gql`
  query ($name: String!, $repo: String!) {
    repository(owner: $name, name: $repo) {
      pullRequests(last: 30) {
        edges {
          node {
            id
            title
            number
            url
            comments(first: 20) {
              totalCount
              edges {
                node {
                  id
                  author {
                    login
                    avatarUrl
                  }
                  body
                  createdAt
                }
              }
            }
            author {
              login
            }
            createdAt
            closedAt
            merged
          }
        }
      }
    }
  }
`

export const OPEN_ISSUES_QUERY = gql`
  query ($name: String!, $repo: String!) {
    repository(owner: $name, name: $repo) {
      issues(last: 30, states: OPEN) {
        edges {
          node {
            title
            id
            url
            number
            createdAt
            closedAt
            author {
              login
            }
            comments(first: 20) {
              totalCount
              edges {
                node {
                  id
                  author {
                    login
                    avatarUrl
                  }
                  body
                  createdAt
                }
              }
            }
          }
        }
      }
    }
  }
`

export const CLOSED_ISSUES_QUERY = gql`
  query ($name: String!, $repo: String!) {
    repository(owner: $name, name: $repo) {
      issues(last: 30, states: OPEN) {
        edges {
          node {
            title
            id
            url
            number
            createdAt
            closedAt
            author {
              login
            }
            comments(first: 20) {
              totalCount
              edges {
                node {
                  id
                  author {
                    login
                    avatarUrl
                  }
                  body
                  createdAt
                }
              }
            }
          }
        }
      }
    }
  }
`

const useRepoDataQuery = (name, repository, type, options = {}) => {
  const queryOptions = {
    ...options,
    fetchPolicy: options.fetchPolicy || 'cache-and-network',
  }

  const queryType = () => {
    let query = ''
    switch (type) {
      case 'pullRequests':
        query = PULL_REQUESTS_QUERY
        break
      case 'open-issues':
        query = OPEN_ISSUES_QUERY
        break
      case 'closed-issues':
        query = CLOSED_ISSUES_QUERY
        break
      default:
    }
    return query
  }

  const {
    loading, error, data, refetch,
  } = useQuery(queryType(), {
    variables: {
      name: name,
      repo: repository
    },
    ...queryOptions,
  })

  const newData = (data && data.repository) || {}

  const repo = {
    ...newData,
    loading,
    error,
    refetch,
  }

  return { repo }
}


export default useRepoDataQuery

import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'

const GET_VIEWER = gql`
	query {
		viewer {
			avatarUrl
			login
			id
		}
	}
`

const PULL_REQUESTS_QUERY = gql`
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

const OPEN_ISSUES_QUERY = gql`
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

const CLOSED_ISSUES_QUERY = gql`
  query ($name: String!, $repo: String!) {
    repository(owner: $name, name: $repo) {
      issues(last: 30, states: CLOSED) {
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

export const useViewerQuery = () => {
  const {
    loading, error, data,
  } = useQuery(GET_VIEWER)

  const newData = (data && data.viewer) || {}

  const res = {
    ...newData,
    loading,
    error,
  }
  return { res }
}

export const useRepoDataQuery = (name, repository, type) => {

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

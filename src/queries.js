import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'

export const GET_REPO_DATA_QUERY = gql`
  query ($name: String!, $repo: String!) {
    repository(owner: $name, name: $repo) {
      pullRequests(last: 5) {
        edges {
          node {
            id
            title
            number
            url
            comments(first: 10) {
              edges {
                node {
                  author {
                    login
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
      issues(last: 20, states: CLOSED) {
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
            labels(first: 5) {
              edges {
                node {
                  name
                }
              }
            }
            comments(first: 1) {
              edges {
                node {
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

const useRepoDataQuery = (name, repository, options = {}) => {
  const queryOptions = {
    ...options,
    fetchPolicy: options.fetchPolicy || 'cache-and-network',
  }

  const {
    loading, error, data, refetch,
  } = useQuery(GET_REPO_DATA_QUERY, {
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

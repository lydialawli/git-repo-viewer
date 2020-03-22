import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'

export const GET_REPO_DATA_QUERY = gql`
  query ($name: String!, $repo: String!) {
    repository(owner: $name, name: $repo) {
      pullRequests(last: 5) {
        edges {
          node {
            number
            url
            author {
              login
            }
            createdAt
            merged
          }
        }
      }
      issues(last: 20, states: CLOSED) {
        edges {
          node {
            title
            url
            labels(first: 5) {
              edges {
                node {
                  name
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

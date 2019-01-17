import gql from 'graphql-tag';

export const getRepo = gql`
    query ($login: String!, $name: String!) {
      repositoryOwner(login: $login) {
        repository(name: $name){
          forks(first: 10){
            totalCount
            edges{
              node{
                owner{
                  login
                }
              }
            }
          }
        }
      }
    }
`;

export const getViewerInfo = gql`
    query {
      viewer {
        login
        avatarUrl
        location
        repositories(first: 100){
          nodes {
            name
            mirrorUrl
          }
        }
      }
    }
`;

export const getAllUser = gql`
      {
      search(query: "type:user", first: 100, type: USER) {
        userCount
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
          ... on User {
              login
              avatarUrl
              name
              location
            }
          }
        }
      }
    }
`;
export const getUserInfo = gql`
    query ($login: String!) {
      user(login: $login) {
        id
        name
        avatarUrl
        email
        login
        starredRepositories{
          totalCount
        }
        followers{
          totalCount
        }
        following {
          totalCount
        }
        repositories(last: 20){
          totalCount
          nodes{
            name
          }
        }
      }
    }
`;

export const getRepositoryInfo = gql`
     query ($login: String!, $name: String!){
      repositoryOwner(login: $login){
    		id
        repository(name: $name){
      		nameWithOwner
      		pullRequests(first: 20){
        		totalCount
      		}
          issues(last: 10){
        		totalCount
            edges{
              node{
                title
                body
                comments(first: 10){
                  edges{
                    node{
                      body
                      id
                      reactions (first: 10){
                        totalCount
                        edges {
                          node {
                            content
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
 `;

export const addReaction = gql`
  mutation test($input: AddReactionInput!){
  addReaction(input: $input){
    reaction{
      content
    }
  }
}
`;

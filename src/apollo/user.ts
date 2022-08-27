import { gql } from '@apollo/client'

export const USER_INFO = gql`
  query UserInfo($user: String!) {
    user(login: $user) {
    avatarUrl
    bio
    location
    url
    repositories(last: 4) {
      edges {
        node {
          name
          url
        }
      }
    }
  }
  }
`;
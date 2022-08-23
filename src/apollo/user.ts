import { gql } from '@apollo/client'

export const USER_INFO = gql`
  query UserInfo($user: String!) {
    repositoryOwner(login: $user) {
      avatarUrl
      url
    }
  }
`;
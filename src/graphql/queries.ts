import { gql } from '@apollo/client'

export const GET_TEAM_MEMBERS = gql`
  query GetTeamMembers {
    teamMembers {
      id
      name
      title
      roleDescription
      avatar {
        url
      }
    }
  }
`;

import { gql } from '@apollo/client'

// Example queries - replace with your actual GraphQL schema
export const GET_WILDLANDS = gql`
  query GetWildlands {
    wildlands {
      id
      name
      location
      status
      createdAt
      updatedAt
    }
  }
`

export const GET_WILDLAND_BY_ID = gql`
  query GetWildlandById($id: ID!) {
    wildland(id: $id) {
      id
      name
      location
      status
      description
      area
      riskLevel
      createdAt
      updatedAt
    }
  }
`

// Example mutations
export const CREATE_WILDLAND = gql`
  mutation CreateWildland($input: CreateWildlandInput!) {
    createWildland(input: $input) {
      id
      name
      location
      status
      createdAt
    }
  }
`

export const UPDATE_WILDLAND = gql`
  mutation UpdateWildland($id: ID!, $input: UpdateWildlandInput!) {
    updateWildland(id: $id, input: $input) {
      id
      name
      location
      status
      updatedAt
    }
  }
`

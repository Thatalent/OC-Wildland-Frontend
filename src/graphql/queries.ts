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
export const GET_WILDLAND_IMAGES = gql`
  query GetWildlandImages {
    images(
      where: {
        name: {
          in: [
          "OC Wildland Navbar Logo",
          "OC Wildland Footer Logo",
          "Cart Icon",
          "Search Icon",
          "X Logo",
          "Instagram Logo",
          "Facebook Logo",
          "YouTube Logo"
          ] } })
    {
      id
      imageUrl {
        url
      }
      altText
      name
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

// Contact form submission (Keystone list: ContactSubmission)
export const CREATE_CONTACT_SUBMISSION = gql`
  mutation CreateContactSubmission($data: ContactSubmissionCreateInput!) {
    createContactSubmission(data: $data) {
      id
    }
  }
`

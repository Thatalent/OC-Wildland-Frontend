import { gql } from "@apollo/client";

/* ============================
   GET ALL POSTS
   (Use these as "classes", "training programs", etc.)
=============================== */
export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      content {
        document
      }
      tags {
        name
      }
    }
  }
`;

/* ============================
   GET ONE POST BY ID
=============================== */
export const GET_POST_BY_ID = gql`
  query GetPostById($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      content {
        document
      }
      tags {
        name
      }
    }
  }
`;

/* ============================
   GET FOOTERS (for footer text)
=============================== */
export const GET_FOOTERS = gql`
  query GetFooters {
    footers {
      id
      text {
        document
      }
    }
  }
`;

/* ============================
   GET KPI STATS (Homepage Metrics)
=============================== */
export const GET_KPI_STATS = gql`
  query GetKPIStats {
    kpiStatistics {
      id
      name
      groupsTrained
      clientSatisfaction
      yearsOfExperience
      trainedFirefighters
      successRate
    }
  }
`;

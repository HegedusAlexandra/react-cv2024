/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContactMe = /* GraphQL */ `
  query GetContactMe($id: ID!) {
    getContactMe(id: $id) {
      id
      phone
      email
      message
      language
      notified
      name
      subject
      marketing
      contactMode
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listContactMes = /* GraphQL */ `
  query ListContactMes(
    $filter: ModelContactMeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactMes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        phone
        email
        message
        language
        notified
        name
        subject
        marketing
        contactMode
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

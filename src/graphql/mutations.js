/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContactMe = /* GraphQL */ `
  mutation CreateContactMe(
    $input: CreateContactMeInput!
    $condition: ModelContactMeConditionInput
  ) {
    createContactMe(input: $input, condition: $condition) {
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
export const updateContactMe = /* GraphQL */ `
  mutation UpdateContactMe(
    $input: UpdateContactMeInput!
    $condition: ModelContactMeConditionInput
  ) {
    updateContactMe(input: $input, condition: $condition) {
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
export const deleteContactMe = /* GraphQL */ `
  mutation DeleteContactMe(
    $input: DeleteContactMeInput!
    $condition: ModelContactMeConditionInput
  ) {
    deleteContactMe(input: $input, condition: $condition) {
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

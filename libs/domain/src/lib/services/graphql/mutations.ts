import { gql } from 'apollo-angular';

export const CREATE_PRODUCT = gql`
  mutation createProduct($createProduct: CreateProductDtoInput!) {
    createProduct(product: $createProduct) {
      id
      name
      value
    }
  }
`;

export const EDIT_PRODUCT = gql`
  mutation editProduct($editProduct: EditProductDtoInput!) {
    editProduct(product: $editProduct) {
      id
      name
      value
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: Long!) {
    deleteProduct(id: $productId) {
      id
      __typename
    }
  }
`;

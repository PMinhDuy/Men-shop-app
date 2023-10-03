import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends Record<string, unknown>> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface Author {
  __typename?: 'Author';
  books: Book[];
  id: Scalars['ID'];
  name: Scalars['String'];
}

export interface Book {
  __typename?: 'Book';
  author: Author;
  id: Scalars['ID'];
  isbn: Scalars['String'];
  title: Scalars['String'];
}

export interface CreateBookInput {
  author: Scalars['Int'];
  id: Scalars['ID'];
  isbn: Scalars['String'];
  title: Scalars['String'];
}

export interface FashionNew {
  __typename?: 'FashionNew';
  authorName: Scalars['String'];
  avatar: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
}

export interface FindBookInput {
  id: Scalars['Int'];
}

export interface Mutation {
  __typename?: 'Mutation';
  createBook: Book;
}

export interface MutationCreateBookArgs {
  input: CreateBookInput;
}

export interface Product {
  __typename?: 'Product';
  avatarUrl: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  newPrice: Scalars['String'];
  oldPrice: Scalars['String'];
}

export interface Query {
  __typename?: 'Query';
  authors: Author[];
  book: Book;
  books: Book[];
  fashionNews: FashionNew[];
  products: Product[];
}

export interface QueryBookArgs {
  input: FindBookInput;
}

export const GetFashionNewsDocument = gql`
  query getFashionNews {
    fashionNews {
      avatar
      authorName
      content
      createdAt
      id
      title
    }
  }
`;

/**
 * __useGetFashionNewsQuery__
 *
 * To run a query within a React component, call `useGetFashionNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFashionNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFashionNewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFashionNewsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetFashionNewsQuery, GetFashionNewsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFashionNewsQuery, GetFashionNewsQueryVariables>(GetFashionNewsDocument, options);
}
export function useGetFashionNewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetFashionNewsQuery, GetFashionNewsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFashionNewsQuery, GetFashionNewsQueryVariables>(GetFashionNewsDocument, options);
}
export type GetFashionNewsQueryHookResult = ReturnType<typeof useGetFashionNewsQuery>;
export type GetFashionNewsLazyQueryHookResult = ReturnType<typeof useGetFashionNewsLazyQuery>;
export type GetFashionNewsQueryResult = Apollo.QueryResult<GetFashionNewsQuery, GetFashionNewsQueryVariables>;
export const GetProductsDocument = gql`
  query GetProducts {
    products {
      id
      avatarUrl
      name
      newPrice
      oldPrice
    }
  }
`;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
}
export function useGetProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
}
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export type GetFashionNewsQueryVariables = Exact<Record<string, never>>;

export interface GetFashionNewsQuery {
  __typename?: 'Query';
  fashionNews: Array<{
    __typename?: 'FashionNew';
    avatar: string;
    authorName: string;
    content: string;
    createdAt: string;
    id: string;
    title: string;
  }>;
}

export type GetProductsQueryVariables = Exact<Record<string, never>>;

export interface GetProductsQuery {
  __typename?: 'Query';
  products: Array<{
    __typename?: 'Product';
    id: string;
    avatarUrl: string;
    name: string;
    newPrice: string;
    oldPrice: string;
  }>;
}

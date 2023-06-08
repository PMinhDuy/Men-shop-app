import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FashionNew = {
  __typename?: 'FashionNew';
  authorName?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  avatarUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  newPrice?: Maybe<Scalars['String']>;
  oldPrice?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  fashionNews?: Maybe<Array<Maybe<FashionNew>>>;
  products?: Maybe<Array<Maybe<Product>>>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
};


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
export function useGetFashionNewsQuery(baseOptions?: Apollo.QueryHookOptions<GetFashionNewsQuery, GetFashionNewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFashionNewsQuery, GetFashionNewsQueryVariables>(GetFashionNewsDocument, options);
      }
export function useGetFashionNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFashionNewsQuery, GetFashionNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
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
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    id
    email
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export type GetFashionNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFashionNewsQuery = { __typename?: 'Query', fashionNews?: Array<{ __typename?: 'FashionNew', avatar?: string | null, authorName?: string | null, content?: string | null, createdAt?: string | null, id?: string | null, title?: string | null } | null> | null };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Product', id?: string | null, avatarUrl?: string | null, name?: string | null, newPrice?: string | null, oldPrice?: string | null } | null> | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id?: string | null, email?: string | null } | null> | null };

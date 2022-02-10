import { CustomQuery } from '@vue-storefront/core'
import { gql } from '@apollo/client/core'
import { ShopifyApolloContext } from '../library'
import { QueryRoot, QueryRootPageArgs } from '../shopify'
<<<<<<< HEAD
import { GetPageParams } from '../types'
=======

interface GetPageParams {
  id?: string
  handle?: string
}
>>>>>>> chore: update getPage to use apollo

const defaultQuery = gql`
    query page(
      $handle: String
      $id: ID
    ) {
        page(handle: $handle, id: $id) {
          id
<<<<<<< HEAD
          handle
=======
>>>>>>> chore: update getPage to use apollo
          title
          onlineStoreUrl
          bodySummary
          body
          createdAt
        }
    }
`

export default async function getPage(context: ShopifyApolloContext, params: GetPageParams, customQuery?: CustomQuery) {
<<<<<<< HEAD
  const variables: QueryRootPageArgs = {
    ...(params.handle && { handle: params.handle }),
    ...(params.id && { id: params.id })
=======
  const variables: QueryRootPageArgs = {}

  if (params.handle) {
    variables.handle = params.handle
  } else if (params.id) {
    variables.id = params.id
>>>>>>> chore: update getPage to use apollo
  }

  const { page } = context.extendQuery(
    customQuery,
    {
      page: {
        query: defaultQuery,
        variables
      }
    }
  )

<<<<<<< HEAD
  return await context.client.apolloClient.query<QueryRoot, QueryRootPageArgs>({
    query: page.query,
    variables: page.variables
  }) ?? null
=======
  const response = await context.client.apolloClient.query<QueryRoot, QueryRootPageArgs>({
    query: page.query,
    variables: page.variables
  })

  return response ?? null
>>>>>>> chore: update getPage to use apollo
}
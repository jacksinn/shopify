import { contextMock } from '../__mocks__/contextMock.spec'
import getCollection from '../src/api/getCollection'

contextMock.client.apolloClient.query.mockImplementation((payload) => Promise.resolve(payload))

describe('[shopify-apollo] get collection', () => {
  it('props correctly mapped', async () => {
    const params = { categorySlug: 'boots', filters: {} }

    const expectedResult = { first: 5, handle: params.categorySlug, filters: params.filters }

    const mockResponse: { variables: string } = await getCollection(contextMock, params) as any

    expect(mockResponse.variables).toEqual(expectedResult)
  })
})
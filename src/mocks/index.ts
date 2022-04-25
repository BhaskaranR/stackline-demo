import type { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { analyticsData } from '~/mocks/analytics'

export const useMock = (axios: AxiosInstance): MockAdapter => {
  const mock = new MockAdapter (axios, { delayResponse: 100 })
  mock.onGet ('/getProductDetail').reply (() => {
    return [200, analyticsData[0]]
  })
  return mock
}

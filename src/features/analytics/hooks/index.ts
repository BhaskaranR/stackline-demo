import type { AxiosResponse } from 'axios'
import { useQuery } from 'react-query'
import type { Product } from '~/types'
import { AxiosInstance } from '~/utils/axios'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getProductDetail = async(id: string) => {
  const { data } = await AxiosInstance.get<Product, AxiosResponse<Product>>('/getProductDetail')
  return data
}

// todo param in the product id
export const useGetProductDetail = (id: string) => {
  return useQuery(['productInfo', { id }], () => getProductDetail(id), {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: 1000 * 60 * 60 * 24,
    useErrorBoundary: true,
  })
}

import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'Axios'
import { useMock } from '~/mocks'

export const AxiosInstance = axios.create()
// if (import.meta.USE_MOCK)
// import("~mocks").then(({useMock}) => {
useMock(AxiosInstance)
// });
// }
const isHandlerEnabled = (config: AxiosRequestConfig = {}) => {
  return 'handleEnabled' in config
}

AxiosInstance.interceptors.request.use ((config) => {
  config.headers = {
    'withCredentials': true,
    'Content-Type': 'application/json',
  }
  return config
})

const successHandler = (response: AxiosResponse<any>) => {
  if (isHandlerEnabled(response.config)) {
    // handle response
  }
  return response
}

const errorHandler = (error: AxiosError<any>) => {
  // todo handle errors
  if (isHandlerEnabled(error.config))
    console.error(JSON.stringify(error))

  return Promise.reject(error)
}

AxiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error),
)

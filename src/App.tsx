import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import { styled } from '@mui/material'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Header from './components/Header'
import routes from '~react-pages'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
      retry(failureCount, error) {
        if (error === 404)
          return false
        else if (failureCount < 2)
          return true
        else return false
      },
    },
  },
})

const Router = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}

const Root = styled('div')`
  width: 100%;
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    text-decoration: none;
    color: ${({ theme: { palette } }) => palette.primary.main};
  }
`
const App = () => {
  return (
    <Root>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <BrowserRouter>
          <Header />
          <Router />
          <ReactQueryDevtools />
        </BrowserRouter>
      </QueryClientProvider>
    </Root>
  )
}

export default App

import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { ProductInfo } from '../components/ProductInfo'
import { SalesChart } from '../components/SalesChart'
import { SalesTable } from '../components/SalesTable'
import { useGetProductDetail } from '../hooks'

const Index = () => {
  // todo get the id from the url params
  // todo handle Error with Error boundary
  const { data, isLoading } = useGetProductDetail('')

  return (
    <Container maxWidth="xl">
      {isLoading
        ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 3,
          }}
        >
          )
          <CircularProgress />
        </Box>
          )
        : (
        <Box
          component="main"
          sx={{
            flexGrow: 1,
          }}
        >
          <Grid container spacing={2}>
            <Grid item md={2} xs={12}>
              <ProductInfo product={data} />
            </Grid>
            <Grid item md={10} xs={12}>
              <SalesChart sales={data?.sales} />
              <SalesTable sales={data?.sales} />
            </Grid>
          </Grid>
        </Box>
          )}
    </Container>
  )
}

export default Index

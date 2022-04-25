import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import type { FC } from 'react'
import Chip from '@mui/material/Chip'
import { Box } from '@mui/material'
import type { Product } from '~/types'

interface IProps {
  product?: Product
}

export const ProductInfo: FC<IProps> = ({ product }) => {
  return (
    <Card elevation={0} sx={{ marginTop: 10 }}>
      <CardMedia
        component="img"
        sx={{ height: 100, width: '33%', marginLeft: '33%' }}
        image={product?.image}
      />
      <CardContent>
        <Typography style={{ textAlign: 'center' }} gutterBottom variant="h6" component="div">
          {product?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product?.subtitle}
        </Typography>
        <Box sx={{ marginTop: 1 }} >
          {product?.tags.map(tag => (
            // eslint-disable-next-line react/jsx-key
            <Chip label={tag} size="small" sx={{ margin: 0.5 }} variant="outlined" />
          ))}
        </Box>
      </CardContent>

    </Card>
  )
}

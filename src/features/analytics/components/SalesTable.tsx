import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import type { FC } from 'react'
import { Box, Card, CardContent } from '@mui/material'
import type { Sales } from '~/types'
import { Scrollbar } from '~/components/ScrollBar'

interface IProps {
  sales?: Array<Sales>
}

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'USD' },
  ).format(val)
}
export const SalesTable: FC<IProps> = ({ sales }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        pl: 3,
        height: 500,
        overflow: scroll,
      }}
    >
      <Card>
        <CardContent>
          <Scrollbar>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="analytics table">
                <TableHead>
                  <TableRow>
                    <TableCell>WEEK ENDING</TableCell>
                    <TableCell align="right">RETAIL SALES</TableCell>
                    <TableCell align="right">WHOLESALE SALES</TableCell>
                    <TableCell align="right">UNITS SOLD</TableCell>
                    <TableCell align="right">RETAILER MARGIN</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sales?.map(row => (
                    <TableRow
                      key={row.weekEnding}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.weekEnding}
                      </TableCell>
                      <TableCell align="right">{formatCurrency(row.retailSales)}</TableCell>
                      <TableCell align="right">{formatCurrency(row.wholesaleSales)}</TableCell>
                      <TableCell align="right">{row.unitsSold}</TableCell>
                      <TableCell align="right">{formatCurrency(row.retailerMargin)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
        </CardContent>
      </Card>
    </Box>
  )
}

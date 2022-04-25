import { Box, Card, CardContent, CardHeader } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { parseISO } from 'date-fns'
import type { FC } from 'react'
import Chart from 'react-apexcharts'
import type { Sales } from '~/types'

interface IProps {
  sales?: Array<Sales>
}

export const SalesChart: FC<IProps> = ({ sales, ...others }) => {
  const theme = useTheme()
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'solid',
      opacity: 0,
    },
    grid: {
      borderColor: theme.palette.divider,
    },
    markers: {
      strokeColors: theme.palette.background.paper,
      size: 6,
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true,
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true,
      },
      categories: monthNames,
    },
  }

  const getRetailSalesByMonth = () => {
    if (!sales)
      return []

    const valuePerMonth = sales?.reduce((dataByMonth: Record<string, number[]>, data) => {
      const date = parseISO(data.weekEnding)
      const month = monthNames[date.getMonth()]
      const year = (`${date.getFullYear()}`).slice(-2)
      const group = `${month}'${year}`
      if (!(group in dataByMonth))
        dataByMonth[group] = [0, 0]

      dataByMonth[group] = [dataByMonth[group][0] + data.retailSales, dataByMonth[group][1] + data.retailerMargin]

      return dataByMonth
    }, {})
    const data = Object.keys(valuePerMonth).map((group) => {
      return valuePerMonth[group]
    })
    return data
  }

  const chartSeries = [
    {
      name: 'Sales',
      data: getRetailSalesByMonth().map(data => data[0]),
    },
    {
      name: 'Margin',
      data: getRetailSalesByMonth().map(data => data[1]),
    },
  ]

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        pl: 3,
        pb: 3,
        mt: 5,
      }}
    >
      <Card>
        <CardHeader title="Retail Sales" />
        <CardContent>
          <Chart
            height={360}
            options={chartOptions}
            series={chartSeries}
            type="area"
          />
        </CardContent>
      </Card>
    </Box>
  )
}

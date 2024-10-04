import BotBoard from './BotBoard'
import { useMemo } from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  pointRadius: 0,
  scales: {
    x: {
      display: false,
      grace: 200
    },
    y: {
      grace: '10%'
    }
  },
  plugins: {
    legend: {
      position: 'top' as const,
      display: false
    }
  }
}

const SlampGraph = ({ diffs }: { diffs: Array<number> }): JSX.Element => {
  const data = useMemo(() => {
    return {
      labels: diffs.map((_, i) => i),
      datasets: [
        {
          data: diffs,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)'
        }
      ]
    }
  }, [diffs])
  return (
    <BotBoard>
      <Line options={options} data={data} className="w-full" />
    </BotBoard>
  )
}

export default SlampGraph

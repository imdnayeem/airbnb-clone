import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import randomColor from 'randomcolor'

function Trend(props) {
  const bgc = props.songs.map(() => randomColor())
  //   const bc = props.songs.map(() => randomColor());
  const count = props.songs.map(song => song.count)
  const title = props.songs.map(song => song.title)

  const data = {
    labels: title,

    datasets: [
      {
        data: count,
        backgroundColor: bgc,
        // borderColor: bc,
        borderWidth: 1
      }
    ]
  }
  const CSS = css`
    .trend {
      flex: 0.6;
      flex-wrap: wrap;
      margin: 0 20px;
    }

    .trend__inputContainer {
      background-color: white;
      border-radius: 10px;
      margin-bottom: 20px;
    }

    .trend_chart {
      width: 100%;
      border-radius: 10px;
      padding: 10px;
    }
  `
  const DoughnutChart = () => (
    <>
      <div className="trend" css={CSS}>
        <div className="trend__inputContainer">
          <Doughnut className="trend_chart" data={data} />
        </div>
      </div>
    </>
  )

  return (
    <>
      <DoughnutChart />
    </>
  )
}

export default Trend

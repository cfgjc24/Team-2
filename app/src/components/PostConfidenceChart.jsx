import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto'

let PostConfidenceChart = () => {

  // const [chart, setChart] = useState({})

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('http://localhost:3001/api/pre-confidence')
  //     const data = await response.json()
  //     setChart(data)
  //   }
  //   fetchData()
  // }, [])

  let data = {
    labels: ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5', 'Module 6', 'Module 7', 'Module 8'],
    datasets: [{
      label: 'Pre-Confidence Survey per Module',
      data: [65, 59, 80, 81, 56, 55, 40, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  return (
    <div>
      <div>
        <Bar data={data} />
      </div>
    </div>
  )
}
export default PostConfidenceChart;
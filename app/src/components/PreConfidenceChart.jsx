import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto'
import { db } from '../../firebase/Firebase.jsx'; 
import { collection, getDocs } from 'firebase/firestore';

const PreConfidenceChart = () => {

  const [chart, setChart] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'student_data'));
        const dataFromFirebase = querySnapshot.docs.map(doc => doc.data());

        const labels = dataFromFirebase.map(data => data.lesson_num);
        const preConfidenceValues = dataFromFirebase.map(data => data['confidence_before']);

        setChart({
          labels: labels,
          datasets: [{
            label: 'Pre-Confidence Survey per Module',
            data: preConfidenceValues,
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
        });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Bar data={chart} />
      </div>
    </div>
  )
}
export default PreConfidenceChart;
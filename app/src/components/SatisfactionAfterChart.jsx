import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { firestore } from "../Firebase.js";
import { collection, getDocs } from "firebase/firestore";

const SatisfactionAfterChart = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from Firestore
        const querySnapshot = await getDocs(
          collection(firestore, "student_data")
        );

        if (!querySnapshot.empty) {
          const dataFromFirebase = querySnapshot.docs.map((doc) => doc.data());

          const satisfactionAfterArray = Array(8).fill(0);
          const moduleCount = {};

          // Iterate over Firestore data to accumulate sums and counts for each module
          dataFromFirebase.forEach((data) => {
            const moduleIndex = data.lesson_num - 1; // Subtract 1 to make lesson_num zero-based
            if (
              moduleIndex >= 0 &&
              moduleIndex < satisfactionAfterArray.length
            ) {
              satisfactionAfterArray[moduleIndex] += data["satisfaction_after"];
              moduleCount[moduleIndex] = (moduleCount[moduleIndex] || 0) + 1;
            }
          });

          // Compute the average confidence for each module
          const averagedSatisfactionAfterArray = satisfactionAfterArray.map(
            (sum, index) => {
              const count = moduleCount[index] || 0;
              return count > 0 ? sum / count : 0;
            }
          );

          const chartData = {
            labels: [
              "Module 1",
              "Module 2",
              "Module 3",
              "Module 4",
              "Module 5",
              "Module 6",
              "Module 7",
              "Capstone",
            ],
            datasets: [
              {
                data: averagedSatisfactionAfterArray,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 205, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(201, 203, 207, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(255, 159, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(54, 162, 235)",
                  "rgb(153, 102, 255)",
                  "rgb(201, 203, 207)",
                  "rgb(153, 102, 255)",
                ],
                borderWidth: 1,
              },
            ],
          };

          setChartData(chartData);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
      },
    },
  };

  return (
    <div style={{ width: "50%", height: "80%" }}>
      {loading ? (
        <p>Loading data...</p>
      ) : chartData ? (
        <Bar data={chartData} options={chartOptions} />
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default SatisfactionAfterChart;

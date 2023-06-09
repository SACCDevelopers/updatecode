import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import '../../App.css';

const BasicMathsResults = () => {
  const canvasRef = useRef(null);
  const [results, setResults] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:5000/api/BasicMathsGraphs/Graphs');
        const data = await res.json();
        setResults(data);

        const chartData = {
          labels: ['Obtained Marks'],
          datasets: [
            {
              data: [data.obtainedMarks],
              backgroundColor: ['#36a2eb'],
            },
          ],
        };

        const percentageData = {
          labels: ['This much you are skillful', 'This much you are lacking'],
          datasets: [
            {
              data: [data.percentage, 100 - data.percentage],
              backgroundColor: ['#36a2eb', '#ebed36'],
            },
          ],
        };

        // Create doughnut chart for percentage of chemistry
        const percentageChart = new Chart(document.getElementById('percentageChart'), {
          type: 'doughnut',
          data: percentageData,
          options: {
            plugins: {
              legend: {
                position: 'bottom',
              },
            },
          },
        });

        // Create bar chart for chemistry results
        const resultsChart = new Chart(canvasRef.current, {
          type: 'bar',
          data: chartData,
          options: {
            scales: {
              y: {
                beginAtZero: true,
                max: data.totalMarks,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        });
        
        return () => {
          // Destroy charts on unmount
          resultsChart.destroy();
          percentageChart.destroy();
        };
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Basic Maths Results</h2>
      {results && (
        <div className="results-container">
          <div className="chart-container">
            <canvas ref={canvasRef} />
          </div>
          <div className="percentage-container">
            <canvas id="percentageChart" />
          </div>
          <div className="stats-container">
            <p>Obtained Marks: {results.obtainedMarks}</p>
            <p>Total Marks: {results.totalMarks}</p>
            <p>Percentage: {results.percentage.toFixed(2)}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicMathsResults;

'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

export default function Dashboard() {
  const [lineData, setLineData] = useState(null);
  const [barData, setBarData] = useState(null);
  const [pieData, setPieData] = useState(null);

  useEffect(() => {
    const fetchLineData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/line-chart-data/');
        console.log('Line Chart Data:', response.data); 
        setLineData({
          labels: response.data.labels,
          datasets: [
            {
              label: 'Line Chart',
              data: response.data.data,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching line chart data:', error);
      }
    };

    const fetchBarData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/bar-chart-data/');
        setBarData({
          labels: response.data.labels,
          datasets: [
            {
              label: 'Bar Chart',
              data: response.data.data,
              backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
              borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching bar chart data:', error);
      }
    };

    const fetchPieData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/pie-chart-data/');
        setPieData({
          labels: response.data.labels,
          datasets: [
            {
              label: 'Pie Chart',
              data: response.data.data,
              backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching pie chart data:', error);
      }
    };

    fetchLineData();
    fetchBarData();
    fetchPieData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      {lineData && (
        <div>
          <h2>Line Chart</h2>
          <Line data={lineData} />
        </div>
      )}

      {barData && (
        <div>
          <h2>Bar Chart</h2>
          <Bar data={barData} />
        </div>
      )}

      {pieData && (
        <div>
          <h2>Pie Chart</h2>
          <Pie data={pieData} />
        </div>
      )}
    </div>
  );
}

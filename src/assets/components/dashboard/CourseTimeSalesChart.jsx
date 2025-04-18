import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { usePayment } from '@/assets/contextAPI/PaymentContext';

const CourseTimeSalesChart = () => {
  const { adminPayments, fetchAdminPayments, loading, error } = usePayment();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch admin payments when the component mounts
    fetchAdminPayments();
  }, []);

  useEffect(() => {
    if (adminPayments.length > 0) {
      // Process payment data to group sales by date
      const salesByDate = adminPayments.reduce((acc, payment) => {
        const date = new Date(payment.paymentDate).toLocaleDateString(); // Format date
        acc[date] = (acc[date] || 0) + payment.totalAmount; // Sum totalAmount by date
        return acc;
      }, {});

      // Convert the grouped data into an array for the chart
      const formattedData = Object.keys(salesByDate).map((date) => ({
        date,
        sales: salesByDate[date],
      }));

      setChartData(formattedData);
    }
  }, [adminPayments]);

  if (loading) return <div>Loading chart data...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="w-full h-[300px]">
      <h2 className="text-xl font-semibold text-center mb-4">Payment Sales Over Time</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CourseTimeSalesChart;

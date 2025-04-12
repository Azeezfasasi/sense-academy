import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const courseSalesData = [
  { date: 'Mon', sales: 5 },
  { date: 'Tue', sales: 8 },
  { date: 'Wed', sales: 4 },
  { date: 'Thu', sales: 10 },
  { date: 'Fri', sales: 6 },
  { date: 'Sat', sales: 12 },
  { date: 'Sun', sales: 8 },
];

const CourseTimeSalesChart = () => {
  return (
    <div className="w-full h-[300px]">
      <h2 className="text-xl font-semibold text-center mb-4">Weekly Course Sales</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={courseSalesData}>
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

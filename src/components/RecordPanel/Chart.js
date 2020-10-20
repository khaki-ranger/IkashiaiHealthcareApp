import React from 'react';
import {
  AreaChart, 
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [];
for (let i=0; i<=6; i++) {
  const dayOfWeek = ['月', '火', '水', '木', '金', '土', '日' ][i];
  const weight = 60 + (Math.floor(Math.random() * Math.floor(50)) / 10);
  const temperature = 36 + (Math.floor(Math.random() * Math.floor(10)) / 10);
  data.push(
    {
      name: dayOfWeek,
      weight: weight,
      temperature: temperature,
    }
  );
}

const ChartPanel = ({ type, color }) => (
  <div>
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 0, right: 0, left: -30, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey={type} stroke={color} fill={color} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default ChartPanel;

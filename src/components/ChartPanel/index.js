import React from 'react';
import { Divider } from 'semantic-ui-react'
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
for (let i=1; i<=30; i++) {
  const weight = 60 + (Math.floor(Math.random() * Math.floor(50)) / 10);
  const temperature = 36 + (Math.floor(Math.random() * Math.floor(10)) / 10);
  data.push(
    {
      name: i,
      w: weight,
      t: temperature,
    }
  );
}

class ChartPanel extends React.Component {
  render() {
    return (
      <div>
        <Divider horizontal style={{ padding: '1rem 0' }}>体重</Divider>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={data}
              syncId="anyId"
              margin={{
                top: 0, right: 0, left: -30, bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="w" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <Divider horizontal style={{ padding: '1rem 0' }}>体温</Divider>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={data}
              syncId="anyId"
              margin={{
                top: 0, right: 0, left: -30, bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="t" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
};

export default ChartPanel;

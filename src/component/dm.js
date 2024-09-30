import * as React from 'react';
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';
import { dataset } from './GDPperCapita';

export default function CSSCustomization() {
console.log(dataset);
  return (
    <LineChart
      dataset={[
      dataset[0],
      dataset[1]
      ]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          strokeDasharray: '10 5',
          strokeWidth: 4,
        },
        '& .MuiAreaElement-series-Germany': {
          fill: "url('#myGradient')",
        },
      }}
      xAxis={[
        {
          id: 'Years',
          dataKey: 'date',
          scaleType: 'time',
          valueFormatter: (date) => date.getFullYear().toString(),
        },
      ]}
      series={[
        {
          id: 'France',
          dataKey: 'fr',
          stack: 'total',
          area: true,
          showMark: false,
        },
        {
          id: 'Germany',
          dataKey: 'dl',
          stack: 'total',
          area: true,
          showMark: false,
        },
        {
          id: 'United Kingdom',
          dataKey: 'gb',
          stack: 'total',
          area: true,
          showMark: false,
        },
      ]}
      margin={{ left: 60, top: 10, right: 20 }}
      width={600}
      height={300}
    >
      <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(0)">
          <stop offset="10%" stopColor="#6DDD42" />
          <stop offset="20%" stopColor="#FBEF51" />
          <stop offset="30%" stopColor="#EF8232" />
          <stop offset="40%" stopColor="#EA4024" />
          <stop offset="60%" stopColor="#721D24" />
          <stop offset="100%" stopColor="#834592" />
        </linearGradient>
      </defs>
    </LineChart>
  );
}

import React from 'react';
import { ResponsiveLine } from '@nivo/line';

export const Graph = ({ data, low, high }) => {
  const yMin = Math.min(0, low);
  const yMax = high + 20;

  return (
    <div className='Graph'>
      <ResponsiveLine
          data={data}
          margin={{
              "top": 50,
              "right": 16,
              "bottom": 64,
              "left": 48
          }}
          xScale={{
              "type": "point"
          }}
          yScale={{
              "type": "linear",
              "stacked": true,
              "min": yMin,
              "max": yMax
          }}
          curve="monotoneX"
          axisTop={null}
          axisRight={null}
          axisBottom={{
              "orient": "bottom",
              "tickSize": 5,
              "tickPadding": 5,
              "tickRotation": -60,
              "legendOffset": 36,
              "legendPosition": "middle",
              "tickValues": 0
          }}
          axisLeft={{
              "orient": "left",
              "tickSize": 5,
              "tickPadding": 5,
              "tickRotation": 0,
              "legend": "Fahrenheit",
              "legendOffset": -32,
              "legendPosition": "middle"
          }}
          enableGridX={false}
          colors={['blue']}
          dotSize={10}
          dotColor="inherit:darker(0.3)"
          dotBorderWidth={2}
          dotBorderColor="#ffffff"
          enableDotLabel={true}
          dotLabel="y"
          dotLabelYOffset={-12}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          isInteractive={false}
      />
    </div>
  )
}
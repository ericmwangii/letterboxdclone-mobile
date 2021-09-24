import React from 'react';
import {View} from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from 'victory-native';

const testData = [
  {rating: 0.5, users: 2},
  {rating: 1, users: 5},
  {rating: 1.5, users: 20},
  {rating: 2, users: 300},
  {rating: 2.5, users: 2500},
  {rating: 3, users: 6340},
  {rating: 3.5, users: 10000},
  {rating: 4, users: 5000},
  {rating: 4.5, users: 300},
  {rating: 5, users: 50},
];

const Chart = () => {
  //TODO remove hardcorded values plus add styling

  return (
    <View>
      <VictoryChart width={380}>
        <VictoryBar
          // barRatio={1.5}
          barWidth={30}
          data={testData}
          style={{data: {fill: '#445566'}}}
          x="rating"
          y="users"
        />
        <VictoryAxis
          style={{
            axis: {stroke: 'transparent'},
            ticks: {stroke: 'transparent'},
            tickLabels: {fill: 'transparent'},
          }}
        />
      </VictoryChart>
    </View>
  );
};

export default Chart;

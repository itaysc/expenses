import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


const SimpleLineChart = (props)=>{
  return (
    <div>
    <BarChart width={500} height={200} data={props.data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <CartesianGrid strokeDasharray="3 3"/>
         <XAxis dataKey="month"/>
         <YAxis/>
         <Tooltip/>
         <Legend />
         <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
</div>
  );

}

LineChart.defaultProps={
  data: []
}

LineChart.propTypes ={
  data: PropTypes.array
}
export default SimpleLineChart;

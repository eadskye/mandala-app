import React from 'react';
import ReactDOM from 'react-dom';
import { Radar, RadarChart, PolarGrid, Legend,
         PolarAngleAxis, PolarRadiusAxis } from 'recharts';
const data = [
   { subject: 'Family', A: 120, B: 110, fullMark: 100 },
   { subject: 'Spouse/Partner', A: 98, B: 130, fullMark: 100 },
   { subject: 'Close Friends', A: 86, B: 130, fullMark: 100 },
   { subject: 'Friends/Aquaintances', A: 99, B: 100, fullMark: 100 },
   { subject: 'Colleagues', A: 85, B: 90, fullMark: 100 },
   { subject: 'Professional', A: 65, B: 85, fullMark: 100 },
    { subject: 'Other', A: 65, B: 85, fullMark: 100 },
];

const TwoLevelPieChart = React.createClass({
	render () {
 	return (
   	<RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
         <Radar name="Disclosure Score" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
         <Radar name="Diversity Score" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>
         <Radar name="Satisfaction Score" dataKey="B" stroke="#82ca9d" fill="#42f4f4" fillOpacity={.08}/>
         <PolarGrid />
         <Legend />
         <PolarAngleAxis dataKey="subject" />
         <PolarRadiusAxis angle={30} domain={[0, 150]}/>
       </RadarChart>
   );
 }
});

export default TwoLevelPieChart;

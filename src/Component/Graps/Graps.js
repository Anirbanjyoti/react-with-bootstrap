import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const Graps = () => {
    const data = [
        {
            name: 'Page A', 
            uv: 150, 
            pv: 2400, 
            amt: 2400
        },
        {
            name: 'Page B', 
            uv: 150, 
            pv: 2400, 
            amt: 2400
        },
        {
            name: 'Page C', 
            uv: 500, 
            pv: 2400, 
            amt: 2400
        },
        {
            name: 'Page C', 
            uv: 600, 
            pv: 2400, 
            amt: 2400
        }
    ];
    return (     
                <LineChart width={400} height={400} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                </LineChart>
    );
};

export default Graps;
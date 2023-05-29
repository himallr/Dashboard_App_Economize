import React from "react";
import { Chart, Line } from "react-chartjs-2";
import {data,options} from './Datas';

function LineChart(){
    return (
        <div style={{width: 620}}>
            <Line data={data} options={options}/>
        </div>
    )
}

export default LineChart;
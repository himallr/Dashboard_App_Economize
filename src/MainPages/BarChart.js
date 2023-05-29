import React from "react";
import { Bar } from "react-chartjs-2";
import {data,options} from './Datas';

function BarChart(){
    return (
        <div style={{width: "620px"}} className="bar-chart">
            <Bar data={data} options={options}/>
        </div>
    )
}

export default BarChart;
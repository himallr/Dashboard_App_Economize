import React, { useState } from "react";
import './Main.css'
import Chart from "chart.js/auto";
import LineChart from "./MainPages/PieChart";
import BarChart from "./MainPages/BarChart";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AppBar from "./MainPages/AppBar";
import SidePanel from "./MainPages/sidepanel";
import Components from "./MainPages/Components";

function Main(props) {
    const [Name, setName] = useState("Himal");

    return (
        <div className="main">
            <div className="flex-direc">
                <div className="divider-1">
                    <SidePanel />
                </div>
                <div className="divider-2">
                    <div>
                        <div className="main1">
                            <span><img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile"></img></span>
                            <div className="title">
                                <h1>Good Morning {Name}</h1>
                            </div>
                            <div className="date">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker label={'"month"'} views={['month', 'year']} />
                                        <p style={{ alignContent: "center" }}>Till</p>
                                        <DatePicker label={'"month"'} views={['month', 'year']} />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </div>
                        </div>
                    </div>
                    {/* <Divider variant="inset" component="li" /> */}
                    <div style={{ display: "flex" }} className="chart-con">
                        <BarChart />
                        <LineChart />
                    </div>
                    <br></br>
                    <br></br>
                    <Components />
                    <br></br>

                    <AppBar />
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>

    );
};

export default Main;
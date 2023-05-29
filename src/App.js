import React from "react";
import Header from "./HEader.js";
import Main from "./main";
import Footer from "./Footer";
import { BrowserRouter,Route,Router,Routes } from "react-router-dom";
import Login from "./Login";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} ></Route>
                <Route path="/Login" element={<Login />}></Route>
            </Routes>
            <Footer />
        </div>

    )
}

export default App;
import React from 'react';
import './App.css';
import Layout from "./containers/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";

function App() {
  return (
    <div className="App">
        <Layout>
            <Routes>
                <Route path={"/"} element={<Home/>} />
            </Routes>
        </Layout>
    </div>
  );
}

export default App;

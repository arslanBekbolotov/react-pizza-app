import React from 'react';
import './App.css';
import Layout from "./containers/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import NotFoundBlock from "./components/NotFoundBlock/NotFoundBlock";

function App() {
  return (
    <div className="App">
        <Layout>
            <Routes>
                <Route path={"/"} element={<Home/>} />
                {/*<Route path={"/dishes/:category"} element={<Dishes/>} />*/}
                <Route path="*" element={<NotFoundBlock/>}/>
            </Routes>
        </Layout>
    </div>
  );
}

export default App;

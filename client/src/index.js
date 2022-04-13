import React from 'react';
import {createRoot} from 'react-dom/client';

import './index.css';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import TheoryScalesPage from "./pages/TheoryScalesPage";
import LearnScalesPage from "./pages/LearnScalesPage";
import App from "./App";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/theory/scales" replace />} />
                <Route path="/" element={<App/>}>
                    <Route path="theory/scales" element={<TheoryScalesPage/>}/>
                    <Route path="learn/scales" element={<LearnScalesPage/>}/>
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

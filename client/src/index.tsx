import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import LearnScalesPage from "./pages/learn-scales/LearnScalesPage";
import TheoryScalesPage from "./pages/theory-scales/TheoryScalesPage";
import FretboardPage from "./pages/fretboard/FretboardPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/theory/scales" replace />} />
                <Route path="/" element={<App/>}>
                    <Route path="fretboard" element={<FretboardPage />}/>
                    <Route path="theory/scales" element={<TheoryScalesPage />}/>
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

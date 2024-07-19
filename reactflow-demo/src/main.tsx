import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import DevExtremeMain from "./DevExtremeMain.tsx";
import themes from 'devextreme/ui/themes';

themes.initialized(() => {

    ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/devextreme" element={<DevExtremeMain/>}/>
                </Routes>
            </Router>
        </React.StrictMode>,
    )
});

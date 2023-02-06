import React from 'react'
import ReactDOM from 'react-dom/client'
import InformaticaApp from './InformaticaApp.jsx'
import './index.css'
import StageverslagApp from "./stageverslagApp.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('InformaticaMount')).render(
  <React.StrictMode>
    <InformaticaApp />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('VerslagMount')).render(
    <React.StrictMode>
        <StageverslagApp />
    </React.StrictMode>,
)

const isReactRunningMount = "IsReactRunningMount"

ReactDOM.createRoot(document.getElementById(isReactRunningMount)).render(
    <React.StrictMode>
        <h1 className="text-bg-dark">React is running</h1>
    </React.StrictMode>,
)
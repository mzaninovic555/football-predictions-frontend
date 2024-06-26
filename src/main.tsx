import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'primereact/resources/themes/lara-light-purple/theme.css';
import 'primeflex/primeflex.min.css';
import 'primereact/resources/primereact.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

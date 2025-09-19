import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App2'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
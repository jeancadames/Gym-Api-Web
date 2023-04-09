import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Gym } from './Gym'
import {BrowserRouter} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Gym/>
    </BrowserRouter>
  </React.StrictMode>
)

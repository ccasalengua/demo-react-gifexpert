import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { FirstApp } from './FirstApp.jsx';
import { GifExpertApp } from "./GifExpertApp.jsx"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirstApp name='Carlos Casalengua Galavis' number={8}></FirstApp> 
    <GifExpertApp></GifExpertApp>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Greet from './Greetings'
import Group8Members from './week4Task'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Greet/>
    <Group8Members/>
  </React.StrictMode>,
)

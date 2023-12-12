import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Greet from './Greetings'
import Group8Members from './week4Task'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Greet/>
      
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Country from './Country'

function App() {
  function clickMe(){
    alert("Click Option 1")
  }

  const clickMe2 = () => {
    alert("THis alert from Arrow Function")
  }

  const clickMe3 = (number) => {

    alert(`This alert from Function with parameter ${number}`)

  }

  return (
    <div>
      
      <h3>Way to handle Events</h3>
      {/* using normal function  */}
      <button onClick={clickMe}>Option 01</button>
      {/* Using Arrow function  */}
      <button onClick={clickMe2}>Option 2</button>
      {/* Using inline anonymous arrow function  */}
      <button onClick={() => {alert("This alert from anonymous arrow function")}}>Option 3</button>
      {/* Using function with parameter */}
      <button onClick={() => clickMe3(10)}>Option 4</button>

      <h3>Stage Change In React</h3>
      <Counter></Counter>

      <Country></Country>
    </div>

    
  )
}

export default App

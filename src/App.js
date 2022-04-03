import React, {useEffect, useState} from 'react'
import './App.css'
import Home from './components/Home'
import axios from 'axios'


function App() {
      const [TestTaken, setTestTaken] =useState(null)

  useEffect(() => {

    axios
      .get(
        'https://sheet.best/api/sheets/6d559efe-381d-4bea-9fc1-9eec9112ca31'
      )
      .then((response) => {
        setTestTaken(response.data.length)
      })   
  })
  console.log(TestTaken)

  return (
    <div className='App'>
      <Home TestTaken={TestTaken}/>
    </div>
  )
}

export default App

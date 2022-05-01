import React, {useEffect, useState} from 'react'
import './App.css'
import Home from './components/Home'
import axios from 'axios'


function App() {
      const [TestTaken, setTestTaken] =useState(null)

  // useEffect(() => {

  //   axios
  //     .get(
  //       'https://sheet.best/api/sheets/c2d16891-8c57-463d-8fc0-493e27918e79'
  //     )
  //     .then((response) => {
  //       setTestTaken(response.data.length)
  //     })   
  // })

  return (
    <div className='App'>
      <Home TestTaken={TestTaken}/>
    </div>
  )
}

export default App

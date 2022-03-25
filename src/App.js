import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Result from './components/Result/'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </div>
  )
}

export default App

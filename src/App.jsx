import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Read from './Components/Read'
import Create from './Components/Create'
import Update from './Components/Update'

function App() {


  return (
    <BrowserRouter>
    <>
      <Routes>
        <Route path='/' element={<Read />} />
        <Route path='/create' element={<Create/>} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </>
    </BrowserRouter>
  )
}

export default App

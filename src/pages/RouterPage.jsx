import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Add from './Add'
import Sambat from './Sambat'
import NotFound from './NotFound'

export default function RouterPage() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/add' element={<Add/>} />
            <Route path="/wall/:sambatUuid" element={<Sambat />} />

            <Route path='*' element={<NotFound/>} />
        </Routes>
     </Router>
  )
}
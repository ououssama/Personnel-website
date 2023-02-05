import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage'
import Layout from './pages/Layout'
import Portfolio  from './pages/Portfolio'
import AboutMe  from './pages/Aboutme'
import './index.css'
import Contact from './pages/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/Contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
)

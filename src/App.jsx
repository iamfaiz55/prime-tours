import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './routes/home'
import About from './pages/About'
import CarList from './pages/Car'
import TourList from './components/FeaturedTourList'
import NotFound from './components/NotFound'

const App = () => {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>} />
    <Route path='about' element={<About/>} />
    <Route path='car' element={<CarList/>} />
    <Route path='tours' element={<TourList/>} />
    <Route path='*' element={<NotFound/>} />
    </Route>
  
  </Routes>
  </BrowserRouter>
  </>
}

export default App

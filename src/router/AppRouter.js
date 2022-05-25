import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import { HomeScreen } from '../pages/HomeScreen'
import { ReseniasScreen } from '../pages/ReseniasScreen'

export const AppRouter = () => {
  return (
        <Routes>
            <Route path="/" element={<HomeScreen/>} />
            <Route path="/reviews/:reviewName" element={<ReseniasScreen/>} />
        </Routes>
  )
}

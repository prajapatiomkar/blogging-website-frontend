import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Layout from "./components/Layout"
import IndexPage from './components/Pages/IndexPage'
import LoginPage from './components/Pages/LoginPage'

import RegisterPage from './components/Pages/RegisterPage'
import { UserContextProvider } from './UserContext'

export default function App() {
  return (
    <>
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/register'} element={<RegisterPage />} />
        </Route>
      </Routes>
      </UserContextProvider>
    </>
  )
}

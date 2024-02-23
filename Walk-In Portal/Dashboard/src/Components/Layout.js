import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default Layout

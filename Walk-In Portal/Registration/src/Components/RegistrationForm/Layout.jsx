import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import PageNavHeader from './PageNavHeader/PageNavHeader';


const Layout = () => {
  return (
    <div>
      <PageNavHeader/>
      <Outlet /> 
    </div>
  )
}

export default Layout

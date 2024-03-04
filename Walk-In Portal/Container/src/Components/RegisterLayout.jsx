import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import RegistrationNavHeader from "RegistrationMFE/RegistrationNavHeader";

const RegisterLayout = () => {
  return (
    <div>
      <Header/>
      <RegistrationNavHeader/>
      <Outlet /> 
    </div>
  )
}

export default RegisterLayout

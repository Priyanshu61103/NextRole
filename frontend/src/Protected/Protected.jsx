import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({children}) => {

  if(!localStorage.getItem("userName")){
      return <Navigate to="/"/>
  }  
  return children;
}

export default Protected
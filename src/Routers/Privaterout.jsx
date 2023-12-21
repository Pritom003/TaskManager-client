import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providers/Authproviders';
import { Navigate, useLocation } from 'react-router-dom';

// import { Navigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../Providers/AuthiProvider';
import loaiding from '../assets/Animation - 1703145840753.json';
import Lottie from 'lottie-react';

const Privaterout = ({children}) => {

  
  const {user,loading}=useContext(AuthContext)
  const location =useLocation()
  // console.log(location)
  if(loading){
    return <h1><span> <Lottie animationData={loaiding}></Lottie></span></h1>

  }
  if(user){
    return children
  }
  return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default Privaterout;
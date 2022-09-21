import React from 'react'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  return (
    <GoogleLogin onSuccess={(response) => {
      console.log(response)
    }} onError={() => {console.log('Error')}}/>
  )
}

export default Login
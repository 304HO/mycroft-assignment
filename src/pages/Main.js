import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderComponent from '../components/headercomponent'
import SurviceComponente from '../components/servicecomponent'

const Main = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  }, [])
  return (
    <>
      <HeaderComponent />
      <SurviceComponente />
    </>
  )
}

export default Main

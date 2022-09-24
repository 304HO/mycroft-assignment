import React, { useState } from 'react'
import styled from 'styled-components'
import HeaderComponent from './headercomponent'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { stateStore } from '../store'

const LoginComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { token, setIsLogin, setToken } = stateStore()

  const navigate = useNavigate()
  const backNavigate = () => {
    navigate(-1)
  }

  const emailHandler = (email) => {
    setEmail(email.target.value)
  }

  const passwordHandler = (password) => {
    setPassword(password.target.value)
  }

  const checkPassword = () => {
    // console.log(password.length)
    if (password.length < 8) {
      alert('비밀번호를 확인해 주세요')
      return
    }
  }

  const loginHandler = async () => {
    checkPassword()
    const res = await axios.post(
      'https://mycroft-test-api.herokuapp.com/login',
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    setIsLogin()
    setToken(res.data.token)
    navigate('/')
  }

  return (
    <>
      <HeaderComponent />
      <LoginContainer>
        <h1>LOGIN</h1>
        <input type="text" placeholder="EMAIL" onChange={emailHandler} />
        <input
          type="password"
          placeholder="PASSWORD"
          onChange={passwordHandler}
        />
        <ButtonContainer>
          <button onClick={loginHandler}>LOG IN</button>
          <button onClick={backNavigate}>CANCEL</button>
        </ButtonContainer>
      </LoginContainer>
    </>
  )
}

export default LoginComponent

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`

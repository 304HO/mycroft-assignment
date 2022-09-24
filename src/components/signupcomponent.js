import React, { useState } from 'react'
import styled from 'styled-components'
import HeaderComponent from './headercomponent'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { stateStore } from '../store'

const SignupComponent = () => {
  const [email, setEmail] = useState('')
  const [checkEmail, setCheckEmail] = useState(true)
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [mobile, setMobile] = useState('')

  const { token, setToken } = stateStore()

  const navigate = useNavigate()
  const backNavigate = () => {
    navigate(-1)
  }

  const emailHandler = (email) => {
    setEmail(email.target.value)
  }

  const emailInvalid = () => {
    const invalid = /(^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$)/
    if (invalid.test(email)) {
      console.log('통과했다')
      setCheckEmail(true)
    } else {
      console.log('실패했다')
      setCheckEmail(false)
    }
  }

  const passwordHandler = (password) => {
    setPassword(password.target.value)
  }

  const checkPasswordHandler = (checkPassword) => {
    setCheckPassword(checkPassword.target.value)
  }

  const mobileHandler = (mobile) => {
    setMobile(mobile.target.value)
  }

  const signupHandler = async (e) => {
    e.preventDefault()
    if (email && password && checkPassword && mobile) {
      if (!/^[a-zA-Z0-9~!@#$%^&*()]{8,15}$/.test(password)) {
        alert('유효하지 않은 비밀번호입니다.')
        return
      }

      if (checkEmail === false) {
        alert('유효하지 않은 이메일입니다')
        document.getElementById('email').focus()
        return
      }

      if (password !== checkPassword) {
        alert('비밀번호가 일치하지 않습니다')
      } else {
        const res = await axios.post(
          'https://mycroft-test-api.herokuapp.com/sign-up',
          { email, password, mobile },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        setToken(res.data.token)
        alert('wellcome')
        navigate('/')
      }
    } else {
      alert('모든 항목은 필수입니다.')
    }
  }
  return (
    <>
      <HeaderComponent />
      <SignupContainer>
        <h1>SIGNUP</h1>
        <EmailInputContainer
          type="text"
          placeholder="EMAIL"
          onBlur={emailInvalid}
          onChange={emailHandler}
          checkEmail={checkEmail}
          id="email"
        />
        <PasswordInputContainer
          type="password"
          placeholder="PASSWORD"
          pattern="^[a-zA-Z0-9~!@#$%^&*()]{8,15}"
          maxLength={15}
          onChange={passwordHandler}
        />
        <PasswordInputContainer
          type="password"
          placeholder="CHECK PASSWORD"
          pattern="^[a-zA-Z0-9~!@#$%^&*()]{8,15}"
          maxLength={15}
          onChange={checkPasswordHandler}
        />
        <MobileInputContainer
          type="text"
          placeholder="MOBILE"
          pattern="[0-9]+"
          onChange={mobileHandler}
        />
        <ButtonContainer>
          <button onClick={signupHandler}>SIGN UP</button>
          <button onClick={backNavigate}>CANCEL</button>
        </ButtonContainer>
      </SignupContainer>
    </>
  )
}

export default SignupComponent

const EmailInputContainer = styled.input`
  &:focus {
    outline: none;
  }

  border-color: ${(props) => (props.checkEmail ? '' : 'red')};
`

const PasswordInputContainer = styled.input`
  &:focus {
    outline: none;
  }

  &:invalid {
    border-color: red;
  }
`

const MobileInputContainer = styled.input`
  &:focus {
    outline: none;
  }

  &:invalid {
    border-color: red;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 6px;
`

const SignupContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`

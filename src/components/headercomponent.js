import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { stateStore } from '../store'
import Logo from '../image/apple_icon.png'

const HeaderComponent = () => {
  const { token, isLogin, setTokenClear, setIsLogOut } = stateStore()

  const navigate = useNavigate()
  const signUpPage = () => {
    navigate('/sign-up')
  }

  const servicePage = () => {
    navigate('/')
  }

  const loginPage = () => {
    navigate('/login')
  }

  const myPage = () => {
    navigate('/mypage/order')
  }

  const logoutHandler = () => {
    setTokenClear()
    setIsLogOut()
    alert('good bye')
    navigate('/')
  }

  const url = window.location.pathname

  return (
    <HeaderContainer>
      <LogoImage src={Logo} alt="" />
      <h1>Apple service</h1>
      <Menu>
        <Button onClick={servicePage} isSelect={url === '/'}>
          서비스
        </Button>
        {isLogin === true && token !== null ? (
          <>
            <Button onClick={myPage} isSelect={url === '/mypage/order'}>
              마이페이지
            </Button>
            <Button onClick={logoutHandler} isSelect={url === '/logout'}>
              로그아웃
            </Button>
          </>
        ) : (
          <>
            <Button onClick={signUpPage} isSelect={url === '/sign-up'}>
              회원가입
            </Button>
            <Button onClick={loginPage} isSelect={url === '/login'}>
              로그인
            </Button>
          </>
        )}
      </Menu>
    </HeaderContainer>
  )
}

export default HeaderComponent

const Menu = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 6px;
`

const Button = styled.button`
  background-color: ${(props) => (props.isSelect ? 'rgb(238, 43, 42 )' : '')};
`

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  padding: 6px;
`

const HeaderContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
`

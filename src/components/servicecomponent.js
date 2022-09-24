import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { stateStore } from '../store'
import { useNavigate } from 'react-router-dom'

const SurviceComponente = () => {
  const [image, setImage] = useState([])
  const { token, isLogin } = stateStore()

  const navigator = useNavigate()

  const getImages = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
    // console.log(res.data.slice(0, 15))
    setImage(res.data.slice(0, 15))
  }

  useEffect(() => {
    getImages()
  }, [])

  const orderButtonHandler = () => {
    if (token !== null && isLogin === true) {
      alert('주문 성공!')
    } else {
      alert('로그인을 해주세요!')
      navigator('/login')
    }
  }

  return (
    <>
      <h1>Survice</h1>
      <MainContainer>
        {image.map((el) => {
          return (
            <ItemContainer key={el.id}>
              <ItemImage src={el.url} alt="" />
              <button onClick={orderButtonHandler}>주문하기</button>
            </ItemContainer>
          )
        })}
      </MainContainer>
    </>
  )
}

export default SurviceComponente

const MainContainer = styled.div`
  /* border: 1px solid black; */
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`

const ItemContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
`

const ItemImage = styled.img`
  width: 150px;
  height: 150px;
`

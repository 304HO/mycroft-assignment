import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import HeaderComponent from './headercomponent'
import { useNavigate } from 'react-router-dom'
import PageNation from './pagenation'

const MypageComponent = () => {
  const [orderList, setOrderList] = useState([])
  const [page, setPage] = useState(0)
  const [totalPage, setTotalPage] = useState(0)
  const limit = 10
  const navigator = useNavigate()

  const getOrderList = async () => {
    const res = await axios.get(
      `https://mycroft-test-api.herokuapp.com/order?page=${page}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    console.log(res)
    // setPage(res.data.totalPages * 10)
    console.log('psge@@@@', page)
    setTotalPage(res.data.totalPages)
    setOrderList(res.data.content)
  }
  // useEffect(() => {
  //   getOrderList()
  // }, [])

  useEffect(() => {
    getOrderList()
  }, [page])

  const detailHandelr = (id) => {
    navigator(`/order/${id}`)
    // console.log('/order/${id}', id)
  }

  return (
    <>
      <HeaderComponent />
      <RootContainer>
        {orderList.map((data) => {
          return (
            <ItemContainer onClick={() => detailHandelr(data.id)}>
              <div>ID: {data.id}</div>
              <div>{data.itemName}</div>
            </ItemContainer>
          )
        })}
      </RootContainer>
      <PageNation
        pageLength={page} // 게시글 총 갯수
        limit={limit}
        page={page}
        setPage={setPage}
        totalPage={totalPage}
      />
    </>
  )
}

export default MypageComponent

const ItemContainer = styled.div`
  /* border: 1px solid rebeccapurple; */
  box-shadow: 4px 4px 4px 4px gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const RootContainer = styled.div`
  /* border: 1px solid red; */
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  gap: 10px;
`

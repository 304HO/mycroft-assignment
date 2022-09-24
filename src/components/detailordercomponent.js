import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const DetailOrderComponent = () => {
  const [detail, getDetail] = useState([])
  const { id } = useParams()

  const getDetailOrder = async () => {
    const res = await axios.get(
      `https://mycroft-test-api.herokuapp.com/order/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    getDetail(res.data)
    console.log('res.data', res.data)
    console.log('detail', detail)
  }

  useEffect(() => {
    getDetailOrder()
  }, [])

  return (
    <DetailRootContainer>
      <DetailContainer>
        <div>{detail.id}</div>
        <div>{detail.itemName}</div>
      </DetailContainer>
    </DetailRootContainer>
  )
}

export default DetailOrderComponent

const DetailContainer = styled.div`
  box-shadow: 4px 4px 4px 4px gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DetailRootContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  gap: 10px;
`

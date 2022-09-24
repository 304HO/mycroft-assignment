import styled from 'styled-components'

const Pagenation = ({ totalPage, pageLength, limit, page, setPage }) => {
  // const length = Math.ceil(pageLength / limit)
  // console.log(pageLength, limit, length)

  return (
    <Container>
      <Button onClick={() => setPage(page - 1)} disabled={page === 0}>
        &lt;
      </Button>

      {Array(totalPage)
        .fill()
        .map((_, i) => (
          <Button
            key={i}
            onClick={() => setPage(i)}
            isSelect={page === i}
            cur={page === i ? 'page' : null}>
            {i + 1}
          </Button>
        ))}

      <Button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPage - 1}>
        &gt;
      </Button>
    </Container>
  )
}
export default Pagenation

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
`
const Button = styled.button`
  background-color: ${(props) => (props.isSelect ? 'black' : '#e3e3e3')};
  color: ${(props) => (props.isSelect ? 'white' : 'black')};
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 0;
  font-size: 1rem;

  &:hover {
    background: #000000;
    cursor: pointer;
    color: white;
  }

  &:disabled {
    background-color: #dedede;
    color: #7d7d7d;
    pointer-events: none;
  }
`

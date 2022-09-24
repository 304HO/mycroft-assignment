import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Mypage from './pages/Mypage'
import DetailPage from './pages/DetailOrder'

function App() {
  // const getRoutes = (allRoutes) => {
  //   allRoutes.map((route) => {
  //     return (
  //       route.route && (
  //         <Route path={route.route} element={route.component} key={route.key} />
  //       )
  //     )
  //   })
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage/order" element={<Mypage />} />
        <Route path="/order/:id" element={<DetailPage />} />
        {/* {getRoutes(routes)} */}
      </Routes>
    </BrowserRouter>
  )
}

export default App


import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'

const Router = () => (
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='login' element={<LoginPage/>} />
  </Routes>
)

export default Router

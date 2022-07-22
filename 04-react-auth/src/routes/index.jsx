import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { Routes, Route } from 'react-router-dom'
import { Home, Login, Secret, Signup, Logout } from '@/pages'
import Protected from '@/hoc/Protected'

const RoutesIndex = () => {
  const { isAuth } = useContext(AuthContext)
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/Logout' element={<Logout />} />
    </Routes>
  )
}

export default RoutesIndex
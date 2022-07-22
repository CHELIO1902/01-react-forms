import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import RoutesIndex from './routes'
import AuthContextProvider from '@/context/AuthContext'
import './App.css'

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router>
          <Navbar />
          <RoutesIndex />
        </Router>
      </AuthContextProvider>
    </>
  )
}

export default App

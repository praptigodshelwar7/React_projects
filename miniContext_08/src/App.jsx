import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/USerContextProvider'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Mini Context</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App

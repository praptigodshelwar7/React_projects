import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myArr=[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl'>Tailwind Check</h1>
      <Card channel='prapti' someObject={myArr}/>
      <Card channel='anshul' someobject={myArr}/>
      <Card/>
    </>
  )
}

export default App

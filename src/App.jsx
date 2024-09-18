import React from 'react'
import Backgrond from './components/backgrond'
import Foreground from './components/Foreground'

function App() {
  return (
    <div className='relative  w-full h-screen bg-zinc-900/20'>
     <Backgrond/>
     <Foreground/>
    </div>
  )
}

export default App
import React from 'react'

import Foreground from './components/Foreground'
import Backgrond from './components/Background'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='relative  w-full h-screen bg-zinc-900/20'>
      <Navbar/>
      <Backgrond/>
     <Foreground/>
    </div>
  )
}

export default App
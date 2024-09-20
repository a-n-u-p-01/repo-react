import React from 'react'

function Navbar() {
  return (
    <div className='fixed w-full z-30 py-10 px-10 bg-zinc-900 flex justify-between text-xl text-zinc-500 font-semibold tracking-widest'>
    <span>a-n-u-p-01</span>
    <a className='px-20 hover:text-zinc-400 transition-colors' href="https://github.com/a-n-u-p-01?tab=repositories">GitHub</a> 
    </div>
  )
}

export default Navbar
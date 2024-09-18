import React from 'react'


function Background() {
  return (
    <>
    <div className='w-full py-10 px-10 bg-zinc-700/20 flex justify-between text-xl text-zinc-500 font-semibold tracking-widest'>
    <span>a-n-u-p-01</span>
    <a className='px-20 hover:text-zinc-400 transition-colors' href="https://github.com/a-n-u-p-01?tab=repositories">GitHub</a> 
    </div>
    <h2 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-normal font-semibold text-zinc-900'>Repository</h2>
    </>
  )
}

export default Background
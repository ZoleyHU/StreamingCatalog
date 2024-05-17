import React from 'react'

interface Props {}

const Header = (props: Props) => {
  return (
    <div className="grid w-auto h-52 items-center text-center bg-gradient-to-b to-slate-600 via-slate-300 from-slate-600">
      <div className='h-fit rounded-xl ml-[30%] mr-[30%] cursor-default border-solid border-2 border-black bg-slate-300'>
        <p className='text-6xl leading-normal'>Streaming catalog</p>
      </div>
    </div>
  )
}

export default Header
import React from 'react'

const Home = () => {
  return (
    <main className='flex justify-between items-center px-[90px] pt-[30px]'>
        <div className='w-[40%]'>
          <h1 className='text-[50px] font-[900] text-[#242D52]'>Bring everyone together to build better products.</h1>
          <p className='py-[20px] text-[20px] text-[#9095AA] mb-[20px]'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
          <button className='bg-red-500 px-[30px] py-[10px] rounded-[50px] text-white hover:bg-gray-500'>Get started</button>
        </div>
        <div>
          <img src="/illustration-intro.svg" alt="" />
        </div>
      </main>
  )
}

export default Home

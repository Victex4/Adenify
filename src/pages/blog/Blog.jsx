import React from 'react'

const Blog = () => {
  return (
    <section className='px-[90px]'>
       <h1 className='text-center font-[700] text-[40px] py-[80px]'>What they've said</h1>
    <div className='flex gap-[30px]'>
       <div className='bg-[#FFEFEB] text-center px-[20px] py-[20px]'>
            <img className='w-[35%] mx-auto' src="images/anisha.png" alt="" />
            <h3 className='font-[700] text-[17px] py-[20px]'>Anisha Li</h3>
            <p className='text-[17px] text-[#9095AA]'>"Manage has supercharged our team's workflow.The ability to maintain visibity on other milestones at all times keeps everyone motivated."</p>
       </div>
       <div className='bg-[#FFEFEB] text-center px-[20px] py-[20px]'>
            <img className='w-[35%] mx-auto' src="images/ali.png" alt="" />
            <h3 className='font-[700] text-[17px] py-[20px]'>Ali Bravo</h3>
            <p className='text-[17px] text-[#9095AA]'>"We have been able to cancel so many other subscriptions since using  manage.Theres no more cross-channel confusion and everyone is much more focused."</p>
       </div>
       <div className='bg-[#FFEFEB] text-center px-[20px] py-[20px]'>
            <img className='w-[35%] mx-auto' src="images/richard.png" alt="" />
            <h3 className='font-[700] text-[17px] py-[20px]'>Richard Watts</h3>
            <p className='text-[17px] text-[#9095AA]'>"Manage allows us to provide structure and process. It keeps us organized and focused. i can't stop recommending thme to everyone i talk to."</p>
      </div>
      <div className='bg-[#FFEFEB] text-center px-[20px] py-[20px]'>
            <img className='w-[35%] mx-auto' src="images/shanai.png" alt="" />
            <h3 className='font-[700] text-[17px] py-[20px]'>Shanai Gough</h3>
            <p className='text-[17px] text-[#9095AA]'>"There software allows us to track, manage and collaborate on our project from anywhere.It keeps the whole team in-sync without being intrusive."</p>
      </div>
    </div>
       <div className='py-[5rem] px-[4rem] text-center'>
         <a href="#"><button className='bg-red-500 px-[30px] py-[10px] rounded-[50px] text-white hover:bg-gray-500'>Get started</button></a>
       </div>
    </section>
  )
}

export default Blog

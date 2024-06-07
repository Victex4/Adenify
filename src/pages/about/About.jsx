import React from 'react'

const About = () => {
  return (
    <section className='flex px-[90px] justify-between pt-[30px] mt-[3rem]'>
    <div className='w-[40%]'>
        <h2 className='font-[700] text-[40px] text-[#242D52]'>What’s different about Manage?</h2>
        <p className='text-[20px] text-[#9095AA] py-[20px]'>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
    </div>
    <div className='w-[50%]'>
        <div className='flex items-center gap-[20px] pb-[20px]'>
            <h4 className='bg-red-500 px-[19px] py-[9px] rounded-[50px] text-white'>01</h4>
            <h3 className='font-[800] text-[17px]'>Track company-wide progress</h3>
        </div>
        <div>
            <p className='text-[17px] pl-[4rem] text-[#9095AA]'>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
        </div>
        <div className='flex items-center gap-[20px] py-[20px]'>
            <h4 className='bg-red-500 px-[19px] py-[9px] rounded-[50px] text-white'>02</h4>
            <h3 className='font-[800] text-[17px]'>Advanced built-in reports</h3>
        </div>
        <div>
            <p className='text-[17px] pl-[4rem] text-[#9095AA]'>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
        </div>
        <div className='flex items-center gap-[20px] py-[20px]'>
            <h4 className='bg-red-500 px-[19px] py-[9px] rounded-[50px] text-white'>03</h4>
            <h3 className='font-[800] text-[17px]'>Everything you need in one place</h3>
        </div>
        <div>
            <p className='text-[17px] pl-[4rem] text-[#9095AA]'>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
        </div>
    </div>
</section>
  )
}

export default About

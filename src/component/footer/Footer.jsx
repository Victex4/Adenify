import React from 'react'

const Footer = () => {
  return (
    
    <footer>
        <div className='flex justify-between px-[90px] items-center bg-[#1D1E25] py-[30px] mt-[5.5rem]'>
            <div> 
                <a href="#">
                <img src="images/logo.svg" alt="" />
                </a>
                <ul className='flex gap-[10px] py-[20px]'>
                    <li>
                            <a href="#">
                                <img className='invert-[4]' src="images/facebook-circle-fill.png" alt="" />
                            </a>
                    </li>
                    <li>
                        <a href="https://wa.me/+2348065493663" target='_blank'>
                            <img className='invert-[4]' src="images/whatsapp-fill.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img className='invert-[4]' src="images/twitter-x-fill.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img className='invert-[4]' src="images/instagram-fill.png" alt="" />
                        </a>
                    </li>
                </ul>
            </div>

            <div className='flex gap-[15px] text-[white] pb-[10px]'>
                <ul className=''>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                     <li>
                        <a href="#">Products</a>
                     </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">Careers</a>
                    </li>
                    <li>
                        <a href="#">Community</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                </ul>
            </div>
                <div className='gap-[20px] items-center'>
                    <input className='rounded-[50px] p-[10px]' type="email" name="email" placeholder="Update in your inbox..."></input>
                    <input className='bg-red-500 px-[19px] py-[9px] rounded-[50px] text-white' type="submit" value="Go" id="submitButton"></input>
                    <div>
                        <p className='text-white pt-[8px]'> &copy; copyright 2020. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer

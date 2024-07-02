import React from 'react'
import Container from './Container'
import { CiMail } from "react-icons/ci";
import { FiPhoneCall,FiUser  } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";





const Header = () => {
    return (
        <div className="py-[13px]  bg-[#7E33E0]">
            <Container >
            <div className=" lg:flex lg:justify-between">
                <div className="lg:w-[30%] lg:flex lg:justify-between">
                    <div className="flex items-center lg:justify-start justify-center">
                            <CiMail className=" text-[#f1f1f1] font-josefin font-semibold" />
                            <p className='ml-[10px] text-[16px] text-[#f1f1f1] font-josefin font-semibold'>mr.shoron.7514@gmail.com</p>
                    </div>
                    <div className="flex items-center lg:justify-start justify-center">
                        <div className="text-[#f1f1f1] font-josefin font-semibold">
                            <FiPhoneCall/>
                        </div>
                        <div className="">
                            <p className='ml-[10px] text-[16px] text-[#f1f1f1] font-josefin font-semibold'>(12345)67890</p>
                        </div>
                    </div>
                </div>





                <div className='lg:w-[30%] w-full'>
                     <div className="lg:w-[50%] flex items-center w-full lg:justify-start justify-center">
                        <div className="flex items-center text-[16px] text-[#f1f1f1] font-josefin font-semibold ">
                            <span className='pr-[5px]'>English</span>
                            <FaAngleDown/>
                        </div>

                        <div className=" px-[17px] flex items-center text-[16px] text-[#f1f1f1] font-josefin font-semibold ">
                            <span className='pr-[5px]'>USD</span>
                            <FaAngleDown/>
                        </div>

                        <div className="flex items-center text-[16px] text-[#f1f1f1] font-josefin font-semibold ">
                            <span className='pr-[5px]'>Login</span>
                            <FiUser/>
                        </div>

                        <div className=" px-[17px] flex items-center text-[16px] text-[#f1f1f1] font-josefin font-semibold ">
                            <span className='pr-[5px]'>Wishlist</span>
                            <FaRegHeart/>
                        </div>

                        <div className="items-center text-[16px] text-[#f1f1f1] font-josefin font-semibold ">
                            <BsCart/>
                        </div>
                        
                     </div>
                </div>
            </div>
        </Container>
        </div>
    )
}

export default Header
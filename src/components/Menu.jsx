import React, { useState } from 'react'
import Container from './Container'
import { FaSearch, FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const Menu = () => {
    let [show, setShow] = useState(false)
    return (
        <Container>
            <div className="lg:flex lg:justify-between items-center lg:mx-0 mx-[10px] py-[15px]">
                <div className="lg:w-[70%] w-full flex lg:justify-start justify-between items-center" >
                    <div className="w-[10%]">
                        <h2 className='text-[39px] text-[#0D0E43] font-josefin font-bold'>Hekto</h2>
                    </div>
                    <div className="w-[65%]">
                        <ul className={`lg:flex items-center justify-center lg:static absolute -z-30  ${show == true ? 'top-[150px] left-[0px] bg-[#F5F5F3] z-50  w-full  duration-700 text-center' : ' duration-700 top-[-400px] left-[0px] text-center  w-full bg-[none] '}`}>
                            <li className='text-[16px] text-[#0D0E43] font-lato font-normal'>Home</li>
                            <li className='text-[16px] text-[#0D0E43] font-lato font-normal px-[17px]'>Pages</li>
                            <li className='text-[16px] text-[#0D0E43] font-lato font-normal'>Products</li>
                            <li className='text-[16px] text-[#0D0E43] font-lato font-normal px-[17px]'>Blog </li>
                            <li className='text-[16px] text-[#0D0E43] font-lato font-normal'>Shop</li>
                            <li className='text-[16px] text-[#0D0E43] font-lato font-normal p-[17px]'>Contact</li>
                        </ul>
                    </div>

                    <div className=" lg:hidden relative " onClick={() => { setShow(!show) }}>
                        {show == true ? <RxCross2 className='text-[#262626] text-[25px]' /> : <FaBars className='text-[#262626] text-[25px]' />}
                    </div>
                </div>

                <div className="lg:w-[27%] w-full ">
                    <div className="flex items-center lg:justify-start justify-center">
                        <div className="">
                            <input type="text" className='outline-none border-[2px] border-[#E7E6EF] w-[280px] h-[32px]' />
                        </div>
                        <div className="py-[8px] px-[13px] bg-[#FB2E86] ml-[-2px] text-[#fff]">
                            <FaSearch />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Menu
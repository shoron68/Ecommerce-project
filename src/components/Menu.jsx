import React, { useEffect, useState } from 'react'
import Container from './Container'
import { FaSearch, FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';


const Menu = () => {
    let [activeMenu,setActiveMenu] = useState(localStorage.getItem('activeMenu') || '');
    let [show, setShow] = useState(false)
    useEffect(() => {
        localStorage.setItem('activeMenu', activeMenu);
    }, [activeMenu]);
    return (
        <Container>
            <div className="lg:flex lg:justify-between items-center lg:mx-0 mx-[10px] py-[15px]">
                <div className="lg:w-[70%] w-full flex lg:justify-start justify-between items-center" >
                    <div className="w-[10%]">
                        <h2 className='text-[39px] text-[#0D0E43] font-josefin font-bold'>Hekto</h2>
                    </div>
                    <div className="w-[65%]">
                        <ul className={`lg:flex items-center justify-center lg:static absolute -z-30  ${show == true ? 'top-[150px] left-[0px] bg-[#F5F5F3] z-50  w-full  duration-700 text-center' : ' duration-700 top-[-400px] left-[0px] text-center  w-full bg-[none] '}`}>
                            <li onClick={()=>setActiveMenu('Home')} className={`${activeMenu === 'Home' ? ' text-[#FF2AAA] font-lato font-normal text-[16px] ' : '  text-[#0D0E43] font-lato font-normal text-[16px] '}`} ><Link to="/">Home</Link></li>
                            <li onClick={()=>setActiveMenu('Pages')} className={`${activeMenu === 'Pages' ? ' text-[#FF2AAA] mx-3 font-lato font-normal text-[16px] ' : 'text-[#0D0E43] mx-3 font-lato font-normal text-[16px]  '}`}>Pages</li>
                            <li onClick={()=>setActiveMenu('Products')} className={`${activeMenu === 'Products' ? ' text-[#FF2AAA] font-lato font-normal text-[16px] ' : '  text-[#0D0E43] font-lato font-normal text-[16px] '}`}>Products</li>
                            <li onClick={()=>setActiveMenu('Blog')} className={`${activeMenu === 'Blog' ? ' text-[#FF2AAA] mx-3 font-lato font-normal text-[16px] ' : ' font-lato font-normal text-[16px]   text-[#0D0E43] mx-3'}`}><Link to="/blog">Blog</Link> </li>
                            <li onClick={()=>setActiveMenu('Shop')} className={`${activeMenu === 'Shop' ? ' text-[#FF2AAA] font-lato font-normal text-[16px] ' : 'font-lato font-normal text-[16px]   text-[#0D0E43]'}`}> <Link to="/pages">Shop</Link></li>
                            <li onClick={()=>setActiveMenu('Contact')} className={`${activeMenu === 'Contact' ? ' text-[#FF2AAA] mx-3 font-lato font-normal text-[16px] ' : 'font-lato font-normal text-[16px]   text-[#0D0E43] mx-3'}`}><Link to="/contact">Contact</Link></li>
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
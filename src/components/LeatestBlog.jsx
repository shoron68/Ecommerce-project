import React from 'react'
import Container from './Container'
import lbimg1 from "../assets/lbimg1.png"
import lbimg2 from "../assets/lbimg2.png"
import lbimg3 from "../assets/lbimg3.png"
import { FaPenNib } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";



const LeatestBlog = () => {
  return (
    <Container>
        <div className="text-center pt-[96px]">
            <h2  className='text-[42px] text-[#1A0B5B] font-josefin font-bold'>Leatest Blog</h2>
        </div>
        <div className="flex justify-between pt-[80px]">


            <div className="w-[30%] flex justify-center group ">
            <div className="bg-[#fff] shadow-lg">
            <img src={lbimg1} className='rounded-[5px]' alt="" />
            <div className="ml-[10px] pb-[35px]">
                <div className="flex">
                    <div className="flex items-center mr-[29px]">
                        <FaPenNib className='text-[9px] mr-[7px] text-[#FB2E86]'/>
                        <p className='text-[12px] text-[#151875] font-josefin font-normal  '>SaberAli</p>
                    </div>
                    <div className="flex items-center">
                        <MdOutlineCalendarMonth className='text-[10px] mr-[7px] text-[#FFA454]'/>
                        <p className='text-[12px] text-[#151875] font-josefin font-normal pt-[3px]  '>21 August,2020</p>
                    </div>
                </div>
                <h3 className='text-[18px] text-[#151875] font-josefin font-bold pt-[31px] group-hover:text-[#FB2E86] duration-300'>Top esssential Trends in 2021</h3>
                <p className='text-[16px] text-[#72718F] font-lato font-normal pt-[17px]'>More off this less hello samlande lied much <br/>
                over tightly circa horse taped mightly</p>
                <button className='pt-[14px] text-[16px] text-[#151875] font-lato border-b-[1px] border-[#151875] group-hover:text-[#FB2E86] group-hover:border-[#FB2E86] duration-300 ' >Read More</button>
            </div>
            </div>
            </div>


            <div className="w-[30%] flex justify-center group ">
            <div className="bg-[#fff] shadow-lg">
            <img src={lbimg2} className='rounded-[5px]' alt="" />
            <div className="ml-[10px] pb-[35px]">
                <div className="flex">
                    <div className="flex items-center mr-[29px]">
                        <FaPenNib className='text-[9px] mr-[7px] text-[#FB2E86]'/>
                        <p className='text-[12px] text-[#151875] font-josefin font-normal  '>Surfauxion</p>
                    </div>
                    <div className="flex items-center">
                        <MdOutlineCalendarMonth className='text-[10px] mr-[7px] text-[#FFA454]'/>
                        <p className='text-[12px] text-[#151875] font-josefin font-normal pt-[3px]  '>21 August,2020</p>
                    </div>
                </div>
                <h3 className='text-[18px] text-[#151875] font-josefin font-bold pt-[31px] group-hover:text-[#FB2E86] duration-300'>Top esssential Trends in 2021</h3>
                <p className='text-[16px] text-[#72718F] font-lato font-normal pt-[17px]'>More off this less hello samlande lied much <br/>
                over tightly circa horse taped mightly</p>
                <button className='pt-[14px] text-[16px] text-[#151875] font-lato border-b-[1px] border-[#151875] group-hover:text-[#FB2E86] group-hover:border-[#FB2E86] duration-300 ' >Read More</button>
            </div>
            </div>
            </div>


            <div className="w-[30%] flex justify-center group ">
            <div className="bg-[#fff] shadow-lg">
            <img src={lbimg3} className='rounded-[5px]' alt="" />
            <div className="ml-[10px] pb-[35px]">
                <div className="flex">
                    <div className="flex items-center mr-[29px]">
                        <FaPenNib className='text-[9px] mr-[7px] text-[#FB2E86]'/>
                        <p className='text-[12px] text-[#151875] font-josefin font-normal  '>SaberAli</p>
                    </div>
                    <div className="flex items-center">
                        <MdOutlineCalendarMonth className='text-[10px] mr-[7px] text-[#FFA454]'/>
                        <p className='text-[12px] text-[#151875] font-josefin font-normal pt-[3px]  '>21 August,2020</p>
                    </div>
                </div>
                <h3 className='text-[18px] text-[#151875] font-josefin font-bold pt-[31px] group-hover:text-[#FB2E86] duration-300'>Top esssential Trends in 2021</h3>
                <p className='text-[16px] text-[#72718F] font-lato font-normal pt-[17px]'>More off this less hello samlande lied much <br/>
                over tightly circa horse taped mightly</p>
                <button className='pt-[14px] text-[16px] text-[#151875] font-lato border-b-[1px] border-[#151875] group-hover:text-[#FB2E86] group-hover:border-[#FB2E86] duration-300 ' >Read More</button>
            </div>
            </div>
            </div>
        </div>
    </Container>
  )
}

export default LeatestBlog
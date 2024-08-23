import React from 'react'
import Container from './Container'
import img1 from "../assets/shopex1.png"
import img2 from "../assets/shopex2.png"
import img3 from "../assets/shopex3.png"
import img4 from "../assets/shopex4.png"

const WhatShopexOffer = () => {
  return (
    <Container>
        <div className="lg:py-[58px]">
            <h2 className='lg:text-[42px] text-[38px] text-center text-[#151875] font-josefin font-bold'>What Shopex Offer!</h2>
        </div>

        <div className="">
            <div className="lg:flex justify-between lg:mx-0 mx-[15px]">
                <div className="w-full lg:w-[24%] mt-[20px] lg:mt-0">
                    <div className="bg-[#FFFFFF] drop-shadow-xl">
                    <div className="lg:pt-[56px] pt-[10px] lg:px-[120px] px-[170px] lg:pb-[27px] pb-[10px] text-center">
                        <img src={img1}  alt="" />
                    </div>
                    <div className="text-center">
                        <h4 className=' pb-[20px] text-[22px] text-[#151875] font-josefin font-semibold'>24/7 Support</h4>
                        <p className=' pb-[45px] w-[70%] mx-auto text-[16px] text-[rgba(26,11,91,0.4)] font-josefin font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    </div>
                </div>
                <div className="w-full lg:w-[24%] mt-[20px] lg:mt-0 ">
                    <div className="bg-[#FFFFFF] drop-shadow-xl">
                    <div className="lg:pt-[56px] pt-[10px] lg:px-[120px] px-[170px] lg:pb-[27px] pb-[10px] text-center">
                        <img src={img2} className="" alt="" />
                    </div>
                    <div className="text-center">
                        <h4 className=' pb-[20px] text-[22px] text-[#151875] font-josefin font-semibold'>24/7 Support</h4>
                        <p className=' pb-[45px] w-[70%] mx-auto text-[16px] text-[rgba(26,11,91,0.4)] font-josefin font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div> 
                    </div>
                </div>
                <div className="w-full lg:w-[24%] mt-[20px] lg:mt-0 ">
                    <div className="bg-[#FFFFFF] drop-shadow-xl">
                    <div className="lg:pt-[56px] pt-[10px] lg:px-[120px] px-[170px] lg:pb-[27px] pb-[10px] text-center">
                        <img src={img3} alt="" />
                    </div>
                    <div className="text-center">
                        <h4 className=' pb-[20px] text-[22px] text-[#151875] font-josefin font-semibold'>24/7 Support</h4>
                        <p className=' pb-[45px] w-[70%] mx-auto text-[16px] text-[rgba(26,11,91,0.4)] font-josefin font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    </div>
                </div>
                <div className="w-full lg:w-[24%] mt-[20px] lg:mt-0 ">
                    <div className="bg-[#FFFFFF] drop-shadow-xl">
                    <div className="lg:pt-[56px] pt-[10px] lg:px-[120px] px-[170px] lg:pb-[27px] pb-[10px] text-center">
                        <img src={img4} alt="" />
                    </div>
                    <div className="text-center">
                        <h4 className=' pb-[20px] text-[22px] text-[#151875] font-josefin font-semibold'>24/7 Support</h4>
                        <p className=' pb-[45px] w-[70%] mx-auto text-[16px] text-[rgba(26,11,91,0.4)] font-josefin font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default WhatShopexOffer
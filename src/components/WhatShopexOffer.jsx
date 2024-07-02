import React from 'react'
import Container from './Container'
import img1 from "../assets/shopex1.png"
import img2 from "../assets/shopex2.png"
import img3 from "../assets/shopex3.png"
import img4 from "../assets/shopex4.png"

const WhatShopexOffer = () => {
  return (
    <Container>
        <div className="py-[58px]">
            <h2 className='text-[42px] text-center text-[#151875] font-josefin font-bold'>What Shopex Offer!</h2>
        </div>

        <div className="">
            <div className="flex justify-between">
                <div className="w-[20%] ">
                    <div className="bg-[#FFFFFF] drop-shadow-xl">
                    <div className="pt-[56px] px-[120px] pb-[27px] text-center">
                        <img src={img1} alt="" />
                    </div>
                    <div className="text-center">
                        <h4 className=' pb-[20px] text-[22px] text-[#151875] font-josefin font-semibold'>24/7 Support</h4>
                        <p className=' pb-[45px] w-[70%] mx-auto text-[16px] text-[rgba(26,11,91,0.4)] font-josefin font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    </div>
                </div>
                <div className="w-[20%] ">
                    <div className="bg-[#FFFFFF] drop-shadow-xl">
                    <div className="pt-[56px] px-[120px] pb-[27px] text-center">
                        <img src={img2} alt="" />
                    </div>
                    <div className="text-center">
                        <h4 className=' pb-[20px] text-[22px] text-[#151875] font-josefin font-semibold'>24/7 Support</h4>
                        <p className=' pb-[45px] w-[70%] mx-auto text-[16px] text-[rgba(26,11,91,0.4)] font-josefin font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    </div>
                </div>
                <div className="w-[20%] ">
                    <div className="bg-[#FFFFFF] drop-shadow-xl">
                    <div className="pt-[56px] px-[120px] pb-[27px] text-center">
                        <img src={img3} alt="" />
                    </div>
                    <div className="text-center">
                        <h4 className=' pb-[20px] text-[22px] text-[#151875] font-josefin font-semibold'>24/7 Support</h4>
                        <p className=' pb-[45px] w-[70%] mx-auto text-[16px] text-[rgba(26,11,91,0.4)] font-josefin font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    </div>
                </div>
                <div className="w-[20%] ">
                    <div className="bg-[#FFFFFF] drop-shadow-xl">
                    <div className="pt-[56px] px-[120px] pb-[27px] text-center">
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
import React from 'react'
import Container from './Container'

import unique2 from "../assets/unique.png"

const UniqueFeature = () => {
  return (
    <div className="bg-[#F1F0FF] z-50 mt-[150px]">
      <Container>
        <div className="flex justify-between">
          <div className="w-[50%]">
              <div className="pl-[20px]">
               <img className='w-[90%]' src={unique2} alt="" />
              </div>
          </div>
          <div className="w-[50%]">
            <div className="pt-[97px] w-[80%]">
              <h2 className='text-[35px] text-[#151875] font-josefin font-bold'>Unique Features Of leatest &
              Trending Poducts</h2>
            </div>
            <div className="flex pt-[29px] items-center">
              <div className="h-[10px] w-[10px] rounded-full bg-[#FB2E86]"></div>
              <div className="pl-[15px]">
                <h3 className='text-[16px] text-[#ACABC3] font-lato font-medium'>All frames constructed with hardwood solids and laminates</h3>
              </div>
            </div>
            <div className="flex pt-[29px] items-center">
              <div className="h-[10px] w-[10px] rounded-full bg-[#2B2BF5]"></div>
              <div className="pl-[15px]">
                <h3 className='text-[16px] w-[75%] text-[#ACABC3] font-lato font-medium'>Reinforced with double wood dowels, glue, screw - nails corner 
                blocks and machine nails</h3>
              </div>
            </div>
            <div className="flex pt-[29px] items-center">
              <div className="h-[10px] w-[10px] rounded-full bg-[#2BF5CC]"></div>
              <div className="pl-[15px]">
                <h3 className='text-[16px] text-[#ACABC3] font-lato font-medium'>Arms, backs and seats are structurally reinforced</h3>
              </div>
            </div>

            <div className="pt-[38px]">
              <div className="flex">
                <div className="">
                  <button className='px-[24px] py-[14px] bg-[#FB2E86] border-[2px] border-[#FB2E86] hover:bg-[#fff] hover:text-[#FB2E86] text-[#FFFFFF] duration-300 font-josefin font-semibold text-[17px] rounded-[5px]'>Add To Cart</button>
                </div>
                <div className="pl-[19px]">
                  <h4 className='text-[14px] text-[#151875] font-josefin font-semibold'>B&B Italian Sofa </h4>
                  <h6 className='text-[14px] text-[#151875] font-lato font-normal'>$32.00</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default UniqueFeature
import React from 'react'
import Container from './Container'
import unique2 from "../assets/unique.png"

const UniqueFeature = () => {
  return (
    <div className="bg-[#F1F0FF] z-50 lg:mt-[150px] mt-[50px] py-8">
      <Container>
        <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:mx-0 mx-[15px]">
          <div className="w-full lg:w-1/2">
            <div className="px-4 lg:px-0">
              <img className='w-full max-w-[90%] mx-auto' src={unique2} alt="Unique Feature" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="px-4 lg:px-0">
              <h2 className='text-3xl lg:text-[35px] leading-[120%] text-[#151875] font-josefin font-bold'>Unique Features Of Latest & Trending Products</h2>
            </div>
            <div className="flex items-center pt-6 px-4 lg:px-0">
              <div className="h-2 w-2 rounded-full bg-[#FB2E86]"></div>
              <div className="pl-3">
                <h3 className='text-sm lg:text-[16px] text-[#ACABC3] font-lato font-medium'>All frames constructed with hardwood solids and laminates</h3>
              </div>
            </div>
            <div className="flex items-center pt-6 px-4 lg:px-0">
              <div className="h-2 w-2 rounded-full bg-[#2B2BF5]"></div>
              <div className="pl-3">
                <h3 className='text-sm lg:text-[16px] text-[#ACABC3] font-lato font-medium'>Reinforced with double wood dowels, glue, screw-nails, corner blocks, and machine nails</h3>
              </div>
            </div>
            <div className="flex items-center pt-6 px-4 lg:px-0">
              <div className="h-2 w-2 rounded-full bg-[#2BF5CC]"></div>
              <div className="pl-3">
                <h3 className='text-sm lg:text-[16px] text-[#ACABC3] font-lato font-medium'>Arms, backs, and seats are structurally reinforced</h3>
              </div>
            </div>
            <div className="pt-8 px-4 lg:px-0">
              <div className="flex flex-col lg:flex-row items-center lg:items-start">
                <button className='px-6 py-3 bg-[#FB2E86] border-2 border-[#FB2E86] hover:bg-[#fff] hover:text-[#FB2E86] text-[#FFFFFF] duration-300 font-josefin font-semibold text-lg rounded-md'>Add To Cart</button>
                <div className="mt-4 lg:mt-0 lg:pl-6 text-center lg:text-left">
                  <h4 className='text-sm lg:text-[14px] text-[#151875] font-josefin font-semibold'>B&B Italian Sofa</h4>
                  <h6 className='text-sm lg:text-[14px] text-[#151875] font-lato font-normal'>$32.00</h6>
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

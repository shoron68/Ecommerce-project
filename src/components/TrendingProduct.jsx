import React from 'react'
import Container from './Container'
import img from "../assets/treand.png"
import img1 from "../assets/treand1.png"
import img2 from "../assets/treand2.png"

const TrendingProduct = () => {
  return (
    <Container>
          <div className="text-center pt-[132px] pb-[39px]">
              <h2 className='text-[42px] text-[#151875] font-josefin font-bold'>Trending Products</h2>
          </div>


          <div className="">
                    <div className="flex justify-between">
                     
                     <div className="w-[25%]">
                     <div className="h-[350px] w-[270px] bg-[#FFFFFF] drop-shadow-xl">
                          <div className="bg-[#F5F6F8] mx-auto w-[250px] h-[242px]">
                              <img className='mx-auto pt-[41px]' src={img} alt="" />
                          </div>
                          <div className="pt-[20px]">
                            <div className="text-center">
                                <h2 className='text-[16px] text-[#151875] font-lato font-bold'>Cantilever chair</h2>
                            </div>
                            <div className="text-center">
                                <h2 className='text-[14px] text-[#151875] font-lato font-bold'>$26.00 </h2>
                            </div>
                          </div>
                      </div>
                     </div>
                      

                      
                      <div className="w-[25%]">
                      <div className="h-[350px] w-[270px] bg-[#FFFFFF] drop-shadow-xl">
                          <div className="bg-[#F5F6F8] mx-auto w-[250px] h-[242px]">
                              <img className='mx-auto pt-[41px]' src={img1} alt="" />
                          </div>
                          <div className="pt-[20px]">
                            <div className="text-center">
                                <h2 className='text-[16px] text-[#151875] font-lato font-bold'>Cantilever chair</h2>
                            </div>
                            <div className="text-center">
                                <h2 className='text-[14px] text-[#151875] font-lato font-bold'>$26.00 </h2>
                            </div>
                          </div>
                      </div>
                      </div>


                      <div className="w-[25%]">
                      <div className="h-[350px] w-[270px] bg-[#FFFFFF] drop-shadow-xl">
                          <div className="bg-[#F5F6F8] mx-auto w-[250px] h-[242px]">
                              <img className='mx-auto pt-[41px]' src={img2} alt="" />
                          </div>
                          <div className="pt-[20px]">
                            <div className="text-center">
                                <h2 className='text-[16px] text-[#151875] font-lato font-bold'>Cantilever chair</h2>
                            </div>
                            <div className="text-center">
                                <h2 className='text-[14px] text-[#151875] font-lato font-bold'>$26.00 </h2>
                            </div>
                          </div>
                      </div>
                      </div>


                      <div className="w-[25%]">
                      <div className="h-[350px] w-[270px] bg-[#FFFFFF] drop-shadow-xl">
                          <div className="bg-[#F5F6F8] mx-auto w-[250px] h-[242px]">
                              <img className='mx-auto pt-[41px]' src={img} alt="" />
                          </div>
                          <div className="pt-[20px]">
                            <div className="text-center">
                                <h2 className='text-[16px] text-[#151875] font-lato font-bold'>Cantilever chair</h2>
                            </div>
                            <div className="text-center">
                                <h2 className='text-[14px] text-[#151875] font-lato font-bold'>$26.00 </h2>
                            </div>
                          </div>
                      </div>
                      </div>
                    </div>
          </div>
          <div>
            <div className="">
                <div className="w-[420px] h-[270px] bg-[#FFF6FB] ">
                    
                </div>
            </div>
          </div>
    </Container>
  )
}

export default TrendingProduct
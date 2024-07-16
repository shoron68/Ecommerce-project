import React from 'react'
import Container from './Container'
import img from "../assets/treand.png"
import img1 from "../assets/treand1.png"
import img2 from "../assets/treand2.png"
import clock from "../assets/tclock.png"
import Tdroir from "../assets/Tdroir.png"
import tchair1 from "../assets/tchair1.png"
import tchair2 from "../assets/tchair2.png"
import tchair3 from "../assets/tchair3.png"

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


            <div className="flex justify-between pt-[39px]">
                    <div className="w-[35%]">
                            <div className="w-[420px] h-[270px] bg-[#FFF6FB] relative">
                                <div className=" pt-[34px] pl-[25px]">
                                <h2 className='text-[24px] text-[#151875] font-josefin' > 23% off in all products</h2>
                                <button className='text-[16px] text-[#151875] font-lato hover:border-b-[1px] hover:text-[#FB2E86] hover:border-[#FB2E86] duration-300 ' >Shop Now</button>
                                </div>
                                <div className=" absolute bottom-0 right-0">
                                    <img src={clock} alt="" />
                                </div>
                            </div>

                    </div>
                            <div className="w-[420px] h-[270px] bg-[#EEEFFB] relative">
                                <div className=" pt-[34px] pl-[25px]">
                                <h2 className='text-[24px] text-[#151875] font-josefin' > 23% off in all products</h2>
                                <button className='text-[16px] text-[#151875] font-lato hover:border-b-[1px] hover:text-[#FB2E86] hover:border-[#FB2E86] duration-300 ' >Shop Now</button>
                                </div>
                                <div className=" absolute bottom-0 right-0">
                                    <img src={Tdroir} alt="" />
                                </div>
                            </div>
                    
                    
                    <div className="w-[30%]">
                        <div className="flex">
                            <div className="py-[2px] px-[22px] bg-[#F5F6F8]">
                                <img src={tchair1} alt="" />
                            </div>
                            <div className="pt-[15px] pl-[10px]">
                                <h3 className='text-[16px] text-[#151875] font-josefin font-semibold'>Executive Seat chair</h3>
                                <p className='text-[12px] text-[#151875] font-josefin font-normal' >$32.00</p>
                            </div>
                        </div>
                        <div className="flex py-[25px]">
                            <div className="py-[2px] px-[22px] bg-[#F5F6F8]">
                                <img src={tchair2} alt="" />
                            </div>
                            <div className="pt-[15px] pl-[10px]">
                                <h3 className='text-[16px] text-[#151875] font-josefin font-semibold'>Executive Seat chair</h3>
                                <p className='text-[12px] text-[#151875] font-josefin font-normal' >$32.00</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="py-[2px] px-[22px] bg-[#F5F6F8]">
                                <img src={tchair3} alt="" />
                            </div>
                            <div className="pt-[15px] pl-[10px]">
                                <h3 className='text-[16px] text-[#151875] font-josefin font-semibold'>Executive Seat chair</h3>
                                <p className='text-[12px] text-[#151875] font-josefin font-normal' >$32.00</p>
                            </div>
                        </div>
                    </div>
            </div>
        </Container>
    )
}

export default TrendingProduct
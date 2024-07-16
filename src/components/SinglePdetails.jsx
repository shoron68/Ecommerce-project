import React from 'react'
import Container from './Container'
import spimg1 from "../assets/spimg1.png"
import spimg2 from "../assets/spimg2.png"
import spimg3 from "../assets/spimg3.png"
import spimg4 from "../assets/spimg4.png"
import { FaRegHeart } from "react-icons/fa";
import { FaInstagram, FaFacebookF, FaTwitter, FaStar } from "react-icons/fa";

const SinglePdetails = () => {
  return (

    <>
    <section className="bg-[#F6F5FF] py-[100px] my-10">
            <Container>
                <div className="">
                    <h2 className="font-jose font-bold text-[36px] text-[#101750]">Shop Grid Default</h2>
                    <div className="">
                    <p className='text-[16px] text-[#000000] font-lato font-medium '>Home . Pages . <span className='text-[#FB2E86]'>Shop Grid Default</span></p>
                    </div>
                </div>
            </Container>
        </section>
    
    <Container>
                <div className="flex justify-around items-center mb-10 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-[15px]">
                    <div className="flex items-center justify-between w-[38%]">
                        <div className="pr-[20px]">
                            <img src={spimg1} alt="details" />
                            <img src={spimg2} alt="details" className="my-[10px]" />
                            <img src={spimg3} alt="details" />
                        </div>
                        <div className="">
                        <img src={spimg4} className="" alt="" />
                        </div>
                    </div>
                    <div className="w-[45%]">
                        <h4 className="font-jose font-semibold text-[36px] text-[#0D134E]">Playwood arm chair</h4>
                        <span className="flex items-center my-[15px]">
                            <FaStar className="mx-1 text-[#FFCC2E]" />
                            <FaStar className="mx-1 text-[#FFCC2E]" />
                            <FaStar className="mx-1 text-[#FFCC2E]" />
                            <FaStar className="mx-1 text-[#FFCC2E]" />
                            <FaStar className="mx-1 text-[#FFCC2E]" />
                        </span>
                        <div className="flex items-center">
                            <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">$32.00</p>
                            <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">$32.00</p>
                        </div>
                        <h5 className="font-jose font-semibold text-[16px] text-[#0D134E] my-[15px]">Color</h5>
                        <p className="font-jose font-semibold text-[16px] text-[#A9ACC6] w-[540px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                        <div className="flex items-center mt-5 mb-4 justify-center">
                            <button className="font-jose font-normal text-[16px] text-[#151875] mr-5">Add To cart</button>
                            <FaRegHeart />
                        </div>
                        <h5 className="font-jose font-semibold text-[16px] text-[#0D134E]">Categories:</h5>
                        <h5 className="font-jose font-semibold text-[16px] text-[#0D134E] my-[10px]">Tags</h5>
                        <div className="flex items-center">
                            <h5 className="font-jose font-semibold text-[16px] text-[#0D134E] mr-3">Share:</h5>
                            <div className="flex items-center w-[12%] justify-between">
                                <div className="p-1 bg-[#151875] hover:bg-[#FB2E86] ease-in-out duration-500 rounded-full">
                                    <FaFacebookF className="text-[#fff] w-[15px] h-[15px]" />
                                </div>
                                <div className="p-1 mx-[10px] bg-[#151875] hover:bg-[#FB2E86] ease-in-out duration-500 rounded-full">
                                    <FaInstagram className="text-[#fff] w-[15px] h-[15px]" />
                                </div>
                                <div className="p-1 bg-[#151875] hover:bg-[#FB2E86] ease-in-out duration-500 rounded-full">
                                    <FaTwitter className="text-[#fff] w-[15px] h-[15px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
    </>
  )
}

export default SinglePdetails
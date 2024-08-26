import React from 'react'
import Container from './Container'
import rimg1 from "../assets/rimg1.png"
import rimg2 from "../assets/rimg2.png"
import rimg3 from "../assets/rimg3.png"
import rimg4 from "../assets/rimg4.png"
import { IoCartOutline } from "react-icons/io5";
import { FaSearchPlus, FaStar } from "react-icons/fa";
import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const SingleRelatedProduct = () => {
    let [activeIcon, setActiveIcon] = useState('')
    return (
        <Container className='my-10'>
            <div className="lg:mx-0 mx-[15px]">
                <h2 className="font-josefin font-bold lg:text-[36px] text-[30px] text-[#101750]">Related Products</h2>
            </div>
            <div className="mt-10 flex justify-between flex-wrap items-center">


                <div className="lg:mx-0 mx-[15px]">
                    <div className="relative group">
                        <img src={rimg1} alt="related" />
                        <section className="group">
                            <div className="">
                                <div className="absolute bottom-[-10px] left-[20px] opacity-0 group-hover:overflow-hidden group-hover:bottom-[30px] group-hover:opacity-100 ease-in-out duration-700">
                                    <div onClick={() => setActiveIcon('IoCartOutline')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'IoCartOutline' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'IoCartOutline'}>
                                        <IoCartOutline />
                                    </div>
                                    <div onClick={() => setActiveIcon('FaHeart')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaHeart' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaHeart'}>
                                        <IoMdHeartEmpty />
                                    </div>
                                    <div onClick={() => setActiveIcon('FaSearchPlus')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaSearchPlus' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaSearchPlus'}>
                                        <FaSearchPlus />
                                    </div>
                                </div >
                            </div>
                        </section>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <div className="">
                            <h4 className="font-josefin font-semibold text-[16px] text-[#151875] my-[15px]">Mens Fashion Wear</h4>
                            <p className="font-josefin font-normal text-[13px] text-[#151875]">$43.00</p>
                        </div>
                        <span className="flex items-center">
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                        </span>
                    </div>
                </div>

                <div className="lg:mx-0 mx-[15px]">
                    <div className="relative group">
                        <img src={rimg2} alt="related" />
                        <section className="group">
                            <div className="">
                                <div className="absolute bottom-[-10px] left-[20px] opacity-0 group-hover:overflow-hidden group-hover:bottom-[30px] group-hover:opacity-100 ease-in-out duration-700">
                                    <div onClick={() => setActiveIcon('IoCartOutline')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'IoCartOutline' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'IoCartOutline'}>
                                        <IoCartOutline />
                                    </div>
                                    <div onClick={() => setActiveIcon('FaHeart')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaHeart' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaHeart'}>
                                        <IoMdHeartEmpty />
                                    </div>
                                    <div onClick={() => setActiveIcon('FaSearchPlus')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaSearchPlus' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaSearchPlus'}>
                                        <FaSearchPlus />
                                    </div>
                                </div >
                            </div>
                        </section>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <div className="">
                            <h4 className="font-josefin font-semibold text-[16px] text-[#151875] my-[15px]">Women’s Fashion</h4>
                            <p className="font-josefin font-normal text-[13px] text-[#151875]">$67.00</p>
                        </div>
                        <span className="flex items-center">
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                        </span>
                    </div>
                </div>

                <div className="lg:mx-0 mx-[15px]">
                    <div className="relative group">
                        <img src={rimg3} alt="related" />
                        <section className="group">
                            <div className="">
                                <div className="absolute bottom-[-10px] left-[20px] opacity-0 group-hover:overflow-hidden group-hover:bottom-[30px] group-hover:opacity-100 ease-in-out duration-700">
                                    <div onClick={() => setActiveIcon('IoCartOutline')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'IoCartOutline' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'IoCartOutline'}>
                                        <IoCartOutline />
                                    </div>
                                    <div onClick={() => setActiveIcon('FaHeart')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaHeart' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaHeart'}>
                                        <IoMdHeartEmpty />
                                    </div>
                                    <div onClick={() => setActiveIcon('FaSearchPlus')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaSearchPlus' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaSearchPlus'}>
                                        <FaSearchPlus />
                                    </div>
                                </div >
                            </div>
                        </section>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <div className="">
                            <h4 className="font-josefin font-semibold text-[16px] text-[#151875] my-[15px]">Wolx Dummy Fashion</h4>
                            <p className="font-josefin font-normal text-[13px] text-[#151875]">$67.00</p>
                        </div>
                        <span className="flex items-center">
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                        </span>
                    </div>
                </div>

                <div className="lg:mx-0 mx-[15px]">
                    <div className="relative group">
                        <img src={rimg4} alt="related" />
                        <section className="group">
                            <div className="">
                                <div className="absolute bottom-[-10px] left-[20px] opacity-0 group-hover:overflow-hidden group-hover:bottom-[30px] group-hover:opacity-100 ease-in-out duration-700">
                                    <div onClick={() => setActiveIcon('IoCartOutline')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'IoCartOutline' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'IoCartOutline'}>
                                        <IoCartOutline />
                                    </div>
                                    <div onClick={() => setActiveIcon('FaHeart')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaHeart' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaHeart'}>
                                        <IoMdHeartEmpty />
                                    </div>
                                    <div onClick={() => setActiveIcon('FaSearchPlus')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaSearchPlus' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaSearchPlus'}>
                                        <FaSearchPlus />
                                    </div>
                                </div >
                            </div>
                        </section>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <div className="">
                            <h4 className="font-josefin font-semibold text-[16px] text-[#151875] my-[15px]">Top Wall Digital Clock</h4>
                            <p className="font-josefin font-normal text-[13px] text-[#151875]">$51.00</p>
                        </div>
                        <span className="flex items-center">
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            <FaStar className="mx-[2px] text-[#FFCC2E]" />
                        </span>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default SingleRelatedProduct
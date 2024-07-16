import Container from './Container'
import React from 'react'
import { GoDotFill } from "react-icons/go";
import { FaStar, FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
import shop from "../assets/shopimg1.png"
import { IoCartOutline, IoGridSharp } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const ShopList = () => {
    let [activeIcon, setActiveIcon] = useState('')
  return (
    <div className="">
            <div className="bg-[#F6F5FF] pt-[96px] pb-[126px]">
                <Container>
                    <div className="">
                        <h2 className='text-[36px] text-[#101750] font-josefin font-bold'>Shop List</h2>
                    </div>
                    <div className="">
                        <p className='text-[16px] text-[#000000] font-lato font-medium '>Home . Pages . <span className='text-[#FB2E86]'>Shop List</span></p>
                    </div>
                </Container>
            </div>
            <Container>

                <div className=" pt-[124px] pb-[144px]">
                    <div className="flex justify-between items-center">
                        <div className="w-[30%]">
                            <h4 className="font-jose font-bold text-[22px] text-[#151875]">Ecommerce Acceories & Fashion item </h4>
                            <p className="font-lato font-normal text-[12px] text-[#8A8FB9]">About 9,620 results (0.62 seconds)</p>
                        </div>
                        <div className="w-[40%] flex justify-around items-center">
                            <div className="flex items-center">
                                <p className="font-lato font-normal text-[16px] text-[#3F509E] pr-2">Per Page:</p>
                                <div className="border-[1px] border-[#E7E6EF] h-[25px] w-[55px]"></div>
                            </div>
                            <div className="flex items-center">
                                <p className="font-lato font-normal text-[16px] text-[#3F509E]">Sort By:</p>
                                <form className=" w-[96px] pl-2 items-center">
                                    <select id="" className="border-[1px] border-[#E7E6EF] font-lato font-normal text-[#8A8FB9] text-[12px] pt-1 pb-1 ">
                                        <option selected>Default</option>
                                        <option>Best Match</option>
                                    </select>
                                </form>
                            </div>
                            <div className="flex items-center">
                                <p className="font-lato font-normal text-[16px] text-[#3F509E] pr-2">View:</p>
                                <FaList className="text-[#151875] mr-2" />
                                <IoGridSharp className="text-[#151875] active:bg-black" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="w-[20%]">
                        <div className="">
                            <h4 className="font-jose font-bold text-[20px] text-[#151875] underline decoration-[#000] decoration-2 underline-offset-[5px]">Product Brand</h4>
                            <ul>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#E5E0FC] bg-[#E5E0FC] checked:bg-[#603EFF]" />Coaster Furniture</li>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#E5E0FC] bg-[#E5E0FC] checked:bg-[#603EFF]" />Fusion Dot High Fashion</li>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#E5E0FC] bg-[#E5E0FC] checked:bg-[#603EFF]" />Unique Furnitture Restor</li>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#E5E0FC] bg-[#E5E0FC] checked:bg-[#603EFF]" />Dream Furnitture Flipping</li>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#E5E0FC] bg-[#E5E0FC] checked:bg-[#603EFF]" />Young Repurposed</li>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#E5E0FC] bg-[#E5E0FC] checked:bg-[#603EFF]" />Green DIY furniture</li>
                            </ul>
                        </div>
                        <div className="my-8">
                            <h4 className="font-jose font-bold text-[20px] text-[#151875] underline decoration-[#000] decoration-2 underline-offset-[5px]">Discount Offer</h4>
                            <ul>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />20% Cashback</li>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />5% Cashback Offer</li>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />25% Discount Offer</li>

                            </ul>
                        </div>
                        <div className="">
                            <h4 className="font-jose font-bold text-[20px] text-[#151875] underline decoration-[#000] decoration-2 underline-offset-[5px]">Rating Item</h4>
                            <ul>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2 flex"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFF6DA] bg-[#FFF6DA] checked:bg-[#FFCC2E]" />
                                    <span className="flex items-center">
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                    </span>
                                </li>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2 flex"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFF6DA] bg-[#FFF6DA] checked:bg-[#FFCC2E]" />
                                    <span className="flex items-center">
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                    </span>
                                </li>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2 flex"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFF6DA] bg-[#FFF6DA] checked:bg-[#FFCC2E]" />
                                    <span className="flex items-center">
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                    </span>
                                </li>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2 flex"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFF6DA] bg-[#FFF6DA] checked:bg-[#FFCC2E]" />
                                    <span className="flex items-center">
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                        <FaStar className="mx-1 text-[#FFCC2E]" />
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="my-8">
                            <h4 className="font-jose font-bold text-[20px] text-[#151875] underline decoration-[#000] decoration-2 underline-offset-[5px]">Categories</h4>
                            <ul>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />Prestashop</li>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />Magento</li>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />Bigcommerce</li>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />osCommerce</li>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />3dcart</li>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />Bags</li>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />Accessories</li>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />Jewellery</li>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />Watches</li>
                            </ul>
                        </div>
                        <div className="">
                            <h4 className="font-jose font-bold text-[20px] text-[#151875] underline decoration-[#000] decoration-2 underline-offset-[5px]">Price Filter</h4>
                            <ul>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />$0.00 - $150.00</li>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />$150.00 - $350.00</li>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />$150.00 - $504.00</li>
                                <li className="font-lato font-normal text-[16px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="mr-[10px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />$450.00 +</li>
                            </ul>
                        </div>
                        <div className="w-[70%] mt-8">
                            <h4 className="font-jose font-bold text-[20px] text-[#151875] underline decoration-[#000] decoration-2 underline-offset-[5px]">Filter By Color</h4>
                            <div className="flex flex-wrap">
                                <div className="flex items-center">
                                    <GoDotFill className="text-[#5E37FF]" />
                                    <h6 className="font-lato font-normal text-[15px] text-[#7E81A2] mx-1">Blue</h6>
                                </div>
                                <div className="flex items-center">
                                    <GoDotFill className="text-[#FF9437]" />
                                    <h6 className="font-lato font-normal text-[15px] text-[#7E81A2] mx-1">Orange</h6>
                                </div>
                                <div className="flex items-center">
                                    <GoDotFill className="text-[#FFBF95]" />
                                    <h6 className="font-lato font-normal text-[15px] text-[#7E81A2] mx-1">Brown</h6>
                                </div>
                                <div className="flex items-center">
                                    <GoDotFill className="text-[#33D221]" />
                                    <h6 className="font-lato font-normal text-[15px] text-[#7E81A2] mx-1">Green</h6>
                                </div>
                                <div className="flex items-center">
                                    <GoDotFill className="text-[#E248FF]" />
                                    <h6 className="font-lato font-normal text-[15px] text-[#7E81A2] mx-1">Purple</h6>
                                </div>
                                <div className="flex items-center">
                                    <GoDotFill className="text-[#26CBFF]" />
                                    <h6 className="font-lato font-normal text-[15px] text-[#7E81A2] mx-1">Sky</h6>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="w-[75%] flex flex-wrap justify-between items-center">
                        <div className="group my-[15px]">
                            <div className="relative p-[35px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                <Link to='/Product-Details'><img src={shop} alt="" className="h-[200px] w-[200px]" /></Link>
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
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold text-[18px] text-[#151875]">Vel elit euismod</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">$26.00 </p>
                                    <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">$42.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="group my-[15px]">
                            <div className="relative p-[35px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                <Link to='/Product-Details'><img src={shop} alt="" className="h-[200px] w-[200px]" /></Link>
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
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold text-[18px] text-[#151875]">Vel elit euismod</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">$26.00 </p>
                                    <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">$42.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="group my-[15px]">
                            <div className="relative p-[35px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                <Link to='/Product-Details'><img src={shop} alt="" className="h-[200px] w-[200px]" /></Link>
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
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold text-[18px] text-[#151875]">Vel elit euismod</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">$26.00 </p>
                                    <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">$42.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="group my-[15px]">
                            <div className="relative p-[35px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                <Link to='/Product-Details'><img src={shop} alt="" className="h-[200px] w-[200px]" /></Link>
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
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold text-[18px] text-[#151875]">Vel elit euismod</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">$26.00 </p>
                                    <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">$42.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="group my-[15px]">
                            <div className="relative p-[35px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                <Link to='/Product-Details'><img src={shop} alt="" className="h-[200px] w-[200px]" /></Link>
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
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold text-[18px] text-[#151875]">Vel elit euismod</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">$26.00 </p>
                                    <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">$42.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="group my-[15px]">
                            <div className="relative p-[35px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                <Link to='/Product-Details'><img src={shop} alt="" className="h-[200px] w-[200px]" /></Link>
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
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold text-[18px] text-[#151875]">Vel elit euismod</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">$26.00 </p>
                                    <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">$42.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="group my-[15px]">
                            <div className="relative p-[35px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                <Link to='/Product-Details'><img src={shop} alt="" className="h-[200px] w-[200px]" /></Link>
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
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold text-[18px] text-[#151875]">Vel elit euismod</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">$26.00 </p>
                                    <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">$42.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="group my-[15px]">
                            <div className="relative p-[35px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                <Link to='/Product-Details'><img src={shop} alt="" className="h-[200px] w-[200px]" /></Link>
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
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold text-[18px] text-[#151875]">Vel elit euismod</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">$26.00 </p>
                                    <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">$42.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="group my-[15px]">
                            <div className="relative p-[35px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                <Link to='/Product-Details'><img src={shop} alt="" className="h-[200px] w-[200px]" /></Link>
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
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold text-[18px] text-[#151875]">Vel elit euismod</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">$26.00 </p>
                                    <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">$42.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="group my-[15px]">
                            <div className="relative p-[35px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                <Link to='/Product-Details'><img src={shop} alt="" className="h-[200px] w-[200px]" /></Link>
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
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold text-[18px] text-[#151875]">Vel elit euismod</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">$26.00 </p>
                                    <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">$42.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="group my-[15px]">
                            <div className="relative p-[35px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                <Link to='/Product-Details'><img src={shop} alt="" className="h-[200px] w-[200px]" /></Link>
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
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold text-[18px] text-[#151875]">Vel elit euismod</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">$26.00 </p>
                                    <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">$42.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="group my-[15px]">
                            <div className="relative p-[35px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                <Link to='/Product-Details'><img src={shop} alt="" className="h-[200px] w-[200px]" /></Link>
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
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold text-[18px] text-[#151875]">Vel elit euismod</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">$26.00 </p>
                                    <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">$42.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="group my-[15px]">
                            <div className="relative p-[35px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                <Link to='/Product-Details'><img src={shop} alt="" className="h-[200px] w-[200px]" /></Link>
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
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold text-[18px] text-[#151875]">Vel elit euismod</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">$26.00 </p>
                                    <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">$42.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="group my-[15px]">
                            <div className="relative p-[35px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                <Link to='/Product-Details'><img src={shop} alt="" className="h-[200px] w-[200px]" /></Link>
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
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold text-[18px] text-[#151875]">Vel elit euismod</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">$26.00 </p>
                                    <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">$42.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="group my-[15px]">
                            <div className="relative p-[35px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                                <Link to='/Product-Details'><img src={shop} alt="" className="h-[200px] w-[200px]" /></Link>
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
                            </div>
                            <div className="text-center mt-[18px]">
                                <h5 className="font-jose font-bold text-[18px] text-[#151875]">Vel elit euismod</h5>
                                <div className="flex justify-center items-center">
                                    <GoDotFill className="text-[#DE9034]" />
                                    <GoDotFill className="text-[#EC42A2]" />
                                    <GoDotFill className="text-[#8568FF]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">$26.00 </p>
                                    <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">$42.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
  )
}

export default ShopList
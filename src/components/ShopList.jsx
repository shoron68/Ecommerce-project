import Container from './Container'
import React, { useContext,useEffect } from 'react'
import { GoDotFill } from "react-icons/go";
import { FaStar, FaList } from "react-icons/fa";
import {  IoGridSharp } from "react-icons/io5";
import { useState } from "react";
import { ApiData } from './apilinks/ContextApi';
import { Link } from 'react-router-dom';
import PostList from './pagination/PostList';
import PaginationArea from './pagination/PaginationArea';

const ShopList = () => {
    let [categoryFilter, setCategoryFilter] = useState([])
    let data = useContext(ApiData)
    let [pageStart,setPageStart] =useState(1)
    let [perPage,setPerPage] =useState(6)
    let lastpage = pageStart * perPage
    let fastpage = lastpage - perPage
    let Allpage = data.slice(fastpage , lastpage )
    let [category,setCategory]=useState([])


    
    let pageNumber = []
  for(let i = 0; i < Math.ceil(categoryFilter.length > 0 ? categoryFilter :data.length / perPage); i++){
    pageNumber.push(i)
}

  let paginate = (pageNumber) => {

    setPageStart(pageNumber + 1)
  }

  let next = () => {

    if (pageStart < pageNumber.length) {
      setPageStart((state) => state + 1)
    }

  }
  
  let prev = () => {

    if (pageStart > 1) {
      setPageStart((state) => state - 1)
    }

  }

  useEffect(()=>{
    setCategory([...new Set(data.map((item)=>item.category))])
  },[data])

  let handelCategory = (categoryitem)=>{
    let catFilter = data.filter((item)=>item.category == categoryitem)
    setCategoryFilter(catFilter)
  }

  
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
                                <Link to="/pages"><IoGridSharp className="text-[#151875] active:bg-black" /></Link>
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
                                {category.map((item) => (
                                    <li onClick={() => handelCategory(item)} className='ml-[10px] flex items-center uppercase justify-between text-[14px] text-[#767676] py-[10px] cursor-pointer'>{item}</li>
                                ))}
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



                    <div className="w-[75%]">
                    
                   <PostList Allpage={Allpage} categoryFilter={categoryFilter}/>
                   <div className="text-center pt-[50px]">
                        <PaginationArea pageNumber={pageNumber} paginate={paginate} pageStart={pageStart} next={next} prev={prev}/>
                        </div>
                
                    </div>
                </div>
            </Container>
        </div>
  )
}

export default ShopList
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { FaStar, FaList } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";


const PostList = ({ Allpage, categoryFilter,priceDispay }) => {
    let [activeIcon, setActiveIcon] = useState('')
    let [filter, setFilter] = useState([]);
    let [count, setCount] = useState(true);
    let [singleRating, setSingleRating] = useState([])


    let Reating = Array.from({ length: 5 }, (elm, index) => {
        let number = index + 0.5
        return (
            singleRating.rating > index + 1 ? <FaStar /> :

                singleRating.rating > number ? <FaStarHalfAlt /> :

                    <FaRegStar />
        )
    })

    useEffect(() => {
        let showFilter = categoryFilter.slice(0, 5);
        setFilter(showFilter);
    }, [categoryFilter]);

    let handelFilShow = () => {
        setFilter(categoryFilter);
        setCount(false);
    }

    let handelFilHide = () => {
        setFilter(categoryFilter.slice(0, 5));
        setCount(true);
    }

    return (
        <>
            {priceDispay.length > 0 ?
    <div className="">
        {priceDispay.map ((item)=>(


                <div className=" border-[1px]  lg:px-4 lg:py-4 my-[25px] shadow-sm ">
                        <div className=" lg:flex gap-x-[40px] items-centerlg:mb-0 lg:ml-0  mb-[5px] text-center lg:text-start">
                            <div className="">
                                <Link to={`/product-details/${item.id}`}> < img src={item.thumbnail} alt="" className="lg:h-[200px] lg:w-[200px] h-[150px] w-[150px] lg:mx-0 mx-auto " /></Link>
                            </div>
                            <div className=" lg:w-[50%] w-full">
                                <div className=" lg:flex  items-center lg:gap-x-[20px] lg:py-[8px]">
                                    <h3 className=' font-josefin font-medium text-[#111C85] text-[20px]'>Accumsan tincidunt</h3>
                                    <div className=" flex gap-x-[10px] lg:justify-start justify-center ">
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                    </div>
                                </div>
                                <div className=" flex lg:justify-start justify-center lg:gap-x-[20px] gap-x-[10px] items-center py-4">
                                    <h5 className=' font-hakto font-normal lg:text-[16px] text-[12px] text-[#111C85] hover:text-[#FF2AAA] duration-300'>$26.00</h5>
                                    <h5 className=' font-hakto font-normal lg:text-[16px] text-[12px] text-[#FF2AAA] hover:text-[#111C85] duration-300'>$52.00</h5>
                                    <div className=" flex lg:gap-x-[10px] gap-x-[4px] text-[#FFC416]">
                                        {Reating}
                                    </div>
                                </div>
                                <p className=' font-hakto font-light lg:text-[17px] text-[12px] text-[#9295AA]'>{item.description}</p>

                            </div>
                        </div>
                    </div>
        ))}
                </div>
            :
            
            categoryFilter.length > 0 ? 
                <div className="">
                    {categoryFilter.map((item)=>(


                <div className=" border-[1px]  lg:px-4 lg:py-4 my-[25px] shadow-sm ">
                        <div className=" lg:flex gap-x-[40px] items-centerlg:mb-0 lg:ml-0  mb-[5px] text-center lg:text-start">
                            <div className="">
                                <Link to={`/product-details/${item.id}`}> < img src={item.thumbnail} alt="" className="lg:h-[200px] lg:w-[200px] h-[150px] w-[150px] lg:mx-0 mx-auto " /></Link>
                            </div>
                            <div className=" lg:w-[50%] w-full">
                                <div className=" lg:flex  items-center lg:gap-x-[20px] lg:py-[8px]">
                                    <h3 className=' font-josefin font-medium text-[#111C85] text-[20px]'>Accumsan tincidunt</h3>
                                    <div className=" flex gap-x-[10px] lg:justify-start justify-center ">
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                    </div>
                                </div>
                                <div className=" flex lg:justify-start justify-center lg:gap-x-[20px] gap-x-[10px] items-center py-4">
                                    <h5 className=' font-hakto font-normal lg:text-[16px] text-[12px] text-[#111C85] hover:text-[#FF2AAA] duration-300'>$26.00</h5>
                                    <h5 className=' font-hakto font-normal lg:text-[16px] text-[12px] text-[#FF2AAA] hover:text-[#111C85] duration-300'>$52.00</h5>
                                    <div className=" flex lg:gap-x-[10px] gap-x-[4px] text-[#FFC416]">
                                        {Reating}
                                    </div>
                                </div>
                                <p className=' font-hakto font-light lg:text-[17px] text-[12px] text-[#9295AA]'>{item.description}</p>

                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            :
            <div className="">

                {Allpage.map((item,i) => (
                <div className="">
            <div className=" border-[1px]  lg:px-4 lg:py-4 my-[25px] shadow-sm ">
                    <div className=" lg:flex gap-x-[40px] items-centerlg:mb-0 lg:ml-0  mb-[5px] text-center lg:text-start">
                        <div className="">
                            <Link to={`/product-details/${item.id}`}> < img src={item.thumbnail} alt="" className="lg:h-[200px] lg:w-[200px] h-[150px] w-[150px] lg:mx-0 mx-auto " /></Link>
                        </div>
                        <div className=" lg:w-[50%] w-full">
                            <div className=" lg:flex  items-center lg:gap-x-[20px] lg:py-[8px]">
                                <h3 className=' font-josefin font-medium text-[#111C85] text-[20px]'>Accumsan tincidunt</h3>
                                <div className=" flex gap-x-[10px] lg:justify-start justify-center ">
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                </div>
                            </div>
                            <div className=" flex lg:justify-start justify-center lg:gap-x-[20px] gap-x-[10px] items-center py-4">
                                <h5 className=' font-hakto font-normal lg:text-[16px] text-[12px] text-[#111C85] hover:text-[#FF2AAA] duration-300'>$26.00</h5>
                                <h5 className=' font-hakto font-normal lg:text-[16px] text-[12px] text-[#FF2AAA] hover:text-[#111C85] duration-300'>$52.00</h5>
                                <div className=" flex lg:gap-x-[10px] gap-x-[4px] text-[#FFC416]">
                                    {Reating}
                                </div>
                            </div>
                            <p className=' font-hakto font-light lg:text-[17px] text-[12px] text-[#9295AA]'>{item.description}</p>

                        </div>
                    </div>
                </div>
            </div>
        ))}
            </div>
            
            
            }
        </>
    )
}

export default PostList
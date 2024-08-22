import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { IoCartOutline, IoGridSharp } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/productSlice';
import { useNavigate } from 'react-router-dom';

const Bal = ({ Allpage,categoryFilter,multi,priceDispay }) => {
    let [activeIcon, setActiveIcon] = useState('');
        let dispatch = useDispatch()
        let navigate = useNavigate()
        let [filterShow, setFilterShow] = useState([])
        let [count, setCount] = useState(true)
        useEffect(()=>{
            let filterVag = categoryFilter.slice(0,5)
            setFilterShow(filterVag)
        },[categoryFilter])

        let handleFilShow = () =>{
            setFilterShow(categoryFilter)
            setCount(false)
        }

        let handleAddTocart = (item)=>{
            dispatch(addToCart({...item, qun:1}))
        }
        let handleShowLess = ()=>{
            setCount(true)
            let filterVag = categoryFilter.slice(0,5)
            setFilterShow(filterVag)
        }

    
    return (
        <>
            {priceDispay.length > 0 ?
    <div className="">
    <div className="flex justify-between flex-wrap">
    {priceDispay.map((item ,i) => (
        <div key={i} className="group my-[15px]">
        <div className="relative p-[35px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
            <Link to={`/product-details/${item.id}`}>
                <img src={item.thumbnail} alt="" className="h-[200px] w-[200px]" />
            </Link>
            <div className="">
                <div className="absolute bottom-[-10px] left-[20px] opacity-0 group-hover:overflow-hidden group-hover:bottom-[30px] group-hover:opacity-100 ease-in-out duration-700">
                    <div onClick={()=>handleAddTocart(item)} className="">
                    <div onClick={() => setActiveIcon('IoCartOutline')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'IoCartOutline' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'IoCartOutline'}>
                        <IoCartOutline />
                    </div>
                    </div>
                    <div onClick={() => setActiveIcon('FaHeart')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaHeart' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaHeart'}>
                        <IoMdHeartEmpty />
                    </div>
                    <div onClick={() => setActiveIcon('FaSearchPlus')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaSearchPlus' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaSearchPlus'}>
                        <FaSearchPlus />
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center mt-[18px]">
            <h5 className="font-jose font-bold text-[18px] text-[#151875]">{item.title}</h5>
            <div className="flex justify-center items-center">
                <GoDotFill className="text-[#DE9034]" />
                <GoDotFill className="text-[#EC42A2]" />
                <GoDotFill className="text-[#8568FF]" />
            </div>
            <div className="flex items-center justify-center">
                <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">${item.price}</p>
                <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">${item.price}</p>
            </div>
        </div>
    </div>
))}
    </div>
    {count ? categoryFilter.length > 5 &&
    <div className="">
        <button onClick={handleFilShow} className=' h-[50px] text-[#151875] font-josefin font-normal w-[150px] border-[1px] border-[#FB2448] rounded-[5px] hover:bg-[#FB2448] hover:text-[#fff] duration-500 flex'>Show All</button>
    </div> 
    :
    categoryFilter.length > 5 &&
    <div className=" ">
        <button onClick={handleShowLess} className='h-[50px] text-[#151875] font-josefin font-normal w-[150px] border-[1px] border-[#FB2448] rounded-[5px] hover:bg-[#FB2448] hover:text-[#fff] duration-500'>Show All</button>
    </div>
    
    }
    </div>
            :
            
            categoryFilter.length > 0 ? 
                <div className="">
                    <div className="flex justify-between flex-wrap">
                    {filterShow.map((item,i) => (
                        <div key={i} className="group my-[15px]">
                        <div className="relative p-[35px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                            <Link to={`/product-details/${item.id}`}>
                                <img src={item.thumbnail} alt="" className="h-[200px] w-[200px]" />
                            </Link>
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
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-[18px]">
                            <h5 className="font-jose font-bold text-[18px] text-[#151875]">{item.title}</h5>
                            <div className="flex justify-center items-center">
                                <GoDotFill className="text-[#DE9034]" />
                                <GoDotFill className="text-[#EC42A2]" />
                                <GoDotFill className="text-[#8568FF]" />
                            </div>
                            <div className="flex items-center justify-center">
                                <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">${item.price}</p>
                                <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">${item.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
                    </div>
                    {count ? categoryFilter.length > 5 &&
    <div className="">
        <button onClick={handleFilShow} className='h-[50px] text-[#151875] font-josefin font-normal w-[150px] border-[1px] border-[#FB2448] rounded-[5px] hover:bg-[#FB2448] hover:text-[#fff] duration-500'>Show All</button>
    </div> 
    :
    categoryFilter.length > 5 &&
    <div className="">
        <button onClick={handleShowLess} className='h-[50px] text-[#151875] font-josefin font-normal w-[150px] border-[1px] border-[#FB2448] rounded-[5px] hover:bg-[#FB2448] hover:text-[#fff] duration-500'>Show All</button>
    </div>
    
    }
                </div>
            :
            <div className={`${multi == "activeMulti" ? "" : "flex justify-between flex-wrap"}`}>
                    {Allpage.map((item,i) => (
                    <div key={i} className="group my-[15px]">
                    <div className="relative p-[35px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                        <Link to={`/product-details/${item.id}`}>
                            <img src={item.thumbnail} alt="" className="h-[200px] w-[200px]" />
                        </Link>
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
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-[18px]">
                        <h5 className="font-jose font-bold text-[18px] text-[#151875]">{item.title}</h5>
                        <div className="flex justify-center items-center">
                            <GoDotFill className="text-[#DE9034]" />
                            <GoDotFill className="text-[#EC42A2]" />
                            <GoDotFill className="text-[#8568FF]" />
                        </div>
                        <div className="flex items-center justify-center">
                            <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">${item.price}</p>
                            <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">${item.price}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            
            }
        </>
        
        
        
    )
}

export default Bal
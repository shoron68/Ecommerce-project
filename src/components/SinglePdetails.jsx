import React, { useEffect, useState } from 'react'
import Container from './Container'
import { FaRegStar } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaTwitter, FaStar ,FaRegHeart,FaStarHalfAlt  } from "react-icons/fa";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './slice/productSlice';

const SinglePdetails = () => {
    let [singleProduct,setSingleProduct]=useState([])
    let productId=useParams()
    let dispatch =useDispatch()
    let dataId=()=>{
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
            setSingleProduct(response.data)
        })
    }
    useEffect(()=>{
        dataId()
    },[])

    let Reating = Array.from({length : 5},(elm , index)=>{
        let number = index + 0.5
        return(
            singleProduct.rating > index + 1  ?<FaStar/> : 

            singleProduct.rating > number  ? <FaStarHalfAlt />:

            <FaRegStar/>
        )
    })

    let handleAddToCart = (item) =>{
        dispatch(addToCart({...item,qun:1}))
    }
    
  return (

    <>
    <section className="bg-[#F6F5FF] py-[100px] my-10">
            <Container>
                <div className="">
                    <h2 className="font-josefin font-bold text-[36px] text-[#101750]">Shop Grid Default</h2>
                    <div className="">
                    <p className='text-[16px] text-[#000000] font-lato font-medium '>Home . Pages . <span className='text-[#FB2E86]'>Shop Grid Default</span></p>
                    </div>
                </div>
            </Container>
        </section>
    
    <Container>
                <div className="flex justify-around items-center mb-10 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-[15px]">

                    {singleProduct?.images?.map((item)=>(
                    <div className="flex items-center justify-between w-[38%]">
                        <div className="pr-[20px]">
                            <img src={item} alt="details" />
                            <img src={item} alt="details" className="my-[10px]" />
                            <img src={item} alt="details" />
                        </div>
                        <div className="">
                        <img src={item} className="" alt="" />
                        </div>
                    </div>

                    ))}


                    <div className="w-[45%]">
                        <h4 className="font-josefin font-semibold text-[36px] text-[#0D134E]">{singleProduct.title}</h4>
                        <span className="flex items-center my-[15px] ">
                            <p className='text-[#FFCC2E] flex gap-x-1'>
                            {Reating}                         
                            </p>
                        </span>
                        <div className="flex items-center">
                            <p className="font-josefin font-normal text-[14px] text-[#151875] pr-3">${singleProduct.price}</p>
                            <p className="font-josefin font-normal text-[14px] text-[#FB2448] line-through">$32.00</p>
                        </div>
                        <h5 className="font-josefin font-semibold text-[16px] text-[#0D134E] my-[15px]">Color</h5>
                        <p className="font-josefin font-semibold text-[16px] text-[#A9ACC6] w-[540px]">{singleProduct.description}</p>
                        <Link to="/shopping-cart">
                        
                        <div onClick={()=>handleAddToCart(singleProduct)} className=" flex items-center  relative mt-5 mb-4 group">
                            <button  className="font-josefin py-[15px] pl-[30px] pr-[40px] border-[1px] border-[#FB2448] text-[#0D134E] hover group-hover:bg-[#FB2448] group-hover:text-[#fff]  duration-300">Add To cart</button>
                            <FaRegHeart className='absolute top-50% left-[120px] group-hover:text-[#fff]  duration-300' />
                        </div>
                        </Link>



                        <h5 className="font-josefin font-semibold text-[16px] text-[#0D134E]">Categories: {singleProduct.category} </h5>
                        <h5 className="font-josefin font-semibold text-[16px] text-[#0D134E] my-[10px]">Tags: 
                             {singleProduct.tags}
                        </h5>
                        <div className="flex items-center">
                            <h5 className="font-josefin font-semibold text-[16px] text-[#0D134E] mr-3">Share:</h5>
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
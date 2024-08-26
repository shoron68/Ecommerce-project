import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";
import {  useDispatch, useSelector } from 'react-redux';
import { productDecrement, productIncrement, productRemove } from './slice/productSlice';


const CartItems = () => {
   let dispatch =useDispatch()
    let data = useSelector((state)=>state.product.cartItem)
 
    let handleIncrement = (item) =>{
        dispatch(productIncrement(item))
    }
    
    let handleDecrement = (item) =>{
        dispatch(productDecrement(item))
    }

    const {totalPrice, totatQuntity} = data.reduce((acc , item)=>{
        acc.totalPrice += item.price * item.qun
        acc.totatQuntity += item.qun
        return acc
    },{totalPrice:0 , totatQuntity:0})
    
    
  return (
    <div className=' py-[40px]'>
            <Container>
                <div className=" lg:flex justify-between lg:mx-0 mx-[15px]">
                    <div className="lg:w-[68%] w-full">
                        <div className=" flex justify-between">
                            <div className="w-[40%]">
                                <h3 className=' font-josefin font-medium text-[#1D3178] lg:text-[20px] text-[16px]'>Product</h3>
                            </div>
                            <div className="lg:w-[20%] w-[10%]">
                                <h3 className=' font-josefin font-medium text-[#1D3178] lg:text-[20px] text-[16px]'>Price</h3>
                            </div>
                            <div className="lg:w-[20%] w-[20%]">
                                <p className=' font-josefin font-medium text-[#1D3178] lg:text-[20px] text-[16px]'>Quantity</p>
                            </div>
                            <div className="w-[20%]">
                                <h3 className=' font-josefin font-medium text-[#1D3178] lg:text-[20px] text-[16px]'>Total</h3>
                            </div>
                        </div>



                            {data.map((item,i)=>(

                            <div key={i} className=" border-b-[2px] border-[#E1E1E4] pb-[30px]">
                                <div className=" flex justify-between items-center">
                                    <div className="w-[40%] ">
                                        <div className="flex lg:gap-x-[20px] py-3">
                                            <div className=" relative">
                                                <img src={item.thumbnail} className='lg:w-[83px] lg:h-[87px]' alt="" />
                                                <div onClick={()=>dispatch(productRemove(i))} className=" absolute lg:top-[-10px] top-0 right-[5px] lg:right-[-10px]">
                                                    <RxCrossCircled className=' lg:text-[25px] text-[#000000]' />
                                                </div>
                                            </div>
                                            <div className="">
                                                <h5 className=' font-josefin font-medium lg:text-[16px] text-[12px] text-[#000000]'>{item.title}</h5>
                                                <h6 className=' lg:block hidden font-josefin font-normal text-[#A1A8C1] text-[12px]'>Color Brown</h6>
                                                <p className=' lg:block hidden font-josefin font-normal text-[#A1A8C1] text-[12px]'>Size: XL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-[20%] w-[10%]">
                                        <div className="">
                                            <h3 className=' font-josefin font-medium text-[14px] text-[#15245E]'>{item.price}</h3>
                                        </div>
                                    </div>
                                    <div className="lg:w-[20%] w-[20%]">
                                        <div className=" border-[1px]  w-[90px] py-3 bg-[#BEBFC2] inline-block">
                                            <div className=" flex gap-x-[20px] items-center ">
                                                <div onClick={()=>handleDecrement(i)}  className="">
                                                    <FaMinus />
                                                </div>
                                                <h2 className=' font-josefin font-medium text-[14px] text-[#15245E]'>{item.qun}</h2>
                                                <div onClick={()=>handleIncrement(i)} className="">
                                                    <FaPlus />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-[20%] w-[20%] lg:ml-0 ml-[10px]">
                                        <h3 className=' font-josefin font-medium text-[14px] text-[#15245E]'>{item.price * item.qun}</h3>
                                    </div>
                                </div>
                            </div>

                            ))}
                        
                     


                        <div className=" flex justify-between py-[30px]">
                            <button className=' border-[1px]  bg-[#FB2E86] lg:px-4 lg:py-3 px-[20px] py-[10px] rounded-[5px] text-white hover:bg-[#19D16F] duration-300'>
                                <a className=' font-josefin font-medium lg:text-[16px] text-[14px]'>Update Curt</a>
                            </button>
                            <button className=' border-[1px]  bg-[#FB2E86] lg:px-4 lg:py-3 px-[20px] py-[10px] rounded-[5px] text-white hover:bg-[#19D16F] duration-300'>
                                <a className=' font-josefin font-medium text-[16px]'>Clear Curt</a>
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-[28%] w-full">
                        <div className=" text-center">
                            <h3 className=' font-josefin font-semibold text-[#1D3178] text-[20px]'>Cart Totals</h3>
                        </div>
                        <div className=" border-[1px] border-[#F4F4FC] bg-[#F4F4FC] px-[20px] py-[20px] rounded-[10px]">
                            <div className=" flex justify-between border-b-[1px] border-[#E8E6F1] py-3">
                                <h3 className='font-josefin font-medium text-[#1D3178] text-[16px]'>Subtotals:</h3>
                                <h3 className=' font-josefin font-medium text-[#1D3178] text-[16px]'>£{totalPrice}</h3>
                            </div>
                            <div className=" flex justify-between border-b-[1px] border-[#E8E6F1] py-3 mt-[40px]">
                                <h3 className=' font-josefin font-medium text-[#1D3178] text-[16px]'>Total Quntity:</h3>
                                <h3 className=' font-josefin font-medium text-[#1D3178] text-[16px]'>{totatQuntity}</h3>
                            </div>
                            <div className=" flex justify-between border-b-[1px] border-[#E8E6F1] py-3 mt-[40px]">
                                <h3 className=' font-josefin font-medium text-[#1D3178] text-[16px]'>Totals:</h3>
                                <h3 className=' font-josefin font-medium text-[#1D3178] text-[16px]'>£{totalPrice * totatQuntity}</h3>
                            </div>
                            <div className=" flex gap-x-[20px] items-center my-[30px]">
                                <FaCheckCircle className=' text-[#19D16F] text-[18px]' />
                                <p className=' font-josefin font-medium text-[#8A91AB] text-[12px]'>Shipping & taxes calculated at checkout</p>
                            </div>
                            <Link to = '/checkout'>
                            <button className=' border-[1px] py-[15px] bg-[#19D16F] w-full'>
                                <a className=' font-josefin font-medium text-[#FFFFFF] text-[16px]'>Proceed To Checkout</a>
                            </button>
                            </Link>
                        </div>
                        <div className="">
                        <div className=" pt-[20px] text-center">
                                <h3 className=' font-josefin font-bold text-[#1D3178] text-[20px]'>Calculate Shopping</h3>
                            </div>
                        </div>

                        <div className="border-[1px] border-[#F4F4FC] bg-[#F4F4FC] px-[20px] py-[20px] rounded-[10px] mt-[30px]">
                            
                            <div className="">
                                <div className=" border-b-[1px] border-[#C7CEE4] mt-[15px]">
                                    <input type="text" placeholder='Bangladesh' className=' w-full h-[40px] font-josefin font-light text-[#C5CBE3] text-[14px] bg-[#F4F4FC] outline-none border-none' />
                                </div>
                                <div className=" border-b-[1px] border-[#C7CEE4] mt-[15px]">
                                    <input type="text" placeholder='Mirpur Dhaka - 1200' className=' w-full h-[40px] font-josefin font-light text-[#C5CBE3] text-[14px] bg-[#F4F4FC] outline-none border-none' />
                                </div>
                                <div className=" border-b-[1px] border-[#C7CEE4] mt-[15px]">
                                    <input type="text" placeholder='Postal Code' className=' w-full h-[40px] font-josefin font-light text-[#C5CBE3] text-[14px] bg-[#F4F4FC] outline-none border-none' />
                                </div>
                            </div>
                            <button className=' border-[1px]  bg-[#FB2E86] px-4 py-3 rounded-[5px] text-white hover:bg-[#19D16F] duration-300 mt-[30px]'>
                                <a className=' font-josefin font-medium text-[17px]'>Calculate Shiping</a>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
  )
}

export default CartItems
import React from 'react'
import Container from './Container'
import { FaCheck } from "react-icons/fa";
import checklist from '../assets/checklist.png'
import Clock from '../assets/clock.png'
import Sponsor from './Sponsor';
import { Link } from 'react-router-dom';

const OrderCompleteBody = () => {
  return (
    <div className=' lg:py-[100px]'>
            <Container>
                <div className="  justify-center text-center lg:ml-[250px] lg:mx-0 mx-[60px] ">
                    <div className="lg:w-[80%] w-full">
                        <div className=" border-[1px] border-[#F6F5FF] py-[50px] px-[30px] relative">
                            <h1 className=' lg:ml-[350px] lg:static flex justify-end'><FaCheck className=' text-[35px] text-[#FF1788]' /></h1>
                            <h3 className=' font-josefin font-bold text-[#101750] text-[30px] lg:text-[35px]'>Your Order Is Completed! </h3>
                            <p className=' font-josefin font-normal text-[#8D92A7] text-[16px]'>Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.</p>
                            <div className="">
                            <Link to="/pages">
                            <button className=' border-[1px] border-[#FF1788] bg-[#FF1788] px-[15px] py-[10px]  rounded-[5px] mt-[15px] font-josefin font-medium text-[16px] text-white'>
                                Continue Shopping
                            </button>
                            </Link>
                            </div>
                            <div className=" absolute bottom-[-40px] right-[-40px]">
                                <img src={checklist} alt="" />
                            </div>
                            <div className=" absolute left-[-50px] top-[30px]">
                                <img src={Clock} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                
            </Container>
            <Sponsor/>
        </div>
  )
}

export default OrderCompleteBody
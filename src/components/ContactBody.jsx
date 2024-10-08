import React from 'react'
import Container from '../components/Container'
import { IoIosContact } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import contactimg from "../assets/contactimg.png"

const ContactBody = () => {
  return (
    <>
    <div className=' bg-[#F6F5FF] py-[90px]'>
    <Container>
        <div className="lg:mx-0 mx-[15px]">
            <h2 className=' font-josefin font-bold text-[#101750] text-[35px]'>Contact Us</h2>
               <h2><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home . Pages </span>
             <span className=' font-hakto font-medium text-[16px] text-[#FB2E86]  '>. Contact Us</span></h2>
        </div>
    </Container>
</div>


<div className=" lg:py-[120px] py-[20px]">
        <Container>
            <div className=" lg:flex justify-between lg:mx-0 mx-[15px]">
                <div className="lg:w-[50%] w-full">
                    <div className="">
                        <h3 className=' font-josefin font-bold text-[36px] text-[#151875]'>Information About us</h3>
                        <p className=' font-lato font-normal text-[#8A8FB9] text-[16px] pt-[13px] lg:w-[550px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                         <div className=" flex gap-x-[20px] lg:pt-[70px] pt-[20px]">
                            <div className=" border-[1px] bg-[#5625DF] h-[25px] w-[25px] rounded-[50%]"></div>
                            <div className=" border-[1px] bg-[#FF27B7] h-[25px] w-[25px] rounded-[50%]"></div>
                            <div className=" border-[1px] bg-[#37DAF3] h-[25px] w-[25px] rounded-[50%]"></div>
                         </div>
                    </div>
                </div>
                <div className="lg:w-[50%] lg:pt-0 pt-[20px]">
                    <h3 className=' font-josefin font-bold lg:text-[36px] text-[30px] text-[#151875]'>Contact Way</h3>
                    <div className=" flex justify-between pb-[20px] pt-[26px] ">
                        <div className=" flex gap-x-[20px]">
                          <div className=" bg-[#5625DF] lg:h-[45px] lg:w-[45px] h-[27px] w-[30px] rounded-[50%]"></div>
                            <div className="">
                                <h6 className=' font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]'>Tel: 877-67-88-99</h6>
                                <h6 className=' font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]'>E-Mail: shop@store.com</h6>
                            </div>
                        </div>
                        <div className=" flex gap-x-[20px]">
                          <div className="  bg-[#FB2E86]  lg:h-[45px] lg:w-[45px] h-[27px] w-[30px] rounded-[50%]"></div>
                            <div className="">
                                <h6 className=' font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]'>Tel: 877-67-88-99</h6>
                                <h6 className=' font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]'>E-Mail: shop@store.com</h6>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-between py-[20px]">
                        <div className=" flex gap-x-[20px]">
                          <div className="  bg-[#1BE982] lg:h-[45px] lg:w-[45px] h-[27px] w-[30px] rounded-[50%]"></div>
                            <div className="">
                                <h6 className=' font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]'>Tel: 877-67-88-99</h6>
                                <h6 className=' font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]'>E-Mail: shop@store.com</h6>
                            </div>
                        </div>
                        <div className=" flex gap-x-[20px]">
                          <div className="  bg-[#FFB265] lg:h-[45px] lg:w-[45px] h-[27px] w-[30px] rounded-[50%]"></div>
                            <div className="">
                                <h6 className=' font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]'>Tel: 877-67-88-99</h6>
                                <h6 className=' font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]'>E-Mail: shop@store.com</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className=" lg:mt-[176px] mt-[50px] lg:mx-0 mx-[15px]">
            <div className=" lg:flex justify-between ">
                <div className="lg:w-[43%] w-full">
                    <h3 className=' font-josefin font-bold lg:text-[36px] text-[30px] text-[#151875]'>Get In Touch</h3>
                    <p className=' font-lato font-light lg:text-[16px] text-[14px] text-[#8A8FB9] lg:pt-[20px] lg:pb-[46px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br />  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                    <div className="">
                    <div className=" flex justify-between py-[30px]">
                                    <div className="w-[48%] relative">
                                        <input type="text" placeholder='Your Name*' className=' font-hakto font-light text-[#8A8FB9] border-[#8A8FB9] rounded-[4px] text-[13px] pl-[30px] w-full h-[50px] outline-none border-[1px]' />
                                        <div className=" absolute top-[16px] left-[10px]">
                                            <IoIosContact className='text-[#8A8FB9]' />
                                        </div>
                                    </div>
                                    <div className="w-[48%] relative">
                                        <input type="text" placeholder='Write Your Email*' className=' font-hakto font-light text-[#8A8FB9] text-[13px] pl-[30px] w-full h-[50px] outline-none border-[1px] border-[#8A8FB9] rounded-[4px]' />
                                        <div className=" absolute top-[16px] left-[10px]">
                                            <IoMdMail className='text-[#8A8FB9]' />
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <textarea name="" placeholder='Type Your Messege*' className='text-[14px] w-full h-[166px] border-[#8A8FB9] text-[#8A8FB9] rounded-[4px] font-lato' id=""></textarea>
                                </div>
                                

                                <button className=' border-[1px] bg-[#FB2E86] border-[#FB2E86]  w-full py-[15px]  rounded-[5px] my-[20px] font-josefin font-semibold text-[17px] text-[#FFFFFF] hover:bg-[#fff] hover:text-[#FB2E86] duration-300'>
                                    Continue Shipping
                                </button>
                    </div>
                </div>
                <div className="lg:w-[50%]">
                    <img src={contactimg} alt="" />
                </div>
            </div>
            </div>
        </Container>
    </div>
    </>
  )
}

export default ContactBody
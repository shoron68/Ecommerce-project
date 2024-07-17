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
        <div className="">
            <h2 className=' font-josefin font-bold text-[#101750] text-[35px]'>Contact Us</h2>
               <h2><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home . Pages </span>
             <span className=' font-hakto font-medium text-[16px] text-[#FB2E86]  '>. Contact Us</span></h2>
        </div>
    </Container>
</div>


<div className=" py-[120px]">
        <Container>
            <div className=" flex justify-between">
                <div className="w-[50%]">
                    <div className="">
                        <h3 className=' font-josefin font-bold text-[36px] text-[#151875]'>Information About us</h3>
                        <p className=' font-lato font-normal text-[#8A8FB9] text-[16px] pt-[13px] w-[550px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                         <div className=" flex gap-x-[20px] pt-[70px]">
                            <div className=" border-[1px] bg-[#5625DF] h-[25px] w-[25px] rounded-[50%]"></div>
                            <div className=" border-[1px] bg-[#FF27B7] h-[25px] w-[25px] rounded-[50%]"></div>
                            <div className=" border-[1px] bg-[#37DAF3] h-[25px] w-[25px] rounded-[50%]"></div>
                         </div>
                    </div>
                </div>
                <div className="w-[50%]">
                    <h3 className=' font-josefin font-bold text-[36px] text-[#151875]'>Contact Way</h3>
                    <div className=" flex justify-between pb-[20px] pt-[26px] ">
                        <div className=" flex gap-x-[20px]">
                          <div className=" border-[1px] bg-[#5625DF] h-[45px] w-[45px] rounded-[50%]"></div>
                            <div className="">
                                <h6 className=' font-lato font-normal text-[16px] text-[#8A8FB9]'>Tel: 877-67-88-99</h6>
                                <h6 className=' font-lato font-normal text-[16px] text-[#8A8FB9]'>E-Mail: shop@store.com</h6>
                            </div>
                        </div>
                        <div className=" flex gap-x-[20px]">
                          <div className=" border-[1px] bg-[#FB2E86] h-[45px] w-[45px] rounded-[50%]"></div>
                            <div className="">
                                <h6 className=' font-lato font-normal text-[16px] text-[#8A8FB9]'>Tel: 877-67-88-99</h6>
                                <h6 className=' font-lato font-normal text-[16px] text-[#8A8FB9]'>E-Mail: shop@store.com</h6>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-between py-[20px]">
                        <div className=" flex gap-x-[20px]">
                          <div className=" border-[1px] bg-[#1BE982] h-[45px] w-[45px] rounded-[50%]"></div>
                            <div className="">
                                <h6 className=' font-lato font-normal text-[16px] text-[#8A8FB9]'>Tel: 877-67-88-99</h6>
                                <h6 className=' font-lato font-normal text-[16px] text-[#8A8FB9]'>E-Mail: shop@store.com</h6>
                            </div>
                        </div>
                        <div className=" flex gap-x-[20px]">
                          <div className=" border-[1px] bg-[#FFB265] h-[45px] w-[45px] rounded-[50%]"></div>
                            <div className="">
                                <h6 className=' font-lato font-normal text-[16px] text-[#8A8FB9]'>Tel: 877-67-88-99</h6>
                                <h6 className=' font-lato font-normal text-[16px] text-[#8A8FB9]'>E-Mail: shop@store.com</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-[176px]">
            <div className=" flex justify-between ">
                <div className="w-[43%]">
                    <h3 className=' font-josefin font-bold text-[36px] text-[#151875]'>Get In Touch</h3>
                    <p className=' font-lato font-light text-[16px] text-[#8A8FB9] pt-[20px] pb-[46px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br />  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
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
                <div className="w-[50%]">
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
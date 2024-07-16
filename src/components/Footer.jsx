import React from 'react'
import Container from './Container'
import { TiSocialFacebook,TiSocialTwitter  } from "react-icons/ti";
import { BiLogoInstagramAlt } from "react-icons/bi";





const Footer = () => {
  return (
    <div className="bg-[#EEEFFB] mt-[115px]">
        <Container>
            <div className="flex pt-[95px] pb-[101px]">
                <div className="w-[37%]">
                    <div className="">
                        <h2 className='text-[38px] text-[#000000] font-josefin font-bold'>Hekto</h2>
                    </div>
                    <div className="pt-[31px]">
                        <input type="email" className='border-none bg-[#FFFFFF] font-lato font-normal text-[16px] text-[#8A8FB9] h-[44px] rounded-tl-[5px] rounded-bl-[5px] ' placeholder='Enter Email Address' />
                        <button className='text-[16px] font-lato text-[#fff] bg-[#FB2E86] h-[44px] w-[135px] leading-[39px] rounded-tr-[5px] rounded-br-[5px] '>Sign Up</button>
                    </div>
                    <div className="pt-[25px]">
                        <h4 className='text-[16px] text-[#8A8FB9] font-lato font-normal '>Contact Info</h4>
                        <p className='text-[16px] text-[#8A8FB9] font-lato font-normal '>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    </div>
                </div>

                <div className="w-[20%]">
                    <div className="pb-[42px]">
                        <h3 className='text-[22px] text-[#000000] font-lato font-semibold' >Catagories</h3>
                    </div>
                    <div className="">
                        <ul>
                            <li className='text-[16px] text-[#8A8FB9] font-lato font-normal'><a href="">Laptops & Computers</a></li>
                            <li className='py-[21px] text-[16px] text-[#8A8FB9] font-lato font-normal'><a href="">Cameras & Photography</a></li>
                            <li className='text-[16px] text-[#8A8FB9] font-lato font-normal'><a href="">Smart Phones & Tablets</a></li>
                            <li className='py-[21px] text-[16px] text-[#8A8FB9] font-lato font-normal'><a href="">Video Games & Consoles</a></li>
                            <li className='text-[16px] text-[#8A8FB9] font-lato font-normal'><a href="">Waterproof Headphones</a></li>
                        </ul>
                    </div>
                </div>


                <div className="w-[20%]">
                    <div className="pb-[42px]">
                        <h3 className='text-[22px] text-[#000000] font-lato font-semibold' >Customer Care</h3>
                    </div>
                    <div className="">
                        <ul>
                            <li className='text-[16px] text-[#8A8FB9] font-lato font-normal'><a href="">My Account</a></li>
                            <li className='py-[21px] text-[16px] text-[#8A8FB9] font-lato font-normal'><a href="">Discount</a></li>
                            <li className='text-[16px] text-[#8A8FB9] font-lato font-normal'><a href="">Returns</a></li>
                            <li className='py-[21px] text-[16px] text-[#8A8FB9] font-lato font-normal'><a href="">Orders History</a></li>
                            <li className='text-[16px] text-[#8A8FB9] font-lato font-normal'><a href="">Order Tracking</a></li>
                        </ul>
                    </div>
                </div>

                <div className="w-[20%]">
                    <div className="pb-[42px]">
                        <h3 className='text-[22px] text-[#000000] font-lato font-semibold' >Pages</h3>
                    </div>
                    <div className="">
                        <ul>
                            <li className='text-[16px] text-[#8A8FB9] font-lato font-normal'><a href="">Blog</a></li>
                            <li className='py-[21px] text-[16px] text-[#8A8FB9] font-lato font-normal'><a href="">Browse the Shop</a></li>
                            <li className='text-[16px] text-[#8A8FB9] font-lato font-normal'><a href="">Category</a></li>
                            <li className='py-[21px] text-[16px] text-[#8A8FB9] font-lato font-normal'><a href="">Pre-Built Pages</a></li>
                            <li className='text-[16px] text-[#8A8FB9] font-lato font-normal'><a href="">Visual Composer Elements</a></li>
                            <li className='pt-[21px] text-[16px] text-[#8A8FB9] font-lato font-normal'><a href="">WooCommerce Pages</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
        <div className="bg-[#E7E4F8]">
            <Container>
            <div className="flex justify-around items-center py-[17px]">
                <div className="">
                    <h3 className='text-[16px] text-[#8A8FB9] font-lato font-normal'>©Webecy - All Rights Reserved</h3>
                </div>
                <div className="flex">
                    <TiSocialFacebook className='text-[20px] h-[20px] w-[20px] bg-[#151875] rounded-[50%] text-[#fff]'/>
                    <BiLogoInstagramAlt className='text-[26px] h-[20px] w-[20px] bg-[#151875] rounded-[50%] text-[#fff] mx-[10px]' />
                    <TiSocialTwitter className='text-[16px] h-[20px] w-[20px] bg-[#151875] rounded-[50%] text-[#fff]'/>
                </div>
            </div>
            </Container>
        </div>
    </div>
  )
}

export default Footer
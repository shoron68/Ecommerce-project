import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { MdOutlineZoomIn } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ApiData } from './apilinks/ContextApi';


const FeatureProduct = () => {

 let data=useContext(ApiData)


  const settings = {
    dots: true,
    infinite: true,
    arrows:false,
    autoplay:true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,


    appendDots: dots => (
      <div
        style={{

          borderRadius: "10px",
          paddingTop: "0px",
          marginTop:"0px"
        }}
      >
        <ul style={{ marginTop: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          color: "transparent",
          height:"4px",
          redius:"10px",
          width:"20px",
          background:"#FEBAD7",
          borderRadius:"30px",
        }}
      >
        {i + 1}
      </div>
    )
    
  };

  return (
    <Container className={`py-[128px]`}>
      <div className=" text-center pt-[129px]">
        <h2 className='text-[42px] text-[#1A0B5B] font-josefin font-bold'>Featured Products</h2>
      </div>



      <Slider {...settings}>
      
      {data.map((item,i)=>(
        <div key={i} className=" flex w-[25%]  group">
          <div className="drop-shadow-xl">
            <div className="w-[270px]  h-[361px] relative overflow-hidden">
              <div className=" pt-[46px] -z-10 pb-[12px] pl-[40px] pr-[52px] bg-[#F6F7FB]">
                <img className='h-[200px]' src={item.thumbnail} alt="" />
              </div>

              <div className=" absolute opacity-0 bottom-[140px] duration-500 z-10  group-hover:opacity-100  right-[50%] translate-x-[50%] text-[12px] text-[#fff] font-josefin font-medium py-[8px] px-[13px] bg-[#08D15F] rounded-[3px]">
                <button >View Details</button>
              </div>



              <div className="text-center z-50 bg-[#fff] group-hover:bg-[#2F1AC4] duration-500 ease-in-out pt-[15px] pb-[17px]">

                <h4 className='text-[18px] text-[#FB2E86] font-josefin font-bold group-hover:text-[#fff] duration-500'>{item.title}</h4>
                <div className=" flex justify-center">
                  <div className="h-[5px] w-[16px] bg-[#05E6B7] rounded-[10px] "></div>
                  <div className="h-[5px] mx-[5px] w-[16px] bg-[#F701A8] rounded-[10px]"></div>
                  <div className="h-[5px] w-[16px] bg-[#FFEAC1] rounded-[10px]"></div>
                </div>
                <h3 className='text-[14px]  text-[#151875] font-josefin font-normal group-hover:text-[#fff] duration-500'>Code - Y523201</h3>
                <span className=' pt-[10px] text-[14px] text-[#151875] font-josefin font-normal group-hover:text-[#fff] duration-500'>$42.00</span>
              </div>

              <div className="absolute top-[11px] w-full  left-[-80px]  group-hover:left-[11px] duration-500 flex   ">
                <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-5px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  < BsCart className='mx-auto translate-y-[5px]' />
                </div>
                <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  <CiHeart className='mx-auto translate-y-[5px]' />
                </div>
                <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  <MdOutlineZoomIn className='mx-auto translate-y-[5px]' />
                </div>

              </div>

            </div>
          </div>
        </div>

      ))}
      



        {/* <div className=" flex w-[25%]  group">
          <div className="drop-shadow-xl">
            <div className="w-[270px]  h-[361px] relative overflow-hidden">
              <div className=" pt-[46px] -z-10 pb-[12px] pl-[40px] pr-[52px] bg-[#F6F7FB]">
                <img className='' src={chair} alt="" />
              </div>

              <div className=" absolute opacity-0 bottom-[140px] duration-500 z-10  group-hover:opacity-100  right-[50%] translate-x-[50%] text-[12px] text-[#fff] font-josefin font-medium py-[8px] px-[13px] bg-[#08D15F] rounded-[3px]">
                <button >View Details</button>
              </div>



              <div className="text-center z-50 bg-[#fff] group-hover:bg-[#2F1AC4] duration-500 ease-in-out pt-[15px] pb-[17px]">

                <h4 className='text-[18px] text-[#FB2E86] font-josefin font-bold group-hover:text-[#fff] duration-500'>Cantilever chair</h4>
                <div className=" flex justify-center">
                  <div className="h-[5px] w-[16px] bg-[#05E6B7] rounded-[10px] "></div>
                  <div className="h-[5px] mx-[5px] w-[16px] bg-[#F701A8] rounded-[10px]"></div>
                  <div className="h-[5px] w-[16px] bg-[#FFEAC1] rounded-[10px]"></div>
                </div>
                <h3 className='text-[14px]  text-[#151875] font-josefin font-normal group-hover:text-[#fff] duration-500'>Code - Y523201</h3>
                <span className=' pt-[10px] text-[14px] text-[#151875] font-josefin font-normal group-hover:text-[#fff] duration-500'>$42.00</span>
              </div>

              <div className="absolute top-[11px] w-full  left-[-80px]  group-hover:left-[11px] duration-500 flex   ">
                <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-5px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  < BsCart className='mx-auto translate-y-[5px]' />
                </div>
                <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  <CiHeart className='mx-auto translate-y-[5px]' />
                </div>
                <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  <MdOutlineZoomIn className='mx-auto translate-y-[5px]' />
                </div>

              </div>

            </div>
          </div>
        </div>
        


        <div className=" flex w-[25%]  group">
          <div className="drop-shadow-xl">
            <div className="w-[270px]  h-[361px] relative overflow-hidden">
              <div className=" pt-[46px] -z-10 pb-[12px] pl-[40px] pr-[52px] bg-[#F6F7FB]">
                <img className='' src={chair} alt="" />
              </div>

              <div className=" absolute opacity-0 bottom-[140px] duration-500 z-10  group-hover:opacity-100  right-[50%] translate-x-[50%] text-[12px] text-[#fff] font-josefin font-medium py-[8px] px-[13px] bg-[#08D15F] rounded-[3px]">
                <button >View Details</button>
              </div>



              <div className="text-center z-50 bg-[#fff] group-hover:bg-[#2F1AC4] duration-500 ease-in-out pt-[15px] pb-[17px]">

                <h4 className='text-[18px] text-[#FB2E86] font-josefin font-bold group-hover:text-[#fff] duration-500'>Cantilever chair</h4>
                <div className=" flex justify-center">
                  <div className="h-[5px] w-[16px] bg-[#05E6B7] rounded-[10px] "></div>
                  <div className="h-[5px] mx-[5px] w-[16px] bg-[#F701A8] rounded-[10px]"></div>
                  <div className="h-[5px] w-[16px] bg-[#FFEAC1] rounded-[10px]"></div>
                </div>
                <h3 className='text-[14px]  text-[#151875] font-josefin font-normal group-hover:text-[#fff] duration-500'>Code - Y523201</h3>
                <span className=' pt-[10px] text-[14px] text-[#151875] font-josefin font-normal group-hover:text-[#fff] duration-500'>$42.00</span>
              </div>

              <div className="absolute top-[11px] w-full  left-[-80px]  group-hover:left-[11px] duration-500 flex   ">
                <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-5px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  < BsCart className='mx-auto translate-y-[5px]' />
                </div>
                <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  <CiHeart className='mx-auto translate-y-[5px]' />
                </div>
                <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  <MdOutlineZoomIn className='mx-auto translate-y-[5px]' />
                </div>

              </div>

            </div>
          </div>
        </div>



        <div className=" flex w-[25%]  group">
          <div className="drop-shadow-xl">
            <div className="w-[270px]  h-[361px] relative overflow-hidden">
              <div className=" pt-[46px] -z-10 pb-[12px] pl-[40px] pr-[52px] bg-[#F6F7FB]">
                <img className='' src={chair} alt="" />
              </div>

              <div className=" absolute opacity-0 bottom-[140px] duration-500 z-10  group-hover:opacity-100  right-[50%] translate-x-[50%] text-[12px] text-[#fff] font-josefin font-medium py-[8px] px-[13px] bg-[#08D15F] rounded-[3px]">
                <button >View Details</button>
              </div>



              <div className="text-center z-50 bg-[#fff] group-hover:bg-[#2F1AC4] duration-500 ease-in-out pt-[15px] pb-[17px]">

                <h4 className='text-[18px] text-[#FB2E86] font-josefin font-bold group-hover:text-[#fff] duration-500'>Cantilever chair</h4>
                <div className=" flex justify-center">
                  <div className="h-[5px] w-[16px] bg-[#05E6B7] rounded-[10px] "></div>
                  <div className="h-[5px] mx-[5px] w-[16px] bg-[#F701A8] rounded-[10px]"></div>
                  <div className="h-[5px] w-[16px] bg-[#FFEAC1] rounded-[10px]"></div>
                </div>
                <h3 className='text-[14px]  text-[#151875] font-josefin font-normal group-hover:text-[#fff] duration-500'>Code - Y523201</h3>
                <span className=' pt-[10px] text-[14px] text-[#151875] font-josefin font-normal group-hover:text-[#fff] duration-500'>$42.00</span>
              </div>

              <div className="absolute top-[11px] w-full  left-[-80px]  group-hover:left-[11px] duration-500 flex   ">
                <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-5px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  < BsCart className='mx-auto translate-y-[5px]' />
                </div>
                <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  <CiHeart className='mx-auto translate-y-[5px]' />
                </div>
                <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  <MdOutlineZoomIn className='mx-auto translate-y-[5px]' />
                </div>

              </div>

            </div>
          </div>
        </div> */}

      </Slider>






    </Container>
  )
}

export default FeatureProduct
import React from 'react'
import Container from './Container'
import topchair from "../assets/topchair.png"
import topchair2 from "../assets/topchair2.png"
import topchair3 from "../assets/topchair3.png"
import topchair4 from "../assets/topchair4.png"
import Slider from "react-slick";

const TopCategory = () => {
    const settings = {
        dots: true,
        arrows:false,
        autoplay:true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
    
    
        appendDots: dots => (
          <div
            style={{
                    marginBottom:"-40px"
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div className='active_button'
            style={{
              color: "transparent",
              height:"10px",
              redius:"10px",
              width:"10px",
              background:"#FEBAD7",
              borderRadius:"100%",
            }}
          >
            {i + 1}
          </div>
        )
        
      };
  return (
    <Container>
        <div className=" text-center">
            <h2 className='text-[42px] text-[#151875] font-josefin font-bold '>Top Categories</h2>
        </div>

        <div className=" pt-[56px]">
        <Slider {...settings} className='w-[99%] mx-auto'>
        
        <div className=" relative lg:w-[25%]  w-full ">
           <div className="h-[255px] w-[258px] lg:mx-0 mx-auto  bg-[#9877E7] rounded-full  "></div>
            <div className="h-[255px] w-[258px] mx-auto  bg-[#F6F7FB] rounded-full absolute top-0 lg:left-0 left-[50%] lg:translate-x-0 translate-x-[-50%] lg:hover:top-[-5px] lg:hover:left-[5px] hover:top-[-5px] hover:left-[51.5%] duration-300 ease-in-out  ">
                <div className="flex justify-center pt-[30px]">
                <img src={topchair} alt="" />
                </div>
            <div className=" absolute left-[50%] translate-x-[-50%] bottom-[17px]">
                <button className='text-[12px] font-josefin font-medium text-[#fff] py-[9px] px-[18px] bg-[#08D15F] rounded-[5px] hover:bg-[#fff] hover:text-[#08D15F] duration-300 ease-in-out '>View Shop</button>
            </div>
            </div>
            <div className=" pt-[27px] text-center md:mx-[10px] lg:mr-[90px] ">
                <h4 className='text-[20px] text-[#151875] font-josefin font-normal'>Mini LCW Chair</h4>
                <p className='text-[16px] text-[#151875] font-josefin font-normal pt-[13px]'>$56.00</p>
            </div>
        </div> 
        <div className=" relative lg:w-[25%]  w-full ">
           <div className="h-[255px] w-[258px] lg:mx-0 mx-auto  bg-[#9877E7] rounded-full  "></div>
            <div className="h-[255px] w-[258px] mx-auto  bg-[#F6F7FB] rounded-full absolute top-0 lg:left-0 left-[50%] lg:translate-x-0 translate-x-[-50%] lg:hover:top-[-5px] lg:hover:left-[5px] hover:top-[-5px] hover:left-[51.5%] duration-300 ease-in-out  ">
                <div className="flex justify-center pt-[30px]">
                <img src={topchair} alt="" />
                </div>
            <div className=" absolute left-[50%] translate-x-[-50%] bottom-[17px]">
                <button className='text-[12px] font-josefin font-medium text-[#fff] py-[9px] px-[18px] bg-[#08D15F] rounded-[5px] hover:bg-[#fff] hover:text-[#08D15F] duration-300 ease-in-out '>View Shop</button>
            </div>
            </div>
            <div className=" pt-[27px] text-center md:mx-[10px] lg:mr-[90px] ">
                <h4 className='text-[20px] text-[#151875] font-josefin font-normal'>Mini LCW Chair</h4>
                <p className='text-[16px] text-[#151875] font-josefin font-normal pt-[13px]'>$56.00</p>
            </div>
        </div> 
        <div className=" relative lg:w-[25%]  w-full ">
           <div className="h-[255px] w-[258px] lg:mx-0 mx-auto  bg-[#9877E7] rounded-full  "></div>
            <div className="h-[255px] w-[258px] mx-auto  bg-[#F6F7FB] rounded-full absolute top-0 lg:left-0 left-[50%] lg:translate-x-0 translate-x-[-50%] lg:hover:top-[-5px] lg:hover:left-[5px] hover:top-[-5px] hover:left-[51.5%] duration-300 ease-in-out  ">
                <div className="flex justify-center pt-[30px]">
                <img src={topchair} alt="" />
                </div>
            <div className=" absolute left-[50%] translate-x-[-50%] bottom-[17px]">
                <button className='text-[12px] font-josefin font-medium text-[#fff] py-[9px] px-[18px] bg-[#08D15F] rounded-[5px] hover:bg-[#fff] hover:text-[#08D15F] duration-300 ease-in-out '>View Shop</button>
            </div>
            </div>
            <div className=" pt-[27px] text-center md:mx-[10px] lg:mr-[90px] ">
                <h4 className='text-[20px] text-[#151875] font-josefin font-normal'>Mini LCW Chair</h4>
                <p className='text-[16px] text-[#151875] font-josefin font-normal pt-[13px]'>$56.00</p>
            </div>
        </div> 
        <div className=" relative lg:w-[25%]  w-full ">
           <div className="h-[255px] w-[258px] lg:mx-0 mx-auto  bg-[#9877E7] rounded-full  "></div>
            <div className="h-[255px] w-[258px] mx-auto  bg-[#F6F7FB] rounded-full absolute top-0 lg:left-0 left-[50%] lg:translate-x-0 translate-x-[-50%] lg:hover:top-[-5px] lg:hover:left-[5px] hover:top-[-5px] hover:left-[51.5%] duration-300 ease-in-out  ">
                <div className="flex justify-center pt-[30px]">
                <img src={topchair} alt="" />
                </div>
            <div className=" absolute left-[50%] translate-x-[-50%] bottom-[17px]">
                <button className='text-[12px] font-josefin font-medium text-[#fff] py-[9px] px-[18px] bg-[#08D15F] rounded-[5px] hover:bg-[#fff] hover:text-[#08D15F] duration-300 ease-in-out '>View Shop</button>
            </div>
            </div>
            <div className=" pt-[27px] text-center md:mx-[10px] lg:mr-[90px] ">
                <h4 className='text-[20px] text-[#151875] font-josefin font-normal'>Mini LCW Chair</h4>
                <p className='text-[16px] text-[#151875] font-josefin font-normal pt-[13px]'>$56.00</p>
            </div>
        </div> 
        <div className=" relative lg:w-[25%]  w-full ">
           <div className="h-[255px] w-[258px] lg:mx-0 mx-auto  bg-[#9877E7] rounded-full  "></div>
            <div className="h-[255px] w-[258px] mx-auto  bg-[#F6F7FB] rounded-full absolute top-0 lg:left-0 left-[50%] lg:translate-x-0 translate-x-[-50%] lg:hover:top-[-5px] lg:hover:left-[5px] hover:top-[-5px] hover:left-[51.5%] duration-300 ease-in-out  ">
                <div className="flex justify-center pt-[30px]">
                <img src={topchair} alt="" />
                </div>
            <div className=" absolute left-[50%] translate-x-[-50%] bottom-[17px]">
                <button className='text-[12px] font-josefin font-medium text-[#fff] py-[9px] px-[18px] bg-[#08D15F] rounded-[5px] hover:bg-[#fff] hover:text-[#08D15F] duration-300 ease-in-out '>View Shop</button>
            </div>
            </div>
            <div className=" pt-[27px] text-center md:mx-[10px] lg:mr-[90px] ">
                <h4 className='text-[20px] text-[#151875] font-josefin font-normal'>Mini LCW Chair</h4>
                <p className='text-[16px] text-[#151875] font-josefin font-normal pt-[13px]'>$56.00</p>
            </div>
        </div> 
        <div className=" relative lg:w-[25%]  w-full ">
           <div className="h-[255px] w-[258px] lg:mx-0 mx-auto  bg-[#9877E7] rounded-full  "></div>
            <div className="h-[255px] w-[258px] mx-auto  bg-[#F6F7FB] rounded-full absolute top-0 lg:left-0 left-[50%] lg:translate-x-0 translate-x-[-50%] lg:hover:top-[-5px] lg:hover:left-[5px] hover:top-[-5px] hover:left-[51.5%] duration-300 ease-in-out  ">
                <div className="flex justify-center pt-[30px]">
                <img src={topchair} alt="" />
                </div>
            <div className=" absolute left-[50%] translate-x-[-50%] bottom-[17px]">
                <button className='text-[12px] font-josefin font-medium text-[#fff] py-[9px] px-[18px] bg-[#08D15F] rounded-[5px] hover:bg-[#fff] hover:text-[#08D15F] duration-300 ease-in-out '>View Shop</button>
            </div>
            </div>
            <div className=" pt-[27px] text-center md:mx-[10px] lg:mr-[90px] ">
                <h4 className='text-[20px] text-[#151875] font-josefin font-normal'>Mini LCW Chair</h4>
                <p className='text-[16px] text-[#151875] font-josefin font-normal pt-[13px]'>$56.00</p>
            </div>
        </div> 


    </Slider>
        </div>
    </Container>
  )
}

export default TopCategory
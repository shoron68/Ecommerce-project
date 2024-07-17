import React from 'react'
import Container from './Container'
import aboutimg from "../assets/aboutimg.png"
import img1 from "../assets/shopex1.png"
import img2 from "../assets/shopex2.png"
import img3 from "../assets/shopex3.png"
import img4 from "../assets/shopex4.png"
import aboutimg2 from "../assets/aboutimg2.png"

const AboutMain = () => {
  return (
    <>
    <div className=' bg-[#F6F5FF] py-[90px]'>
    <Container>
        <div className="">
            <h2 className=' font-josefin font-bold text-[#101750] text-[35px]'>About Us</h2>
               <h2><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home . Pages </span>
             <span className=' font-hakto font-medium text-[16px] text-[#FB2E86]  '>. About Us</span></h2>
        </div>
    </Container>
</div>


<div className=' py-[50px]'>
        <Container>
          <div className=" flex justify-between items-center">
            <div className="w-[50%]">
              <div className="bg-[#2B3CAB] w-[555px] h-[390px] rounded-[7px] relative group">
                <div className=" w-[555px] h-[390px] absolute group-hover:top-[-20px] group-hover:right-[-20px] duration-300">
                <img src={aboutimg} alt="" />
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <div className=" py-[30px]">
                <h3 className=' font-josefin font-bold text-[#151875] text-[35px]'>Know About Our Ecomerce
                  <br /> Business, History</h3>
                <p className=' font-lato font-light text-[16px] text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
                  amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>

                <div className="pt-[90px]">
                <button className=' border-[1px] border-[#FB2E86] px-[15px] py-[10px] bg-[#FB2E86] rounded-[5px] font-lato font-medium text-[#fff] hover:text-[#FB2E86] hover:bg-[#fff] duration-300 ease-in-out'>
                  Contact us
                </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      

      <Container>
        <div className="py-[58px]">
            <h2 className='text-[42px] text-center text-[#000000] font-josefin font-bold'>Our Features</h2>
        </div>

        <div className="">
            <div className="flex justify-between">
                <div className="w-[20%] ">
                    <div className="bg-[#FFFFFF] drop-shadow-xl">
                    <div className="pt-[56px] px-[120px] pb-[27px] text-center">
                        <img src={img1}  alt="" />
                    </div>
                    <div className="text-center">
                        <h4 className=' pb-[20px] text-[22px] text-[#151875] font-josefin font-semibold'>Free Delivery</h4>
                        <p className=' pb-[45px] w-[70%] mx-auto text-[16px] text-[rgba(26,11,91,0.4)] font-josefin font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    </div>
                </div>
                <div className="w-[20%] ">
                    <div className="bg-[#FFFFFF] drop-shadow-xl">
                    <div className="pt-[56px] px-[120px] pb-[27px] text-center">
                        <img src={img2} className="" alt="" />
                    </div>
                    <div className="text-center">
                        <h4 className=' pb-[20px] text-[22px] text-[#151875] font-josefin font-semibold'>100% Cash Back</h4>
                        <p className=' pb-[45px] w-[70%] mx-auto text-[16px] text-[rgba(26,11,91,0.4)] font-josefin font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    </div>
                </div>
                <div className="w-[20%] ">
                    <div className="bg-[#FFFFFF] drop-shadow-xl">
                    <div className="pt-[56px] px-[120px] pb-[27px] text-center">
                        <img src={img3} alt="" />
                    </div>
                    <div className="text-center">
                        <h4 className=' pb-[20px] text-[22px] text-[#151875] font-josefin font-semibold'>Quality Product</h4>
                        <p className=' pb-[45px] w-[70%] mx-auto text-[16px] text-[rgba(26,11,91,0.4)] font-josefin font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    </div>
                </div>
                <div className="w-[20%] ">
                    <div className="bg-[#FFFFFF] drop-shadow-xl">
                    <div className="pt-[56px] px-[120px] pb-[27px] text-center">
                        <img src={img4} alt="" />
                    </div>
                    <div className="text-center">
                        <h4 className=' pb-[20px] text-[22px] text-[#151875] font-josefin font-semibold'>24/7 Support</h4>
                        <p className=' pb-[45px] w-[70%] mx-auto text-[16px] text-[rgba(26,11,91,0.4)] font-josefin font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>


    <div className=" bg-[#FBFBFF] py-[50px]">
        <Container>
          <div className="">
            <h3 className=' font-josefin font-bold text-[43px] text-[#000000] text-center pb-[64px]'>Our Client Say!</h3>
            <div className=" flex justify-center gap-x-[20px] pb-[20px] ">
              <div className="hover:mt-[-10px] duration-300">
                <img src={aboutimg2} alt="" />
              </div>
              <div className="hover:mt-[-10px] duration-300">
                <img src={aboutimg2} alt="" />
              </div>
              <div className=" hover:mt-[-10px] duration-300">
                <img src={aboutimg2} alt="" />
              </div>
            </div>
            <div className=" text-center w-[50%] mx-auto">
              <h4 className=' font-lato font-semibold text-[#151875] text-[22px]'>Selina Gomez</h4>
              <p className=' font-lato font-semibold leading-[25.6px] text-[#8A8FB9] text-[10px] '>Ceo At Webecy Digital</p>

              <h3 className=' font-lato font-bold text-[16px] leading-[25.6px] text-[#8A8FB9] pt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel
                dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</h3>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default AboutMain
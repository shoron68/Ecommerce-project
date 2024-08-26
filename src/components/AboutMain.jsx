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
      {/* About Us Section */}
      <div className='bg-[#F6F5FF] py-[40px] md:py-[90px]'>
        <Container>
          <div className='lg:mx-0 mx-[15px]'>
            <h2 className='font-josefin font-bold text-[#101750] text-[25px] md:text-[35px]'>About Us</h2>
            <h2>
              <span className='font-hakto font-medium text-[14px] md:text-[16px] text-[#101750] hover:text-[#FB2E86] duration-300'>Home . Pages </span>
              <span className='font-hakto font-medium text-[14px] md:text-[16px] text-[#FB2E86]'>. About Us</span>
            </h2>
          </div>
        </Container>
      </div>

      {/* About Section */}
      <div className='py-[30px] md:py-[50px] lg:mx-0 mx-[15px]'>
        <Container>
          <div className="lg:flex justify-between items-center">
            <div className="w-full lg:w-[50%] relative">
              <div className="bg-[#2B3CAB] w-full h-[270px] md:w-[555px] md:h-[390px] rounded-[7px]"></div>
              <div className="absolute top-0 left-0 hover:top-[-10px] md:hover:top-[-20px] hover:left-[10px] md:hover:left-[20px] duration-300">
                <img src={aboutimg} className="w-full h-full" alt="" />
              </div>
            </div>

            <div className="w-full lg:w-[50%] mt-8 lg:mt-0">
              <div className="py-[20px] md:py-[30px]">
                <h3 className='font-josefin font-bold text-[#151875] text-[25px] md:text-[35px]'>
                  Know About Our Ecomerce <br /> Business, History
                </h3>
                <p className='font-lato font-light text-[14px] md:text-[16px] text-[#8A8FB9]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
                  amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                </p>

                <div className="pt-[40px] md:pt-[90px] lg:text-start text-center">
                  <button className='border-[1px] border-[#FB2E86] px-[15px] py-[10px] bg-[#FB2E86] rounded-[5px] font-lato font-medium text-[#fff] hover:text-[#FB2E86] hover:bg-[#fff] duration-300 ease-in-out'>
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Our Features Section */}
      <Container>
        <div className="py-[30px] md:py-[58px]">
          <h2 className='text-[30px] md:text-[42px] text-center text-[#000000] font-josefin font-bold'>Our Features</h2>
        </div>

        <div className="">
            <div className="lg:flex justify-between lg:mx-0 mx-[15px]">
                <div className="w-full lg:w-[24%] mt-[20px] lg:mt-0">
                    <div className="bg-[#FFFFFF] drop-shadow-xl">
                    <div className="lg:pt-[56px] pt-[10px] lg:px-[120px]  lg:pb-[27px] pb-[10px] text-center">
                        <img src={img1} className='h-[70px] w-[70px] mx-auto'  alt="" />
                    </div>
                    <div className="text-center">
                        <h4 className=' pb-[20px] text-[22px] text-[#151875] font-josefin font-semibold'>24/7 Support</h4>
                        <p className=' pb-[45px] w-[70%] mx-auto text-[16px] text-[rgba(26,11,91,0.4)] font-josefin font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    </div>
                </div>
                <div className="w-full lg:w-[24%] mt-[20px] lg:mt-0 ">
                    <div className="bg-[#FFFFFF] drop-shadow-xl">
                    <div className="lg:pt-[56px] pt-[10px] lg:px-[120px] lg:pb-[27px] pb-[10px] text-center">
                        <img src={img2}className='h-[70px] w-[70px] mx-auto' alt="" />
                    </div>
                    <div className="text-center">
                        <h4 className=' pb-[20px] text-[22px] text-[#151875] font-josefin font-semibold'>24/7 Support</h4>
                        <p className=' pb-[45px] w-[70%] mx-auto text-[16px] text-[rgba(26,11,91,0.4)] font-josefin font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div> 
                    </div>
                </div>
                <div className="w-full lg:w-[24%] mt-[20px] lg:mt-0 ">
                    <div className="bg-[#FFFFFF] drop-shadow-xl">
                    <div className="lg:pt-[56px] pt-[10px] lg:px-[120px] lg:pb-[27px] pb-[10px] text-center">
                        <img src={img3} className='h-[70px] w-[70px] mx-auto' alt="" />
                    </div>
                    <div className="text-center">
                        <h4 className=' pb-[20px] text-[22px] text-[#151875] font-josefin font-semibold'>24/7 Support</h4>
                        <p className=' pb-[45px] w-[70%] mx-auto text-[16px] text-[rgba(26,11,91,0.4)] font-josefin font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    </div>
                </div>
                <div className="w-full lg:w-[24%] mt-[20px] lg:mt-0 ">
                    <div className="bg-[#FFFFFF] drop-shadow-xl">
                    <div className="lg:pt-[56px] pt-[10px] lg:px-[120px]  lg:pb-[27px] pb-[10px] text-center">
                        <img src={img4} className='h-[70px] w-[70px] mx-auto' alt="" />
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

      {/* Client Say Section */}
      <div className="bg-[#FBFBFF] py-[30px] md:py-[50px] ">
      <Container>
          <div className="lg:mx-0 mx-[15px]">
            <h3 className=' font-josefin font-bold lg:text-[43px] text-[30px] text-[#000000] text-center lg:pb-[64px] pb-[30px]'>Our Client Say!</h3>
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
            <div className=" text-center lg:w-[50%] w-full mx-auto">
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

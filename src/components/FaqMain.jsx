import React from 'react'
import Container from './Container'
import Sponsor from './Sponsor'

const FaqMain = () => {
  return (
    <>
    <div className=' bg-[#F6F5FF] py-[90px]'>
    <Container>
        <div className="lg:mx-0 mx-[15px]">
            <h2 className=' font-josefin font-bold text-[#101750] text-[35px]'>FAQ</h2>
               <h2><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home . Pages </span>
             <span className=' font-josefin font-medium text-[16px] text-[#FB2E86] hover:text-[#FB2E86] hover:bg-[#fff]'>. FAQ</span></h2>
        </div>
    </Container>
</div>



<div className=" py-[50px]">
                <Container>
                    <div className=" lg:flex ">
                        <div className="lg:w-[45%] w-[96%] lg:mx-0 mx-[15px]">
                            <div className="">
                                <h3 className=' font-josefin font-bold text-[#1D3178] text-[35px] pb-[20px] lg:pb-[64px]'>Generel Information</h3>
                                <h6 className=' font-josefin font-bold text-[17px] text-[#1D3178] pb-[15px]'>Eu dictumst cum at sed euismood condimentum?</h6>
                                <p className=' font-lato font-light text-[16px] text-[#A1ABCC] pb-[20px] lg:pb-[66px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>

                                <h6 className=' font-josefin font-bold text-[17px] text-[#1D3178] pb-[15px]'>Eu dictumst cum at sed euismood condimentum?</h6>
                                <p className=' font-lato font-light text-[16px] text-[#A1ABCC]  pb-[20px] lg:pb-[66px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>


                                <h6 className=' font-josefin font-bold text-[17px] text-[#1D3178] pb-[15px]'>Eu dictumst cum at sed euismood condimentum?</h6>
                                <p className=' font-lato font-light text-[16px] text-[#A1ABCC]  pb-[20px] lg:pb-[66px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>

                                <h6 className=' font-josefin font-bold text-[17px] text-[#1D3178] lg:pt-[20px]'>Eu dictumst cum at sed euismood condimentum?</h6>
                                <p className=' font-lato font-light text-[16px] text-[#A1ABCC]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>

                            </div>
                        </div>



                        <div className="lg:w-[45%] w-full lg:ml-[106px]  ">

                            <div className="bg-[#F8F8FD] lg:w-[566px] w-full  lg:pl-[60px]">
                                <div className="lg:mx-0 mx-[15px]">


                            <h3 className=' font-josefin font-bold text-[#1D3178] text-[24px] lg:pt-[66px] pt-[30px] lg:pb-[144px] pb-[50px]'>Ask a Question</h3>


                            <input type="text" className=' font-lato font-light text-[#8990B1] text-[16px] lg:w-[80%] w-full h-[50px] border-[1px] outline-none mb-[35px] border-[#8990B1] rounded-[4px]' placeholder='Your Name*' />


                            <input type="text" className=' font-lato font-light text-[#8990B1] text-[16px] lg:w-[80%] w-full  h-[50px] border-[1px] outline-none mb-[45px] border-[#8990B1] rounded-[4px]' placeholder='Subject*' />

                            <textarea name="" placeholder='Type Your Message*' className='text-[#8990B1] font-lato font-normal text-[16px] h-[197px] lg:w-[80%] w-full  border-[#8990B1] rounded-[4px]' id=""></textarea>

                            <div className="pt-[50px] pb-[62px]">
                                    <button className='text-[16px] leading-[30px] font-josefin font-semiBold bg-[#FB2E86] text-[#fff] border-[1px] border-[#FB2E86] rounded-[4px] py-[9px] px-[40px] hover:text-[#FB2E86] hover:bg-[#fff] duration-300 ease-in-out '>Send Mail</button>
                                </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <Sponsor/>
                </Container>
            </div>
    
    </>
  )
}

export default FaqMain
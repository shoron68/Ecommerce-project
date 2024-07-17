import React from 'react'
import Container from './Container'
import Sponsor from './Sponsor'

const FaqMain = () => {
  return (
    <>
    <div className=' bg-[#F6F5FF] py-[90px]'>
    <Container>
        <div className="">
            <h2 className=' font-josefin font-bold text-[#101750] text-[35px]'>FAQ</h2>
               <h2><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home . Pages </span>
             <span className=' font-josefin font-medium text-[16px] text-[#FB2E86] hover:text-[#FB2E86] hover:bg-[#fff]'>. FAQ</span></h2>
        </div>
    </Container>
</div>



<div className=" py-[50px]">
                <Container>
                    <div className=" flex ">
                        <div className="w-[45%]">
                            <div className="">
                                <h3 className=' font-josefin font-bold text-[#1D3178] text-[35px] pb-[64px]'>Generel Information</h3>
                                <h6 className=' font-josefin font-bold text-[17px] text-[#1D3178] pb-[15px]'>Eu dictumst cum at sed euismood condimentum?</h6>
                                <p className=' font-lato font-light text-[16px] text-[#A1ABCC] pb-[66px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>

                                <h6 className=' font-josefin font-bold text-[17px] text-[#1D3178] pb-[15px]'>Eu dictumst cum at sed euismood condimentum?</h6>
                                <p className=' font-lato font-light text-[16px] text-[#A1ABCC] pb-[66px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>


                                <h6 className=' font-josefin font-bold text-[17px] text-[#1D3178] pb-[15px]'>Eu dictumst cum at sed euismood condimentum?</h6>
                                <p className=' font-lato font-light text-[16px] text-[#A1ABCC] pb-[66px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>

                                <h6 className=' font-josefin font-bold text-[17px] text-[#1D3178] pt-[20px]'>Eu dictumst cum at sed euismood condimentum?</h6>
                                <p className=' font-lato font-light text-[16px] text-[#A1ABCC]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>

                            </div>
                        </div>



                        <div className="w-[45%] ml-[106px]  ">

                            <div className="bg-[#F8F8FD] w-[566px]  pl-[60px]">
                            <h3 className=' font-josefin font-bold text-[#1D3178] text-[24px] pt-[66px] pb-[144px]'>Ask a Question</h3>


                            <input type="text" className=' font-lato font-light text-[#8990B1] text-[16px] w-[80%] h-[50px] border-[1px] outline-none mb-[35px] border-[#8990B1] rounded-[4px]' placeholder='Your Name*' />


                            <input type="text" className=' font-lato font-light text-[#8990B1] text-[16px] w-[80%] h-[50px] border-[1px] outline-none mb-[45px] border-[#8990B1] rounded-[4px]' placeholder='Subject*' />

                            <textarea name="" placeholder='Type Your Message*' className='text-[#8990B1] font-lato font-normal text-[16px] h-[197px] w-[80%] border-[#8990B1] rounded-[4px]' id=""></textarea>

                            <div className="pt-[50px] pb-[62px]">
                                    <button className='text-[16px] leading-[30px] font-josefin font-semiBold bg-[#FB2E86] text-[#fff] border-[1px] border-[#FB2E86] rounded-[4px] py-[9px] px-[40px] hover:text-[#FB2E86] hover:bg-[#fff] duration-300 ease-in-out '>Send Mail</button>
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
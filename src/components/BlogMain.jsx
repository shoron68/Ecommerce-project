import React from 'react'
import Container from './Container'
import { FaPenNib, FaRegCalendarAlt, FaSearch, FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import blogimg1 from "../assets/blogimg1.png"
import blogimg2 from "../assets/blogimg2.png"
import blogimg3 from "../assets/blogimg3.png"
import blogimg4 from "../assets/blogimg4.png"

const BlogMain = () => {
  return (
    <>
      <div className='bg-[#F6F5FF] py-[50px] md:py-[70px] lg:py-[90px]'>
        <Container>
          <div className="lg:mx-0 mx-[15px]">
            <h2 className='font-josefin font-bold text-[#101750] text-[25px] md:text-[30px] lg:text-[35px]'>Blog Page</h2>
            <h2>
              <span className='font-hakto font-medium text-[14px] md:text-[16px] text-[#101750] hover:text-[#FB2E86] duration-300'>Home . Pages </span>
              <span className='font-hakto font-medium text-[14px] md:text-[16px] text-[#FB2E86]'>. Blog Page</span>
            </h2>
          </div>
        </Container>
      </div>

      <div className='py-[60px] md:py-[80px] lg:py-[100px]'>
        <Container>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-[30px] lg:mx-0 mx-[15px]">
            <div className="w-full lg:w-[68%]">
              {[blogimg1, blogimg2, blogimg3].map((img, index) => (
                <div key={index} className="mb-[50px]">
                  <img src={img} alt="" className="w-full" />
                  <div className="flex flex-wrap gap-x-[20px] gap-y-[10px] py-[16px]">
                    <div className="flex items-center gap-x-[10px]">
                      <FaPenNib className='text-[#FB2E86]' />
                      <div className="border-[1px] py-[5px] px-[20px] md:px-[30px] bg-[#FFE7F9] inline-block">
                        <h5 className='font-josefin font-normal text-[#151875] text-[14px] md:text-[16px]'>Surf Auxion</h5>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-[10px]">
                      <FaRegCalendarAlt className='text-[#FB2E86]' />
                      <div className="border-[1px] py-[5px] px-[20px] md:px-[30px] bg-[#FFECE2] inline-block">
                        <h5 className='font-josefin font-normal text-[#151875] text-[14px] md:text-[16px]'>Aug 09 2020</h5>
                      </div>
                    </div>
                  </div>
                  <h3 className='font-josefin font-bold text-[#151875] text-[22px] md:text-[28px] lg:text-[35px] py-[10px]'>Mauris at orci non vulputate diam tincidunt nec.</h3>
                  <p className='font-lato font-normal text-[#8A8FB9] text-[14px] md:text-[16px] py-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum
                    eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                  <h3 className='font-lato font-semibold text-[16px] md:text-[18px] text-[#151875] py-[20px] md:py-[30px]'>Read More </h3>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-[29%]">
              <div className="mb-[40px]">
                <h3 className='font-josefin font-semibold text-[20px] md:text-[22px] text-[#151875]'>Search</h3>
                <div className="relative mt-[10px]">
                  <input type="text" placeholder='Search For Posts'
                    className='font-lato font-light text-[14px] md:text-[14px] text-[#151875] border-[2px] border-[#BDBDD8] w-full h-[40px] md:w-[270px] md:h-[50px] outline-none rounded-[4px]' />
                  <div className="absolute top-[10px] md:top-[18px] right-[10px] md:right-[15px]">
                    <FaSearch />
                  </div>
                </div>
              </div>

              <div className="mb-[40px]">
                <h3 className='font-josefin font-semibold text-[20px] md:text-[22px] text-[#151875]'>Categories</h3>
                <div className="flex flex-wrap gap-y-[10px]">
                  <h4 className=' hover:bg-[#FB2E86] rounded-[5px] duration-300 hover:text-[#fff]  font-josefin font-medium text-[14px] text-[#000000] px-[15px] py-[10px]'>Hobbies (14)</h4>
                  <h4 className='hover:bg-[#FB2E86] rounded-[5px] duration-300 hover:text-[#fff]   font-josefin font-medium text-[14px] text-[#000000] px-[15px] py-[10px]'>Women (14)</h4>
                  <h4 className='hover:bg-[#FB2E86] rounded-[5px] duration-300 hover:text-[#fff]  font-josefin font-medium text-[14px] text-[#000000] px-[15px] py-[10px]'>Women (14)</h4>
                  <h4 className='hover:bg-[#FB2E86] rounded-[5px] duration-300 hover:text-[#fff]   font-josefin font-medium text-[14px] text-[#000000] px-[15px] py-[10px]'>Women (14)</h4>
                  <h4 className='hover:bg-[#FB2E86] rounded-[5px] duration-300 hover:text-[#fff]   font-josefin font-medium text-[14px] text-[#000000] px-[15px] py-[10px]'>Women (14)</h4>
                  <h4 className='hover:bg-[#FB2E86] rounded-[5px] duration-300 hover:text-[#fff]   font-josefin font-medium text-[14px] text-[#000000] px-[15px] py-[10px]'>Women (14)</h4>
                </div>
              </div>

              <div className="mb-[40px]">
                <h3 className='font-hakto font-semibold text-[20px] md:text-[22px] text-[#151875]'>Recent Post</h3>
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="flex gap-x-[20px] py-[10px] md:py-[15px]">
                    <div>
                      <img src={blogimg4} className='w-[60px] md:w-[70px] h-[45px] md:h-[51px]' alt="" />
                    </div>
                    <div>
                      <h3 className='font-josefin font-medium text-[14px] md:text-[16px] text-[#3F509E]'>It is a long established fact</h3>
                      <p className='font-lato font-normal text-[12px] md:text-[13px] text-[#8A8FB9]'>Aug 09 2020</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-[40px]">
                <h3 className='font-josefin font-semibold text-[20px] md:text-[22px] text-[#151875]'>Sale Product</h3>
                {[...Array(2)].map((_, index) => (
                  <div key={index} className="flex gap-x-[20px] py-[10px] md:py-[15px]">
                    <div>
                      <img src={blogimg4} className='w-[70px] md:w-[126px] h-[51px] md:h-[80px]' alt="" />
                    </div>
                    <div className="text-center py-2">
                      <h2 className='font-josefin font-medium text-[#151875] text-[14px] md:text-[16px]'>Sed placerat.</h2>
                      <p className='font-lato font-normal text-[12px] md:text-[13px] text-[#8A8FB9]'>$12.00 - $15.00</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:mb-[40px]">
                <h3 className='lg:text-start text-center font-josefin font-semibold text-[20px] md:text-[22px] text-[#151875] py-[15px]'>Follow</h3>
                <div className="flex gap-x-[20px] md:gap-x-[30px] py-[20px] lg:justify-start justify-center ">
                  <FaFacebookF className='text-[#fff] h-[25px] w-[25px] md:h-[30px] md:w-[30px] rounded-[50%] bg-[#151875]' />
                  <FaInstagramSquare className='text-[#fff] h-[25px] w-[25px] md:h-[30px] md:w-[30px] rounded-[50%] bg-[#FB2E86]' />
                  <FaTwitter className='text-[#fff] h-[25px] w-[25px] md:h-[30px] md:w-[30px] rounded-[50%] bg-[#FFB265]' />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default BlogMain

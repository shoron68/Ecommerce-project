import React from 'react'
import newslater from "../assets/newslater.png"
import newsimg from "../assets/newsimg.png"

const NewsLater = () => {
  return (
    <div className="mt-[100px]">
    
        <div className="text-center py-[100px] bg-cover bg-center lg:bg-cover bg-[url(../src/assets/newslater.png)]">
            <h3 className='text-[35px] text-[#151875] font-josefin font-bold '>Get Leatest Update By Subscribe <br /> 0ur Newslater</h3>
            <button className='text-[17px] text-[#fff] border-[2px] border-[#FB2E86] font-josefin font-normal bg-[#FB2E86] py-[16px] px-[40px] rounded-[5px] hover:text-[#FB2E86] hover:bg-[#fff] '>Shop Now</button>
        </div>
        
   
    <div className=" flex justify-center lg:mt-[96px] mt-[50px] ">
            <img src={newsimg} alt="" />
        </div>
    </div>
  )
}

export default NewsLater
import React from 'react'
import newslater from "../assets/newslater.png"
import newsimg from "../assets/newsimg.png"

const NewsLater = () => {
  return (
    <div className="">
    <div className=" mt-[125px] relative">
        <div className="">
            <img src={newslater} alt="" />
        </div>
        <div className="absolute top-[40%]  left-[50%] text-center translate-x-[-50%]">
            <h3 className='text-[35px] text-[#151875] font-josefin font-bold '>Get Leatest Update By Subscribe <br /> 0ur Newslater</h3>
            <button className='text-[17px] text-[#fff] border-[2px] border-[#FB2E86] font-josefin font-normal bg-[#FB2E86] py-[16px] px-[40px] rounded-[5px] hover:text-[#FB2E86] hover:bg-[#fff] '>Shop Now</button>
        </div>
        
    </div>
    <div className=" flex justify-center mt-[96px] ">
            <img src={newsimg} alt="" />
        </div>
    </div>
  )
}

export default NewsLater
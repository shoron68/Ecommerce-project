import React from 'react'
import Container from './Container'
import img from "../assets/404img.png"
import { Link } from 'react-router-dom'
import Sponsor from './Sponsor'

const ErrorMain = () => {
  return (
    <>
    <div className=' bg-[#F6F5FF] py-[90px]'>
    <Container>
        <div className="lg:mx-0 mx-[15px]">
            <h2 className=' font-josefin font-bold text-[#101750] text-[35px]'>404 Not Found</h2>
               <h2><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home . Pages </span>
             <span className=' font-josefin font-medium text-[16px] text-[#FB2E86] hover:text-[#FB2E86] hover:bg-[#fff]'>. 404 Not Found</span></h2>
        </div>
    </Container>
</div>
    
    <div className=' py-[50px]'>
            <Container>
                
                <div className=" lg:pl-[200px]"> 
                    <img src={img} alt="" />

                </div>
                <div className=" items-center justify-center text-center lg:py-[40px]">
                    <button className=' border-[2px] border-[#FB2E86] bg-[#FB2E86] px-4 py-[10px] mt-[30px]  font-josefin font-medium text-[#fff] text-[16px] rounded-[5px] hover:bg-[#fff] hover:text-[#FB2E86]  duration-500 '>
                        <Link to='/'>Back To Home</Link>
                    </button>
                </div>

                <Sponsor/>
            </Container>
        </div>
    </>
  )
}

export default ErrorMain
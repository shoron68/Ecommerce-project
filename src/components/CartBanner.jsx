import React from 'react'
import Container from './Container'

const CartBanner = () => {
  return (
    <div className=' bg-[#F6F5FF] py-[90px]'>
            <Container>
                <div className="">
                    <h2 className=' font-josefin font-bold text-[#101750] text-[35px]'>Shopping Curt</h2>
                       <h2><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home . Pages </span>
                     <span className=' font-josefin font-medium text-[16px] text-[#FB2E86]  '>. Shopping Curt</span></h2>
                </div>
            </Container>
        </div>
  )
}

export default CartBanner
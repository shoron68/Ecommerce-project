import React from 'react'
import sponsorimg from "../assets/newsimg.png"
import Container from './Container'

const Sponsor = () => {
  return (
    <Container>
        <div className=" lg:mx-0 mx-[15px] flex justify-center pt-[125px]">
            <img src={sponsorimg} alt="" />
        </div>
    </Container>
  )
}

export default Sponsor
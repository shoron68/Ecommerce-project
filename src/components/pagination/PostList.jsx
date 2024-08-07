import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaStar, FaList } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";


const PostList = ({ Allpage }) => {
    let [activeIcon, setActiveIcon] = useState('')
    let [singleRating,setSingleRating] =useState([])
    

    let Reating = Array.from({length : 5},(elm , index)=>{
        let number = index + 0.5
        return(
            singleRating.rating > index + 1  ?<FaStar/> : 
    
            singleRating.rating > number  ? <FaStarHalfAlt />:
    
            <FaRegStar/>
        )
    })
    
    return (


        <div className=" items-center">

            {Allpage.map((item) => (
                <div className=" border-[1px]  px-4 py-4 my-[25px] shadow-sm">
                    <div className=" flex gap-x-[40px] items-center">
                        <div className="">
                            <Link to={`/product-details/${item.id}`}> < img src={item.thumbnail} alt="" className="h-[200px] w-[200px]" /></Link>
                        </div>
                        <div className=" w-[50%]">
                            <div className=" flex  items-center gap-x-[20px] py-[8px]">
                                <h3 className=' font-hakto font-medium text-[#111C85] text-[20px]'>Accumsan tincidunt</h3>
                                <div className=" flex gap-x-[10px] ">
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                                </div>
                            </div>
                            <div className=" flex gap-x-[20px] items-center py-4">
                                <h5 className=' font-hakto font-normal text-[16px] text-[#111C85] hover:text-[#FF2AAA] duration-300'>$26.00</h5>
                                <h5 className=' font-hakto font-normal text-[16px] text-[#FF2AAA] hover:text-[#111C85] duration-300'>$52.00</h5>
                                <div className=" flex gap-x-[10px] text-[#FFC416]">
                                    {Reating}
                                </div>
                            </div>
                            <p className=' font-hakto font-light text-[17px] text-[#9295AA]'>{item.description}</p>
                            
                        </div>
                    </div>
                </div>
            ))}
        </div>



    )
}

export default PostList
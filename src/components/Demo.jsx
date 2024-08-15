import React, { useState,useEffect } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import Container from './Container'
import { FaCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { productRemove } from './slice/productSlice';
import { Link } from 'react-router-dom';


const Demo = () => {
        const [user, setUser] = useState([]);
        const db = getDatabase();
        let dispatch =useDispatch()
       

         let data = useSelector((state)=>state.product.cartItem)
      
         const {totalPrice, totatQuntity} = data.reduce((acc , item)=>{
             acc.totalPrice += item.price * item.qun
             acc.totatQuntity += item.qun
             return acc
         },{totalPrice:0 , totatQuntity:0})

         
         useEffect(() => {
           const starCountRef = ref(db, 'users/');
           onValue(starCountRef, (snapshot) => {
             const arr = [];
             snapshot.forEach((item) => {
               arr.push({ ...item.val() });
             });
             setUser(arr);
           });
         }, [db]);
        
       
        
    return (
        <>
            <div className=' bg-[#F6F5FF] py-[90px]'>
                <Container>
                    <div className="">
                    <h3 className=' font-josefin font-semibold text-[#1D3178] text-[35px]'>Checkout</h3>
                    <p className=' font-josefin font-medium text-[#1D3178] text-[16px]'>Cart/ Information/ Shipping/ Payment</p>
                    </div>
                </Container>
            </div>



            <div className=' py-[40px]'>
            <Container>
                <div className=" py-[20px]">
                    
                </div>

                <div className=" flex justify-between ">
                    <div className="w-[68%]">
                        <div className=" border-[2px] px-[20px] py-[30px] bg-[#F8F8FD]">
                            <div className=" flex justify-between items-center">
                                <h3 className=' font-josefin font-medium text-[18px] text-[#1D3178]'>Contact Information</h3>
                                <p className=' font-josefin font-light text-[12px] text-[#C1C8E1]'>Already have an account? Log in</p>
                            </div>
                            <div className="  ">
                                {user.map((item ,i)=>(

                                <div className="border-b-2">
                                    <p className='text-[16px] text-[#1D3178] font-josefin font-normal pb-[10px]'>{item.email}</p>
                                {/* <input type="text" placeholder={`${item.email}`}
                                    className=' font-josefin font-light text-[12px] text-[#C1C8E1] border-none  w-full outline-none border-b-[2px] bg-[#F8F8FD]'/> */}
                                    
                                </div>
                                ))}

                                <div className=" flex gap-x-[15px] items-center py-[30px]">
                                    <FaCheckCircle className=' text-[#19D16F]' />
                                    <p className='font-josefin font-light text-[12px] text-[#8A91AB]'>Keep me up to date on news and excluive offers</p>
                                </div>
                                <div className=" py-[20px]">
                                    <h2 className=' font-josefin font-medium text-[18px] text-[#1D3178]'>Shipping address</h2>

                                    <div className=" flex justify-between items-center py-[20px]">

                                        {user.map((item, index)=>(

                                        <div className=" w-[47%] border-b-2">
                                            <p className='text-[16px] text-[#1D3178] font-josefin font-normal pb-[15px] pt-[5px]'>{item.username}</p>
                                            {/* <input type="text" className=' font-josefin font-normal text-[12px] text-[#C1C8E1] w-full bg-[#F8F8FD] border-none' placeholder='First name (optional)' /> */}
                                        </div>
                                        ))}
                                        <div className=" w-[47%] border-b-2">
                                            <input type="text" className=' font-josefin font-normal text-[12px] text-[#C1C8E1] border-b-[2px] pt-3 outline-none  w-full bg-[#F8F8FD] border-none ' placeholder='Last name' />
                                        </div>
                                    </div>
                                    <div className="py-[20px]">
                                        <div className="border-b-2">
                                        <input type="text" className=' font-josefin font-normal text-[12px] text-[#C1C8E1] border-none pt-3 outline-none  w-full bg-[#F8F8FD]' placeholder='Address' />
                                        </div>
                                    </div>
                                    <div className="py-[20px]">
                                        <div className=" border-b-2">
                                        <input type="text" className=' font-josefin font-normal text-[12px] text-[#C1C8E1] border-none  w-full bg-[#F8F8FD]' placeholder='Appaetnentment,suit,e.t.c (optinal)' />                                            
                                        </div>
                                    </div>
                                    <div className="py-[20px] ">
                                        <div className=" border-b-2">
                                        <input type="text" className=' font-josefin font-normal text-[12px] text-[#C1C8E1] border-none  w-full bg-[#F8F8FD]' placeholder='City' />
                                        </div>
                                    </div>
                                    <div className=" flex justify-between items-center py-[20px]">
                                        <div className=" w-[47%] border-b-2">
                                            <input type="text" className=' font-josefin font-normal text-[12px] text-[#C1C8E1] border-none  w-full bg-[#F8F8FD]' placeholder='Bangladesh' />
                                        </div>
                                        <div className=" w-[47%] border-b-2">
                                            <input type="text" className=' font-josefin font-normal text-[12px] text-[#C1C8E1] border-none  w-full bg-[#F8F8FD]' placeholder='Postal Code' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                            <Link to="/order-complete">
                            <button className=' border-[1px] border-[#FB2E86] bg-[#FB2E86] px-[20px] py-[15px] rounded-[5px] my-[30px] font-josefin font-medium text-[#FFFFFF] text-[18px]'>Continue Shipping</button>
                            </Link>
                            </div>


                        </div>
                    </div>
                    <div className="w-[29%]">
                
                            <div className=" flex justify-between items-center border-b-[1px] border-[#E1E1E4] py-[10px] mt-[15px]">
                                <div className="">

                                {data.map((item,i)=>(

                                    <div key={i} className="flex justify-between items-center">
                                        <div className="flex ">
                                        <div className=" relative">
                                        <img src={item.thumbnail} className=' w-[100px] h-[50px]' alt="" />
                                        <div onClick={()=>dispatch(productRemove(i))}  className=" absolute top-[-10px] right-[-10px]">
                                            <RxCrossCircled className=' text-[25px] text-[#000000]' />
                                        </div>
                                    </div>
                                    <div className="ml-[20px]">
                                        <h5 className=' font-josefin font-medium text-[16px] text-[#000000]'>{item.title}</h5>
                                        <h6 className=' font-josefin font-normal text-[14px] text-[#A1A8C1]'></h6>
                                        <p className=' font-josefin font-normal text-[14px] text-[#A1A8C1]'>Size: XL</p>
                                    </div>
                                    </div>

                                    <div className="ml-[140px]">
                                    <h4 className=' font-josefin font-medium text-[16px] text-[#15245E]'>£{item.price}</h4>
                                    </div>

                                    </div>

                                ))}

                                </div>
                            </div>


                        <div className=" text-center py-[20px]">
                            <h3 className=' font-josefin font-semibold text-[#1D3178] text-[20px]'>Cart Totals</h3>
                        </div>
                        <div className=" border-[1px] border-[#F4F4FC] bg-[#F4F4FC] px-[20px] py-[20px] rounded-[10px]">
                            <div className=" flex justify-between border-b-[1px] border-[#E8E6F1] py-3">
                                <h3 className=' font-josefin font-medium text-[#1D3178] text-[16px]'>Subtotals:</h3>
                                <h3 className=' font-josefin font-medium text-[#1D3178] text-[16px]'>£{totalPrice}</h3>
                            </div>
                            <div className=" flex justify-between border-b-[1px] border-[#E8E6F1] py-3 mt-[40px]">
                                <h3 className=' font-josefin font-medium text-[#1D3178] text-[16px]'>Totals Quntity:</h3>
                                <h3 className=' font-josefin font-medium text-[#1D3178] text-[16px]'>{totatQuntity}</h3>
                            </div>
                            <div className=" flex justify-between border-b-[1px] border-[#E8E6F1] py-3 mt-[40px]">
                                <h3 className=' font-josefin font-medium text-[#1D3178] text-[16px]'>Totals:</h3>
                                <h3 className=' font-josefin font-medium text-[#1D3178] text-[16px]'>£{totalPrice * totatQuntity}</h3>
                            </div>
                            <div className=" flex gap-x-[20px] items-center my-[30px]">
                                <FaCheckCircle className=' text-[#19D16F] text-[18px]' />
                                <p className=' font-josefin font-medium text-[#8A91AB] text-[12px]'>Shipping & taxes calculated at checkout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>

        </>
    )
}

export default Demo
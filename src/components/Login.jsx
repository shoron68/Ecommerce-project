import React, { useState } from 'react'
import Container from './Container'
import Sponsor from './Sponsor'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const auth = getAuth();
    let [email,setEmail]=useState()
    let [password,setPassword]=useState()
    let navigate= useNavigate()


    let handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    let handlePass = (e) =>{
        setPassword(e.target.value)
    }
    let handleLogin = ()=>{
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                toast(" Success ")
                setTimeout(()=>{
                    navigate("/checkout")
                },2000)
            })
            .catch((error) => {
                toast.error(" Invaild Email Or Password");
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
  return (
    <>
    <div className=' bg-[#F6F5FF] py-[90px]'>
    <Container>
        <div className="">
            <h2 className=' font-josefin font-bold text-[#101750] text-[35px]'>My Account</h2>
               <h2><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home . Pages </span>
             <span className=' font-hakto font-medium text-[16px] text-[#FB2E86]  '>. My Account</span></h2>
        </div>
    </Container>
</div>
<div className=' py-[100px]'>
        <Container>
            <div className=" ml-[390px]">
                <div className="w-[60%]">
                   <div className=" border-[1px] px-[30px] py-[40px] shadow-xl">
                   <div className="">
                        <h2 className=' font-josefin font-bold text-[#000000] text-[35px] text-center'>Login</h2>
                        <p className=' font-lato font-normal text-[#9096B2] text-[18px] text-center'>Please login using account detail bellow.</p>
                    </div>
                    <div className="">
                        <input onChange={handleEmail}  type="Email" className=' font-lato font-normal text-[#9096B2] text-[18px] border-[2px] border-[#9096B2] w-full h-[50px] outline-none pl-[10px] my-[30px] rounded-[3px]' placeholder='Email Address' />
                        <input onChange={handlePass} type="Password" className=' font-lato font-normal text-[#9096B2] text-[18px] border-[2px] border-[#9096B2] w-full h-[50px] outline-none pl-[10px] my-[10px] rounded-[3px]' placeholder='Password' />
                    </div>

                    <p className=' font-lato font-medium text-[#9096B2] text-[17px]'>Forgot your password?</p>


                    <button onClick={handleLogin} className=' border-[1px] border-[#FB2E86] py-[15px] w-full bg-[#FB2E86] rounded-[5px] my-[30px] font-lato font-medium text-[17px] text-[#FFFFFF]'>
                         LogIn
                    </button>

                    <h5 className=' font-lato font-medium text-[17px] text-[#9096B2] text-center'>Don’t have an Account? <span className='text-[#FB2E86] pl-[5px]'> <Link to="/registration">Create account</Link> </span> </h5>
                   </div>
                </div>
                <ToastContainer/>
            </div>
        </Container>

        <Sponsor/>
    </div>
    </>
  )
}

export default Login
import React,{ useState } from 'react'
import Container from './Container'
import Sponsor from './Sponsor'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const auth = getAuth();
    const db = getDatabase();
    let [email,setEmail] = useState("")
    let [name,setName] = useState("")
    let [password,setPassword] = useState("")
    let navigate = useNavigate()


    let handleName =(e)=>{
        setName(e.target.value)
    }
    let handleEmail =(e)=>{
        setEmail(e.target.value)
    }
    let handlePass =(e)=>{
        setPassword(e.target.value)
    }
    let handleReg = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            updateProfile(auth.currentUser, {
                displayName: name
                  }).then(() => {
                      toast("অসতিছি")
                    setTimeout(()=>{
                        navigate("/myaccount")
                    },1000)
              }).then(()=>{
                set(ref(db, 'users/' +user.user.uid ), {
                    username: name,
                    email: email,
                  });
              }).catch((error) => {
                // An error occurred
                // ...
              });
        })
        .catch((error) => {
            toast.error(" হবোনা");
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
    return (
        <>
            <div className=' bg-[#F6F5FF] py-[90px]'>
                <Container>
                    <div className="">
                        <h2 className=' font-josefin font-bold text-[#101750] text-[35px]'>Registration</h2>
                        <h2><span className=' font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300'>Home . Pages </span>
                            <span className=' font-hakto font-medium text-[16px] text-[#FB2E86]  '>. Registration</span></h2>
                    </div>
                </Container>
            </div>
            <div className=' py-[100px]'>
                <Container>
                    <div className=" ml-[390px]">
                        <div className="w-[60%]">
                            <div className=" border-[1px] px-[30px] py-[40px] shadow-xl">
                                <div className="">
                                    <h2 className=' font-josefin font-bold text-[#000000] text-[35px] text-center'>Registration</h2>
                                    <p className=' font-lato font-normal text-[#9096B2] text-[18px] text-center'>Please Registration using account detail bellow.</p>
                                </div>
                                <div className="">
                                    <input onChange={handleName} type="Email" className=' font-lato font-normal text-[#9096B2] text-[18px] border-[2px] border-[#9096B2] w-full h-[50px] outline-none pl-[10px] mb-[10px] mt-[30px] rounded-[3px]' placeholder='Name' />
                                    <input onChange={handleEmail} type="Email" className=' font-lato font-normal text-[#9096B2] text-[18px] border-[2px] border-[#9096B2] w-full h-[50px] outline-none pl-[10px] my-[30px] rounded-[3px]' placeholder='Email Address' />
                                    <input onChange={handlePass} type="Password" className=' font-lato font-normal text-[#9096B2] text-[18px] border-[2px] border-[#9096B2] w-full h-[50px] outline-none pl-[10px] my-[10px] rounded-[3px]' placeholder='Password' />
                                </div>

                                <button onClick={handleReg} className=' border-[1px] border-[#FB2E86] py-[15px] w-full bg-[#FB2E86] rounded-[5px] my-[30px] font-lato font-medium text-[17px] text-[#FFFFFF]'>
                                    Sign In
                                </button>

                                <h5 className=' font-lato font-medium text-[17px] text-[#9096B2] text-center'>Already have an account ? <span className='text-[#FB2E86] pl-[5px]'> <Link to="/registration">Create account</Link> </span> </h5>
                            </div>
                        </div>
                        <ToastContainer />
                    </div>
                </Container>

                <Sponsor />
            </div>
        </>
    )
}

export default Registration
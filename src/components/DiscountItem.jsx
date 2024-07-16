import React from 'react';
import Container from './Container';
import { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import Dchair from "../assets/Dchair.png";

const DiscountItem = () => {
    const [activeTab, setActiveTab] = useState('WoodChair');
  
    return (
        <section>
            <Container className='my-10'>
                <div className="text-center">
                    <h2 className='font-jose font-bold text-[40px] text-[#1A0B5B]'>Discount Item</h2>
                </div>
                <div className="">
                    <div className="mb-4">
                        <ul className="flex flex-wrap justify-center -mb-px text-sm font-medium text-center" id="default-tab" role="tablist">
                            <li className="me-2" role="presentation">
                                <button className={`inline-block p-4 border-b-4 font-lato font-normal text-[18px] ${activeTab === 'WoodChair' ? 'border-[#FB4997] text-[#FB4997]' : 'border-transparent text-[#151875]'}`} id="WoodChair-tab" onClick={() => setActiveTab('WoodChair')} type="button" role="tab" aria-controls="WoodChair" aria-selected={activeTab === 'WoodChair'}>Wood Chair</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className={`inline-block p-4 border-b-4 font-lato font-normal text-[18px] ${activeTab === 'PlasticChair' ? 'border-[#FB4997] text-[#FB4997]' : 'border-transparent text-[#151875]'}`} id="PlasticChair-tab" onClick={() => setActiveTab('PlasticChair')} type="button" role="tab" aria-controls="PlasticChair" aria-selected={activeTab === 'PlasticChair'}>Plastic Chair</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className={`inline-block p-4 border-b-4 font-lato font-normal text-[18px] ${activeTab === 'SofaCollection' ? 'border-[#FB4997] text-[#FB4997]' : 'border-transparent text-[#151875]'}`} id="SofaCollection-tab" onClick={() => setActiveTab('SofaCollection')} type="button" role="tab" aria-controls="SofaCollection" aria-selected={activeTab === 'SofaCollection'}>Sofa Collection</button>
                            </li>
                        </ul>
                    </div>

                    <div id="default-tab-content">
                        <div className={`${activeTab === 'WoodChair' ? 'block' : 'hidden'}`} id="WoodChair" role="tabpanel" aria-labelledby="WoodChair-tab">
                            <div className="flex pt-[110px] justify-between">
                                <div className="w-[40%]">
                                    <h5 className='text-[35px] text-[#151875] font-josefin font-bold leading--[130%] tracking-[1.5%]'>20% Discount Of All Products</h5>
                                    <h6 className='text-[21px] text-[#FB4997] font-josefin font-normal'>Eams Sofa Compact</h6>
                                    <p className='text-[17px] text-[#B7BACB] font-lato font-normal pt-[21px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>

                                    <div className="flex pt-[28px]">
                                        <div className="flex items-center mr-[44px]">
                                            <FaCheck className='text-[#B7BACB]'/>
                                            <p className='text-[16px] text-[#B7BACB] font-lato font-normal leading-[30px] tracking-[2%]'>Material expose like metals</p>
                                        </div>
                                        <div className="flex items-center">
                                            <FaCheck className='text-[#B7BACB]'/>
                                            <p className='text-[16px] text-[#B7BACB] font-lato font-normal leading-[30px] tracking-[2%]'>Clear lines and geomatric figures</p>
                                        </div>
                                    </div>

                                    <div className="flex pt-[10px]">
                                        <div className="flex items-center mr-[75px]">
                                            <FaCheck className='text-[#B7BACB]'/>
                                            <p className='text-[16px] text-[#B7BACB] font-lato font-normal leading-[30px] tracking-[2%]'>Simple neutral colours.</p>
                                        </div>
                                        <div className="flex items-center">
                                            <FaCheck className='text-[#B7BACB]'/>
                                            <p className='text-[16px] text-[#B7BACB] font-lato font-normal leading-[30px] tracking-[2%]'>Material expose like metals</p>
                                        </div>
                                    </div>

                                    <button className='text-[17px] text-[#FFFFFF] font-josefin font-normal py-[19px] px-[49px] bg-[#FB4997] border-[2px] border-[#FB4997] rounded-[4px] hover:bg-[#FFFFFF] hover:text-[#FB4997] duration-300 mt-[37px]'>Shop Now</button>
                                </div>

                                <div className="w-[40%]">
                                    <img src={Dchair} className='mt-[-40px]' alt="" />
                                </div>
                            </div>
                        </div>

                        <div className={`${activeTab === 'PlasticChair' ? 'block' : 'hidden'}`} id="PlasticChair" role="tabpanel" aria-labelledby="PlasticChair-tab">
                            <div className="flex pt-[110px] justify-between">
                                <div className="w-[40%]">
                                    <h5 className='text-[35px] text-[#151875] font-josefin font-bold leading--[130%] tracking-[1.5%]'>20% Discount Of All Products</h5>
                                    <h6 className='text-[21px] text-[#FB4997] font-josefin font-normal'>Eams Sofa Compact</h6>
                                    <p className='text-[17px] text-[#B7BACB] font-lato font-normal pt-[21px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>

                                    <div className="flex pt-[28px]">
                                        <div className="flex items-center mr-[44px]">
                                            <FaCheck className='text-[#B7BACB]'/>
                                            <p className='text-[16px] text-[#B7BACB] font-lato font-normal leading-[30px] tracking-[2%]'>Material expose like metals</p>
                                        </div>
                                        <div className="flex items-center">
                                            <FaCheck className='text-[#B7BACB]'/>
                                            <p className='text-[16px] text-[#B7BACB] font-lato font-normal leading-[30px] tracking-[2%]'>Clear lines and geomatric figures</p>
                                        </div>
                                    </div>

                                    <div className="flex pt-[10px]">
                                        <div className="flex items-center mr-[75px]">
                                            <FaCheck className='text-[#B7BACB]'/>
                                            <p className='text-[16px] text-[#B7BACB] font-lato font-normal leading-[30px] tracking-[2%]'>Simple neutral colours.</p>
                                        </div>
                                        <div className="flex items-center">
                                            <FaCheck className='text-[#B7BACB]'/>
                                            <p className='text-[16px] text-[#B7BACB] font-lato font-normal leading-[30px] tracking-[2%]'>Material expose like metals</p>
                                        </div>
                                    </div>

                                    <button className='text-[17px] text-[#FFFFFF] font-josefin font-normal py-[19px] px-[49px] bg-[#FB4997] border-[2px] border-[#FB4997] rounded-[4px] hover:bg-[#FFFFFF] hover:text-[#FB4997] duration-300 mt-[37px]'>Shop Now</button>
                                </div>

                                <div className="w-[40%]">
                                    <img src={Dchair} className='mt-[-40px]' alt="" />
                                </div>
                            </div>
                        </div>
                        
                        <div className={`${activeTab === 'SofaCollection' ? 'block' : 'hidden'}`} id="SofaCollection" role="tabpanel" aria-labelledby="SofaCollection-tab">
                            <div className="flex pt-[110px] justify-between">
                                <div className="w-[40%]">
                                    <h5 className='text-[35px] text-[#151875] font-josefin font-bold leading--[130%] tracking-[1.5%]'>20% Discount Of All Products</h5>
                                    <h6 className='text-[21px] text-[#FB4997] font-josefin font-normal'>Eams Sofa Compact</h6>
                                    <p className='text-[17px] text-[#B7BACB] font-lato font-normal pt-[21px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>

                                    <div className="flex pt-[28px]">
                                        <div className="flex items-center mr-[44px]">
                                            <FaCheck className='text-[#B7BACB]'/>
                                            <p className='text-[16px] text-[#B7BACB] font-lato font-normal leading-[30px] tracking-[2%]'>Material expose like metals</p>
                                        </div>
                                        <div className="flex items-center">
                                            <FaCheck className='text-[#B7BACB]'/>
                                            <p className='text-[16px] text-[#B7BACB] font-lato font-normal leading-[30px] tracking-[2%]'>Clear lines and geomatric figures</p>
                                        </div>
                                    </div>

                                    <div className="flex pt-[10px]">
                                        <div className="flex items-center mr-[75px]">
                                            <FaCheck className='text-[#B7BACB]'/>
                                            <p className='text-[16px] text-[#B7BACB] font-lato font-normal leading-[30px] tracking-[2%]'>Simple neutral colours.</p>
                                        </div>
                                        <div className="flex items-center">
                                            <FaCheck className='text-[#B7BACB]'/>
                                            <p className='text-[16px] text-[#B7BACB] font-lato font-normal leading-[30px] tracking-[2%]'>Material expose like metals</p>
                                        </div>
                                    </div>

                                    <button className='text-[17px] text-[#FFFFFF] font-josefin font-normal py-[19px] px-[49px] bg-[#FB4997] border-[2px] border-[#FB4997] rounded-[4px] hover:bg-[#FFFFFF] hover:text-[#FB4997] duration-300 mt-[37px]'>Shop Now</button>
                                </div>

                                <div className="w-[40%]">
                                    <img src={Dchair} className='mt-[-40px]' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default DiscountItem;

import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import { FaSearch, FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import { ApiData } from './apilinks/ContextApi';

const Menu = () => {
    let info = useContext(ApiData);
    let navigate = useNavigate();
    let [activeMenu, setActiveMenu] = useState(localStorage.getItem('activeMenu') || '');
    let [show, setShow] = useState(false);
    let [searchChange, setSearchChange] = useState('');
    let [searchFilter, setSearchFilter] = useState([]);
    let [selectedIndex, setSelectedIndex] = useState(-1);

    useEffect(() => {
        localStorage.setItem('activeMenu', activeMenu);
    }, [activeMenu]);

    let handleSearch = (e) => {
        setSearchChange(e.target.value);

        if (e.target.value === "") {
            setSearchFilter([]);
            setSelectedIndex(-1);
        } else {
            let searchFind = info.filter((item) => item.title.toLowerCase().includes(e.target.value));
            setSearchFilter(searchFind);
            setSelectedIndex(-1);
        }
    };

    let handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            setSelectedIndex((prevIndex) =>
                prevIndex < searchFilter.length - 1 ? prevIndex + 1 : prevIndex
            );
        } else if (e.key === "ArrowUp") {
            setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : -1));
        } else if (e.key === "Enter") {
            if (selectedIndex >= 0 && searchFilter.length > 0) {
                handleSingleP(searchFilter[selectedIndex].id);
            }
        }
    };

    let handelClickSearch = () => {
        navigate("/pages");
    };

    let handleSingleP = (id) => {
        navigate(`/product-details/${id}`);
        setSearchFilter([]);
        setSelectedIndex(-1);
    };
    useEffect(() => {
  document.body.style.overflowX = 'hidden';
  return () => {
    document.body.style.overflowX = 'auto';
  };
}, []);

    return (
        <Container>
            <div className="lg:flex lg:justify-between items-center py-4 px-4 lg:px-0  ">
                <div className="lg:w-[70%] w-full flex justify-between items-center ">
                    <div className="w-[10%]">
                        <Link to="/"><h2 className='text-[24px] lg:text-[39px] text-[#0D0E43] font-josefin font-bold'>Hekto</h2></Link>
                    </div>
                    <div className="lg:w-[65%]">
                        <div className="">
                        <ul className={`lg:flex items-center justify-center lg:static absolute transition-all ${show ? 'top-0 right-0 bg-[#FFFFFF] z-50 w-[250px] rounded-tl-[10px]  h-full pl-[30px] pt-[50px] duration-500 shadow-[13px_-3px_37px_0px_#7E33E0]' : 'duration-500 top-0 right-[-250px] w-[250px] h-full bg-none lg:pl-0 pl-[30px] lg:pt-0 pt-[50px] absolute hidden'}`}>


                            <li onClick={() => setActiveMenu('Home')} className={`${activeMenu === 'Home' ? 'text-[#FF2AAA] font-lato font-normal text-[16px]' : 'text-[#0D0E43] font-lato font-normal text-[16px]'}`}>
                                <Link to="/">Home</Link>
                            </li>
                            <li onClick={() => setActiveMenu('Pages')} className={`${activeMenu === 'Pages' ? 'text-[#FF2AAA] lg:mx-3 font-lato font-normal text-[16px]' : 'text-[#0D0E43] lg:mx-3 font-lato font-normal text-[16px]'}`}>
                                <Link to="/pages">Pages</Link>
                            </li>
                            <li onClick={() => setActiveMenu('Products')} className={`${activeMenu === 'Products' ? 'text-[#FF2AAA] font-lato font-normal text-[16px]' : 'text-[#0D0E43] font-lato font-normal text-[16px]'}`}>
                                <Link to="/products">Products</Link>
                            </li>
                            <li onClick={() => setActiveMenu('Blog')} className={`${activeMenu === 'Blog' ? 'text-[#FF2AAA] lg:mx-3 font-lato font-normal text-[16px]' : 'text-[#0D0E43] lg:mx-3 font-lato font-normal text-[16px]'}`}>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li onClick={() => setActiveMenu('Shop')} className={`${activeMenu === 'Shop' ? 'text-[#FF2AAA] font-lato font-normal text-[16px]' : 'text-[#0D0E43] font-lato font-normal text-[16px]'}`}>
                                <Link to="/pages">Shop</Link>
                            </li>
                            <li onClick={() => setActiveMenu('Contact')} className={`${activeMenu === 'Contact' ? 'text-[#FF2AAA] lg:mx-3 font-lato font-normal text-[16px]' : 'text-[#0D0E43] lg:mx-3 font-lato font-normal text-[16px]'}`}>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>


                        </div>
                    </div>

                    <div className="lg:hidden" onClick={() => setShow(!show)}>
                        {show ? <RxCross2 className='text-[#262626] text-[25px] absolute top-[30px] right-[20px] z-50' /> : <FaBars className='text-[#262626] text-[25px]' />}
                    </div>
                </div>

                <div className="lg:w-[27%] w-full mt-4 lg:mt-0 relative">
                    <div className="flex items-center justify-between lg:justify-start">
                        <input
                            onKeyDown={handleKeyDown}
                            onChange={handleSearch}
                            type="text"
                            className='outline-none border-[1px] border-[#E7E6EF] w-full lg:w-[280px] h-[32px]'
                        />
                        <div className="py-[8px] px-[13px] bg-[#FB2E86] text-white cursor-pointer">
                            <FaSearch onClick={handelClickSearch} />
                        </div>
                    </div>
                    {searchFilter.length > 0 && (
                        <div className="absolute z-10 top-[40px] w-full lg:w-[92.7%] h-auto overflow-y-scroll bg-white shadow-lg">
                            {searchFilter.map((item, index) => (
                                <div
                                    key={item.id}
                                    onClick={() => handleSingleP(item.id)}
                                    className={`flex justify-between h-[50px] items-center mx-2 p-2 cursor-pointer ${index === selectedIndex ? 'bg-gray-200' : ''}`}
                                >
                                    <img src={item.thumbnail} className='h-[50px] w-[50px]' alt={item.title} />
                                    <p className='ml-4 text-[14px] lg:text-[16px]'>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Container>
    );
}

export default Menu;
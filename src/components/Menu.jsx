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
    let [selectedIndex, setSelectedIndex] = useState(-1); // Track the selected search result

    useEffect(() => {
        localStorage.setItem('activeMenu', activeMenu);
    }, [activeMenu]);

    let handleSearch = (e) => {
        setSearchChange(e.target.value); 

        if(e.target.value === ""){
            setSearchFilter([]);
            setSelectedIndex(-1); // Reset the selected index
        } else {
            let searchFind = info.filter((item) => item.title.toLowerCase().includes(e.target.value));
            setSearchFilter(searchFind);
            setSelectedIndex(-1); // Reset the selected index
        }
    };

    let handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            // Move selection down
            setSelectedIndex((prevIndex) =>
                prevIndex < searchFilter.length - 1 ? prevIndex + 1 : prevIndex
            );
        } else if (e.key === "ArrowUp") {
            // Move selection up
            setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : -1));
        } else if (e.key === "Enter") {
            // Navigate to the selected product
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
        setSelectedIndex(-1); // Reset the selected index
    };

    return (
        <Container>
            <div className="lg:flex lg:justify-between items-center lg:mx-0 mx-[10px] py-[15px]">
                <div className="lg:w-[70%] w-full flex lg:justify-start justify-between items-center">
                    <div className="w-[10%]">
                        <h2 className='text-[39px] text-[#0D0E43] font-josefin font-bold'>Hekto</h2>
                    </div>
                    <div className="w-[65%]">
                        <ul className={`lg:flex items-center justify-center lg:static absolute -z-30  ${show == true ? 'top-[150px] left-[0px] bg-[#F5F5F3] z-50  w-full  duration-700 text-center' : ' duration-700 top-[-400px] left-[0px] text-center  w-full bg-[none] '}`}>
                            <li onClick={() => setActiveMenu('Home')} className={`${activeMenu === 'Home' ? ' text-[#FF2AAA] font-lato font-normal text-[16px] ' : '  text-[#0D0E43] font-lato font-normal text-[16px] '}`} ><Link to="/">Home</Link></li>
                            <li onClick={() => setActiveMenu('Pages')} className={`${activeMenu === 'Pages' ? ' text-[#FF2AAA] mx-3 font-lato font-normal text-[16px] ' : 'text-[#0D0E43] mx-3 font-lato font-normal text-[16px]  '}`}>Pages</li>
                            <li onClick={() => setActiveMenu('Products')} className={`${activeMenu === 'Products' ? ' text-[#FF2AAA] font-lato font-normal text-[16px] ' : '  text-[#0D0E43] font-lato font-normal text-[16px] '}`}>Products</li>
                            <li onClick={() => setActiveMenu('Blog')} className={`${activeMenu === 'Blog' ? ' text-[#FF2AAA] mx-3 font-lato font-normal text-[16px] ' : ' font-lato font-normal text-[16px]   text-[#0D0E43] mx-3'}`}><Link to="/blog">Blog</Link> </li>
                            <li onClick={() => setActiveMenu('Shop')} className={`${activeMenu === 'Shop' ? ' text-[#FF2AAA] font-lato font-normal text-[16px] ' : 'font-lato font-normal text-[16px]   text-[#0D0E43]'}`}> <Link to="/pages">Shop</Link></li>
                            <li onClick={() => setActiveMenu('Contact')} className={`${activeMenu === 'Contact' ? ' text-[#FF2AAA] mx-3 font-lato font-normal text-[16px] ' : 'font-lato font-normal text-[16px]   text-[#0D0E43] mx-3'}`}><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="lg:hidden relative" onClick={() => { setShow(!show) }}>
                        {show === true ? <RxCross2 className='text-[#262626] text-[25px]' /> : <FaBars className='text-[#262626] text-[25px]' />}
                    </div>
                </div>

                <div className="lg:w-[27%] w-full relative">
                    <div className="flex items-center lg:justify-start justify-center">
                        <div className="">
                            <input
                                onKeyDown={handleKeyDown} // Use onKeyDown instead of onKeyUp
                                onChange={handleSearch}
                                type="text"
                                className='outline-none border-[1px] border-[#E7E6EF] w-[280px] h-[32px]'
                            />
                        </div>
                        <div className="py-[8px] px-[13px] bg-[#FB2E86] ml-[-2px] text-[#fff]">
                            <div onClick={handelClickSearch}>
                                <FaSearch />
                            </div>
                        </div>
                    </div>
                    {searchFilter.length > 0 &&
                        <div className="absolute z-10 top-[32px] w-[92.7%] h-[300px] overflow-y-scroll left-0 bg-white">
                            {searchFilter.map((item, index) => (
                                <div
                                    key={item.id}
                                    onClick={() => handleSingleP(item.id)}
                                    className={`flex justify-between h-[50px] items-center mx-2 ${index === selectedIndex ? 'bg-gray-200' : ''}`} // Highlight selected item
                                >
                                    <div className="">
                                        <img src={item.thumbnail} className='h-[50px] w-[50px]' alt="" />
                                    </div>
                                    <div className="">
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </Container>
    )
}

export default Menu;

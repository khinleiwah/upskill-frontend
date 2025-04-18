import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaFacebookF, FaList, FaLock, FaUser } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from 'react-redux';

const Header = () => {
    const [categoryShow, setCategoryShow] = useState(true);
    const user = false
    const wishlist_count = 3

    const [showShidebar, setShowShidebar] = useState(true);
    const navigate = useNavigate()
    const { categorys } = useSelector(state => state.home)

    const { pathname } = useLocation()

    const [searchValue, setSearchValue] = useState('')
    const [category, setCategory] = useState('')

    const search = () => {
        navigate(`/product/search?category=${category}&&value=${searchValue}`)
    }

    return (
        <div className='w-full bg-white'>
            <div className='header-top bg-[#caddff] md-lg:hidden'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='flex w-full justify-between items-center h-[50px] text-slate-500'>
                        <ul className='flex justify-start items-center gap-8 font-semibold text-black'>
                            <li className='flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px]'>
                                <span><MdEmail /></span>
                                <span>khinleiwahwin84@gmail.com</span>
                            </li>

                            <li className='flex relative justify-center items-center gap-2 text-sm '>
                                <span><IoMdPhonePortrait /></span>
                                <span>+(65) 8792 1006</span>
                            </li>
                        </ul>

                        <div>
                            <div className='flex justify-center items-center gap-10'>
                                <div className='flex justify-center items-center gap-4 text-black'>
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaTwitter /> </a>
                                    <a href="#"><FaLinkedin /></a>
                                    <a href="#"><FaGithub /> </a>
                                </div>
                                <div className='flex group cursor-pointer text-slate-800 text-sm justify-center items-center gap-1 relative after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] after:absolute before:absolute before:h-[18px] before:bg-[#afafaf] before:w-[1px] before:-left-[20px]'>
                                    <img src="http://localhost:3000/images/language.png" alt="" />
                                    <span><IoMdArrowDropdown /></span>
                                    <ul className='absolute invisible transition-all top-12 rounded-sm duration-200 text-white p-2 w-[100px] flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black z-10'>
                                        <li>Burmese</li>
                                        <li>English</li>
                                    </ul>
                                </div>

                                {
                                    user ? <Link className='flex cursor-pointer justify-center items-center gap-2 text-sm text-black' to='/home'>
                                        <span> <FaUser /> </span>
                                        <span>Khin Lei Wah Win </span>
                                    </Link> : <Link className='flex cursor-pointer justify-center items-center gap-2 text-sm text-black' to='/login'>
                                        <span> <FaLock /> </span>
                                        <span>Login </span>
                                    </Link>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-white'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='h-[80px] md-lg:h-[100px] flex justify-between items-center flex-wrap'>

                        <div className='md-lg:w-full w-3/12 md-lg:pt-4'>
                            <div className='flex justify-between items-center'>

                                {/* <Link to='/home'>
                                    <img src="http://localhost:3000/images/logo.png" alt="" />
                                </Link>  */}
                                {/* <div className='justify-center items-center w-[30px] h-[30px] bg-white text-slate-600 border border-slate-600 rounded-sm cursor-pointer lg:hidden md-lg:flex xl:hidden hidden' onClick={() => setShowShidebar(false)}>
                                    <span> <FaList /> </span>
                                </div> */}
                                <div className='justify-center items-center w-[30px] h-[30px] bg-white text-slate-600 border border-slate-600 rounded-sm cursor-pointer lg:hidden md-lg:flex xl:hidden hidden' onClick={() => setShowShidebar(false)}>
                                    <span> <FaList /> </span>
                                </div>
                            </div>
                        </div>

                        <div className='md:lg:w-full w-9/12'>
                            <div className='flex justify-between md-lg:justify-center items-center flex-wrap pl-8'>
                                <ul className='flex justify-start items-start gap-8 text-sm font-bold uppercase md-lg:hidden'>
                                    <li>
                                        <Link to='/home' className={`p-2 block ${pathname === '/home' ? 'text-[#051894]' : 'text-slate-600'} `} >Home</Link>
                                    </li>
                                    <li>
                                        <Link to='/startSelling' className={`p-2 block ${pathname === '/startSelling' ? 'text-[#051894]' : 'text-slate-600'} `} >Add Product</Link>
                                    </li>
                                    <li>
                                        <Link className={`p-2 block ${pathname === '/shops' ? 'text-[#051894]' : 'text-slate-600'} `} >Shop</Link>
                                    </li>

                                    <li>
                                        <Link className={`p-2 block ${pathname === '/about' ? 'text-[#051894]' : 'text-slate-600'} `} >About Us</Link>
                                    </li>
                                    <li>
                                        <Link className={`p-2 block ${pathname === '/contact' ? 'text-[#051894]' : 'text-slate-600'} `} >Contact Us</Link>
                                    </li>

                                </ul>

                                <div className='flex md-lg:hidden justify-center items-center gap-5'>
                                    <div className='flex justify-center gap-5'>
                                        <div className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]'>
                                            <span className='text-xl text-green-500'><FaHeart /></span>
                                            <div className='w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px] '>
                                                {
                                                    wishlist_count
                                                }

                                            </div>
                                        </div>

                                        <div className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]'>
                                            <span className='text-xl text-green-500'><FaCartShopping /></span>
                                            <div className='w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px] '>
                                                {
                                                    wishlist_count
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden md-lg:block'>
                <div onClick={() => setShowShidebar(true)} className={`fixed duration-200 transition-all ${showShidebar ? 'invisible' : 'visible'} hidden md-lg:block w-screen h-screen bg-[rgba(0,0,0,0.5)] top-0 left-0 z-20 `}>
                </div>

                <div className={`w-[300px] z-[9999] transition-all duration-200 fixed ${showShidebar ? '-left-[300px]' : 'left-0 top-0'} overflow-y-auto bg-white h-screen py-6 px-8 `}>
                    <div className='flex justify-start flex-col gap-6'>
                        {/* <Link to='/'>
                            <img src="http://localhost:3000/images/logo.png" alt="" />
                        </Link> */}
                        <div className='flex justify-start items-center gap-10'>
                            <div className='flex group cursor-pointer text-slate-800 text-sm justify-center items-center gap-1 relative after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] after:absolute '>
                                <img src="http://localhost:3000/images/language.png" alt="" />
                                <span><IoMdArrowDropdown /></span>
                                <ul className='absolute invisible transition-all top-12 rounded-sm duration-200 text-white p-2 w-[100px] flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black z-10'>
                                    <li>Burmese</li>
                                    <li>English</li>
                                </ul>
                            </div>
                            {
                                user ? <Link className='flex cursor-pointer justify-center items-center gap-2 text-sm text-black' to='/dashboard'>
                                    <span> <FaUser /> </span>
                                    <span>Kazi Ariyan </span>
                                </Link> : <Link className='flex cursor-pointer justify-center items-center gap-2 text-sm text-black' to='/login'>
                                    <span> <FaLock /> </span>
                                    <span>Login </span>
                                </Link>
                            }

                        </div>

                        <ul className='flex flex-col justify-start items-start text-sm font-bold uppercase'>
                            <li>
                                <Link to='/home' className={`p-2 block ${pathname === '/home' ? 'text-[#051894]' : 'text-slate-600'} `} >Home</Link>
                            </li>
                            <li>
                                <Link to='/startSelling' className={`p-2 block ${pathname === '/startSelling' ? 'text-[#051894]' : 'text-slate-600'} `} >Add Product</Link>
                            </li>
                            <li>
                                <Link className={`p-2 block ${pathname === '/shops' ? 'text-[#051894]' : 'text-slate-600'} `} >Shop</Link>
                            </li>

                            <li>
                                <Link className={`p-2 block ${pathname === '/about' ? 'text-[#051894]' : 'text-slate-600'} `} >About Us</Link>
                            </li>
                            <li>
                                <Link className={`p-2 block ${pathname === '/contact' ? 'text-[#051894]' : 'text-slate-600'} `} >Contact Us</Link>
                            </li>

                        </ul>


                    </div>
                </div>
            </div>

            <div className='w-[85%] lg:w-[90%] mx-auto'>
                <div className='flex w-full flex-wrap md-lg:gap-8'>
                    {/* <div className='w-3/12 md-lg:w-full'>
                        <div className='bg-white relative'>
                            <div onClick={() => setCategoryShow(!categoryShow)} className='h-[50px] bg-[#051894] text-white flex justify-center md-lg:justify-between md-lg:px-6 items-center gap-3 font-bold text-md cursor-pointer'>
                                <div className='flex justify-center items-center gap-3'>
                                    <span><FaList /></span>
                                    <span>All Category </span>
                                </div>
                                <span className='pt-1'><IoIosArrowDown /></span>
                            </div>

                            <div className={`${categoryShow ? 'h-0' : 'h-[400px]'} overflow-hidden transition-all md-lg:relative duration-500 absolute z-[99999] bg-[#dbf3ed] w-full border-x`}>
                                <ul className='py-2 text-slate-600 font-medium'>
                                    {
                                        categorys.map((c, i) => {
                                            return (
                                                <li key={i} className='flex justify-start items-center gap-2 px-[24px] py-[6px]'>

                                                    <img src={c.image} className='w-[30px] h-[30px] rounded-full overflow-hidden' alt="" />
                                                    {/* <Link className='text-sm block'>{c.name}</Link> */}
                                                    {/* <Link to={`/product?category=${c.id}`} className='text-sm block'>{c.name}</Link> */}
                                                {/* </li>
                                            )
                                        })
                                    }
                                </ul> */}

                            {/* </div> */}


                        {/* </div>
                    </div>  */}

                    <div className='w-9/12 pl-8 md-lg:pl-0 md-lg:w-full'>
                        <div className='flex flex-wrap w-full justify-between items-center md-lg:gap-6'>
                            <div className='w-8/12 md-lg:w-full'>
                                <div className='flex border h-[50px] items-center relative gap-6'>
                                    <div className='relative after:absolute after:h-[25px] after:w-[1px] after:bg-[#afafaf] after:-right-[15px] md:hidden'>
                                        <select onChange={(e) => setCategory(e.target.value)} className='w-[150px] text-slate-600 font-semibold bg-transparent px-2 h-full outline-0 border-none' name="" id="">
                                            <option value="">Select Category</option>
                                            {
                                                categorys.map((c, i) => <option key={i} value={i + 1}>
                                                    {c.name}
                                                </option>)
                                            }
                                        </select>
                                    </div>
                                    <input className='w-full relative bg-transparent text-slate-500 outline-0 px-3 h-full' onChange={(e) => setSearchValue(e.target.value)} type="text" name='' id='' placeholder='What do you need' />
                                    <button onClick={search} className='bg-[#051894] right-0 absolute px-8 h-full font-semibold uppercase text-white'>Search</button>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../img/logo.png"

const Navbar = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='border-b border-white/60 bg-white/50 fixed w-full top-0 left-0 z-30 backdrop-blur-md'>
            <nav className={`flex flex-col lg:flex-row justify-centerlgd:items-center py-2 lg:justify-between main-container w-full  `}>
                <div className=' flex w-full  lg:w-auto justify-between items-center'>
                    <Link to={'/'} className='w-[200px] flex items-center gap-3'>
                        <img className='w-16' src={logo} alt="" />
                        <div className='border-s-2 border-black ps-3'>
                            Raqamli ta'lim resurslari
                        </div>
                    </Link>
                    <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden bg p-2 px-3 rounded-md text-white'>

                        {
                            isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                </svg>
                        }
                    </button>
                </div>
                <ul className={`${isOpen ? "h-full lg:h-auto mt-6" : "h-0 lg:h-auto mt-0"} overflow-hidden flex  lg:mt-0 text-xl lg:text-base  flex-col lg:flex-row  w-full lg:w-auto lg:items-center gap-4 lg:gap-10`}>
                    <li className='border-b-2 lg:border-b-0 border-dotted'><a className='py-2' href="#kafedralar">Kafedralar</a></li>
                    <li className='border-b-2 lg:border-b-0 border-dotted'><a className='py-2' href="#statistic">Statistikalar</a></li>
                    <li className='border-b-2 lg:border-b-0 border-dotted'><a className='py-2' href="#footer">Biz haqimizda</a></li>
                    {/* <button  className='bg lg:ms-auto mt-auto lg:mt-0 rounded-lg w-full lg:w-auto text-white px-7 py-3 '>Kirish</button> */}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
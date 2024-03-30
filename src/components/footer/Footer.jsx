import React from 'react'
import logo from "../img/logo.png"
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { TbMailFilled } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className='bg-white border-t-2 border-blue-500 mt-20'>
            <div className="main-container text-[14px] py-14  xl:gap-32 gap-5 grid grid-cols-1 lg:grid-cols-3 ">
                <div className='flex flex-col justify-between col-span-1'>
                    <Link to={'/'} className='w-[200px] flex items-center gap-3'>
                        <img className='w-16' src={logo} alt="" />
                        <div className='border-s-2 border-black ps-3'>
                            Raqamli ta'lim resurslari
                        </div>
                    </Link>
                    <div>
                        © {year}. Raqamli ta'lim resurslari platformasi. Barcha huquqlar himoyalangan.
                    </div>
                </div>
                <div className='flex flex-col  col-span-1'>
                    <h1 className='text-lg font-semibold uppercase'>
                        Menu
                    </h1>
                    <ul className='flex flex-col gap-2 pt-3   text-[14px]'>
                        <li className='border-b-2 lg:border-b-0 border-dotted'><a className='py-2' href="#kafedralar">Kafedralar</a></li>
                        <li className='border-b-2 lg:border-b-0 border-dotted'><a className='py-2' href="#statistic">Statistikalar</a></li>
                        <li className='border-b-2 lg:border-b-0 border-dotted'><a className='py-2' href="#footer">Biz haqimizda</a></li>
                    </ul>
                </div>
                <div className='flex flex-col  col-span-1'>
                    <h1 className='text-lg font-semibold uppercase'>
                        Biz bilan bog'lanish
                    </h1>
                    <ul className='flex flex-col gap-4  pt-3 text-[14px]'>
                        <li>
                            <a className='flex gap-2' href={`tel:+`}>
                                <FaLocationDot className='w-5 h-5 text-blue-500' />
                                <span>Islom Karimov ko`chasi 12-uy</span>
                            </a>
                        </li>
                        <li>
                            <a className='flex gap-2' href={`tel:+`}>
                                <FaPhoneAlt className='w-5 h-5 text-blue-500' />
                                <span>+998 69 234 18 01. +998 69 234 15 23</span>
                            </a>
                        </li>
                        <li>
                            <a className='flex gap-2' href="#">
                                <TbMailFilled className='w-5 h-5 text-blue-500' />
                                <span>nammqi_info@edu.uz</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
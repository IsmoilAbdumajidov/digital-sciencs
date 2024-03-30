import React from 'react'
import HeaderAnimation from '../LottiAnimations/headerAnimation/HeaderAnimation'


const Header = () => {
    return (
        <div className={`  main-container overflow-hidden  rounded-3xl`}>
            <div className='w-full min-h-[90vh] items-center flex flex-col py-5 gap-14 lg:h-[600px] lg:flex-row'>
                <div className="w-full text-center lg:text-start lg:w-[55%] pt-10 lg:pt-0">
                    <p className='text-[#0f95ee] uppercase sm:text-lg mb-5 tracking-wider'>Namangan Muhandislik qurilish instutining</p>
                    <h1 className='text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#0C2E60]'>Raqamli ta'lim resurslari platformasi</h1>
                    <a href="#kafedralar">
                        <button className='bg ms-3 px-6 mt-8 hover:shadow-xl hover:shadow-[#0f95ee] shadow-lg shadow-[#0f95ee]/80 py-3 rounded-md text-white'>Kafedralar</button>
                    </a>
                </div>
                <div className='w-full text-center lg:text-start lg:w-[45%]'>
                    <HeaderAnimation />
                </div>
            </div>
        </div>
    )
}

export default Header
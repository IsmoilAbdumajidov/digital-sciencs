import React from 'react'
import "./spinner.css"
const Spinner = () => {
    return (
        <div className='flex justify-center items-center fixed z-30 backdrop-blur-md top-0 left-0 w-full h-screen'>
            <div className="half-circle-spinner">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
            </div>
        </div>
    )
}

export default Spinner
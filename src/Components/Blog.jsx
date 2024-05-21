import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";


const Blog = () => {
    return (
        <>
            <div className='h-auto w-full pt-48 bg-[rgb(252,252,253)]' id='Blog'>
                <div className='blog'>
                    <h1 className='text-[#11204D] font-semibold text-[40px] text-center Font'>Want to work together!</h1>
                    <h1 className='text-[#11204D] font-semibold text-[25px] text-center mt-5'>I'm available for freelance work.</h1>
                    <button className='w-max px-7 py-4 bg-[#11204D] rounded-xl font-semibold flex items-center gap-1 text-white m-auto mt-10'>
                        <p>Hire Me</p>
                        <div className="text-2xl"><MdKeyboardArrowRight /></div>
                    </button>
                </div>
                <img className='h-auto bg-center bg-cover mt-20' src="https://res.cloudinary.com/dratc41d6/image/upload/v1713600802/programming-background-with-person-working-with-codes-computer-scaled_tunjo3.jpg" alt="" />
            </div>
        </>
    )
}

export default Blog
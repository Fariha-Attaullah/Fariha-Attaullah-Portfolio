import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
const Home = () => {
    return (
        <>
            <div id='Home' className="h-auto w-full bg-[rgb(252,252,253)] py-48 px-20">
                <div className="h-auto w-full flex home-div">
                    <div className='h-auto w-[55%] home-div1'>
                        <h1 className='text-6xl font-light text-[#11204D] h-text'>Hello</h1>
                        <h1 className='text-6xl font-light text-[#11204D] h-text'>I'm <span className='font-bold'>Fariha Attaullah</span></h1>
                        <h1 className='text-4xl font-semibold mt-8 text-[#6138BD] h-text'>Frontend Developer</h1>
                        <div className='main text-4xl font-semibold text-[#6138BD] mt-3'>
                            <h1 className='absolute s-1'>JavaScript</h1>
                            <h1 className='absolute s-2'>React JS</h1>
                            <h1 className='absolute s-3'>Next JS</h1>
                        </div>
                    </div>
                    <div className='h-auto w-[50%] flex gap-5 flex-wrap justify-end home-div2'>
                        <div className='slide'>
                            <img className='rounded-lg' src="https://res.cloudinary.com/dratc41d6/image/upload/v1713085254/HTML_qhvhot.png" alt="" />
                        </div>
                        <div className='slide'>
                            <img className='rounded-lg' src="https://res.cloudinary.com/dratc41d6/image/upload/v1713085331/js_nidwp7.png" alt="" />
                        </div>
                        <div className='slide'>
                            <img className='rounded-lg' src="https://res.cloudinary.com/dratc41d6/image/upload/v1713085388/jquery_koke6x.png" alt="" />
                        </div>
                        <div className='slide'>
                            <img className='rounded-lg' src="https://res.cloudinary.com/dratc41d6/image/upload/v1713085666/Reactjs_jupjbi.png" alt="" />
                        </div>
                        <div className='slide'>
                            <img className='rounded-lg' src="https://res.cloudinary.com/dratc41d6/image/upload/v1713085689/next_lbvdzn.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='h-auto flex justify-between w-full mt-10 fariha '>
                    <div className='w-[83%] text-[23px] text-[#11204DB3] text-1'>Specializing in <span className='text-[#11204D] font-semibold'>Frontend</span> development, I possess over year of professional expertise in web development. My repertoire includes leveraging cutting-edge technologies such as <span className='text-[#11204D] font-semibold'>React.js</span> and <span className='text-[#11204D] font-semibold'>Next.js</span> to construct robust digital solutions. In addition to building brands, I collaborate with clients to create transformative <span className='text-[#11204D] font-semibold'>products</span> and <span className='text-[#11204D] font-semibold'>services</span>, drive innovation, identify lucrative opportunities, and validate ideas.</div>
                    <div className='w-[145px] h-[170px] rounded-lg bg-[rgb(98,56,190)] text-white pb-10 exp'>
                        <p className='font-semibold text-[80px] text-center font-sans -mt-3'>1+</p>
                        <p className='text-[16px] text-stone-300 text-center -mt-2'>YEAR OF EXPERIENCE</p>
                    </div>
                </div>
                <div className='h-auto w-max font-semibold text-[17px] flex items-center mt-20 socials'>Follow Me on
                    <div className='h-[2px] w-[100px] bg-slate-300 ml-[20px] mt-1 gray-div'></div>
                    <div className="w-max flex gap-3 ml-5 social-main">
                        <div className="h-12 w-12 bg-white flex items-center justify-center rounded-lg border ">
                            <a href="https://github.com/Fariha-Attaullah" target='_blank'>
                                <BsGithub className=' text-black text-xl social' />
                            </a>
                        </div>
                        <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center border ">
                            <a href="https://www.linkedin.com/in/fariha-attaullah-113a5a294/" target='_blank'>
                                <FaLinkedinIn className=' text-black text-xl social' />
                            </a>
                        </div>
                        <div className="h-12 w-12 rounded-lg border bg-white flex items-center justify-center ">
                            <a href="https://www.instagram.com/call_me_fariha.__/" target='_blank' >
                                <RiInstagramFill className=' text-black text-xl social' />
                            </a>
                        </div>
                        <div className="h-12 w-12 rounded-lg border bg-white flex items-center justify-center">
                            <a href="https://twitter.com/farihajutt86" target='_blank' >
                                <BsTwitterX className=' text-black text-lg social' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
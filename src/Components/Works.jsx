import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";


const Works = () => {
    return (
        <>
            <div className='h-max w-full pt-48 pb-20 px-20  bg-[rgb(247,248,250)]' id='Works'>
                <h1 className='text-[#11204D] font-semibold text-[36px] text-center Font'>Frontend Web Developer Portfolio</h1>
                <p className='text-center mt-2 text-[14px] text-[#11204D59] Font font-medium'>Just some of the projects I worked on</p>
                <div className='mt-12 overflow-hidden'>
                    <div className="cursor-pointer rounded-lg h-[400px] w-[70%] m-auto mt-20 project">
                        <img className='rounded-lg h-full' src="https://res.cloudinary.com/dratc41d6/image/upload/v1715518089/Kfc_clone_kjeanz.png"  alt="Kfc Clone" />
                    </div>
                    <h1 className='text-center text-2xl mt-10 underline'>
                        <a href="https://graceful-baklava-c3ff67.netlify.app/" target="_blank" rel="noopener noreferrer">
                            KFC Website Clone
                        </a>
                    </h1>
                    <p className='text-center mt-3'>I build the responsive KFC Website Clone by using React.js & Tailwind CSS</p>
                    <div className="cursor-pointer rounded-lg h-[400px] w-[70%] m-auto mt-20 project">
                        <img className='rounded-lg h-full' src="https://res.cloudinary.com/dratc41d6/image/upload/v1715587683/jewellery_app_axqzqk.png"  alt="Jewellery Site" />
                    </div>
                    <h1 className='text-center text-2xl mt-10 underline'>
                        <a href="https://jewellerysite.netlify.app/" target="_blank" rel="noopener noreferrer">
                            Jewellery Site
                        </a>
                    </h1>
                    <p className='text-center mt-3'>I build the responsive Jewellery E-commerce website by using HTML , CSS & Bootstrap.</p>
                    <div className="cursor-pointer rounded-lg h-[400px] w-[70%] m-auto mt-20 project">
                        <img className='rounded-lg h-full' src="https://res.cloudinary.com/dratc41d6/image/upload/v1715518992/travel_voyage_vbrsoc.png"  alt="Travel Voyage" />
                    </div>
                    <h1 className='text-center mt-10'>
                        <a className='text-2xl underline' href="https://travelvoyage.netlify.app/" target="_blank" rel="noopener noreferrer">
                            Travel Voyage
                        </a>
                    </h1>
                    <p className='text-center mt-3'>I build the responsive Travel Voyage website by using React.js & Tailwind CSS</p>
                </div>
                <div className='w-max px-7 py-4 bg-[#11204D] rounded-xl font-semibold text-white m-auto mt-16'>
                    <a className='flex items-center gap-1' href="https://github.com/Fariha-Attaullah?tab=repositories" target='_blank'>
                        <p>See More</p>
                        <div className="text-2xl"><MdKeyboardArrowRight /></div>
                    </a>
                </div>
            </div>
            <div className='h-max w-full bg-white p-20 exp-main'>
                <h1 className='text-[#11204D] font-semibold text-[36px] Font'>My Experience</h1>
                <div className='h-max w-full flex justify-between mt-5 experience'>
                    <div className='p-10 flex w-[50%] gap-10 exp-1'>
                        <div className='text-[17px] text-[#11204DB3] w-[25%]'>2023 - present</div>
                        <div className=' border-l-2 w-[70%]'>
                            <h1 className='text-[19px] text-[#11204D] font-medium ml-8'>WebDevrs</h1>
                            <h1 className='text-[17px] text-[#11204D] font-medium ml-8 mt-2'>Frontend Developer</h1>
                            <p className='ml-8 mt-5 text-[17px] text-[#11204DB3]'>I am responsible for overseeing the coding and successful deployment of various web projects at WebDevrs. Working in Agile environments, I collaborate with cross-functional team and effectively communicate technical concepts to non-technical stakeholders. With strong attention to detail, problem-solving abilities, and a quick learning aptitude, I am a valuable asset to any development team. My expertise lies in building stable and maintainable codebases using React and Next technologies.</p>
                        </div>
                    </div>
                    <div className='p-10 w-[50%] flex gap-10 exp-2'>
                        <div className='text-[17px] text-[#11204DB3] w-[25%]'>March 2024 - April 2024</div>
                        <div className=' border-l-2 w-[70%]'>
                            <h1 className='text-[19px] text-[#11204D] font-medium ml-8'>CodSoft</h1>
                            <h1 className='text-[17px] text-[#11204D] font-medium ml-8 mt-2'>Web Development Intern</h1>
                            <p className='ml-8 mt-5 text-[17px] text-[#11204DB3]'>As a Web Developer intern at Codsoft during a 4-week online internship, I was responsible for constructing robust and maintainable codebases utilizing React. I developed responsive templates using modern CSS techniques and JavaScript libraries, and implemented new features, functionalities, and capabilities using JavaScript, Ajax, and JSON. Throughout the internship, I completed various tasks, including watching instructional videos, solving quizzes, and creating projects.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Works
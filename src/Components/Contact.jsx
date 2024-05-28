import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from 'react-icons/ri';
import { FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() === '' || message.trim() === '') {
            alert('Please fill out required fields');
            return;
        }
        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        const formData = new FormData();
        formData.append('access_key', '8f193b9c-b31f-420a-b20b-48aa59c252da');
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    alert('Form submitted successfully. Thank you for your submission! We will contact you soon.');
                    setName('');
                    setEmail('');
                    setMessage('');
                } else {
                    alert('Failed to submit form. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                alert('Failed to submit form. Please try again.');
            });
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    return (
        <>
            <div className='h-auto w-full px-20 py-32 bg-[rgb(247,248,250)] text-black' id='Contact'>
                <div className='flex justify-between mt-16 contact'>
                    <div className='w-[40%] con-1'>
                        <h1 className='text-[#11204D] font-semibold text-[36px] Font'>Say Hello</h1>
                        <p className='text-xl mt-10 text-[#11204DB3]'>Grab a coffee with me, and <span className='clr'>let's chat </span>– because the best collaborations often start with a simple 'hello.</p>
                        <div className='text-xl font-medium text-[#11204D] mt-10 flex items-center gap-2'>
                            <IoLocationSharp />
                            My Location
                        </div>
                        <p className='text-[#11204DB3] mt-2'>Lahore, Pakistan</p>
                        <div className='h-auto w-max font-bold text-[17px] flex items-center mt-10 Font socials'>Connect
                            <div className='h-[2px] w-[100px] bg-slate-300 ml-[20px] mt-1 gray-div'></div>
                            <div className="w-max flex gap-3 ml-5 social-main">
                                <div className="h-12 w-12 bg-white flex items-center justify-center rounded-lg border">
                                    <a href="https://github.com/Fariha-Attaullah" target="_blank" rel="noopener noreferrer">
                                        <BsGithub className='text-black text-xl social' />
                                    </a>
                                </div>
                                <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center border">
                                    <a href="https://www.linkedin.com/in/fariha-attaullah-113a5a294/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedinIn className='text-black text-xl social' />
                                    </a>
                                </div>
                                <div className="h-12 w-12 rounded-lg border bg-white flex items-center justify-center">
                                    <a href="https://www.instagram.com/call_me_fariha.__/" target="_blank" rel="noopener noreferrer">
                                        <RiInstagramFill className='text-black text-xl social' />
                                    </a>
                                </div>
                                <div className="h-12 w-12 rounded-lg border bg-white flex items-center justify-center">
                                    <a href="https://twitter.com/farihajutt86" target='_blank' rel="noopener noreferrer" >
                                        <BsTwitterX className=' text-black text-lg social' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-[40%] con-2'>
                        <form onSubmit={handleSubmit}>
                            <input
                                className='w-[90%] border rounded-md p-5 h-[30px] input'
                                type="text"
                                placeholder='Your Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                className='w-[90%] border rounded-md p-5 h-[30px] mt-5 input'
                                type="email"
                                placeholder='Your Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <p className='text-[13.5px] mt-3 ml-2 text-[#11204DB3]'>This field is required.</p>
                            <textarea
                                className='mt-5 border rounded-md p-5 input'
                                placeholder='Your Message'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows="7"
                                cols="50"
                            ></textarea>
                            <p className='text-[13.5px] mt-2 ml-2 text-[#11204DB3]'>This field is required.</p>
                            <button
                                type='submit'
                                className='mt-10 bg-[rgb(97,56,189)] text-white font-semibold px-8 py-4 rounded-md flex items-center gap-3 submit-btn '
                            >
                                Send Now <FaLocationArrow className='text-lg' />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;

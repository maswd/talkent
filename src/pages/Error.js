import React from 'react';
import { Link } from 'react-router-dom'
const Error = () => {
    return (
        <div className='flex items-center h-screen w-screen flex-col justify-center p-8 space-y-2 overflow-hidden'>
            <img src='/svg/undraw_page_not_found_re_e9o6.svg' className='max-w-2xl w-full block' alt='not found' />
            <h3 className=''>اوه! صفحه ای پیدا نشد...</h3>
            <p className='text-gray-500'>ما نتوانستیم صفحه مورد نظر شمار پیدا کنیم !</p>
            <Link to='/' className='hover:underline text-[#F9A826]'> برگشت به صفحه اصلی</Link>
        </div>
    )
}

export default Error;

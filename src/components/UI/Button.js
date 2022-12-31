import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = ({ link, text, bg, color, svg }) => {
    return (
        <div className='w-full flex items-center justify-between bg-gradient-to-br from-gray-50 to-from-gray-100  py-2 px-6 shadow rounded text-[#F9A826] '>
            <NavLink end className={({ isActive }) => (`${isActive && 'text-[#7d4089] font-bold '} text-sm`)} to={link}>{text}</NavLink>
            <span className={`inline-block align-middle p-1 float-left rounded-xl ${bg} ${color}`}>
                {svg}
            </span>
        </div >
    );
}

export default Button;

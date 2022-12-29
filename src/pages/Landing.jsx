import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <>

            <section className="bg-gray-100 w-full max-w-7xl mx-auto flex px-5 md:my-24  md:flex-row flex-col items-center space-y-10 md:space-y-0">
                <div className="lg:w-full md:w-1/2 w-5/6 mt-7 md:mt-0 ">
                    <img className="object-cover object-center rounded" alt="hero" src="/svg/undraw_work_chat_re_qes4.svg" />
                </div>
                <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-right items-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        خــوش آمــدیــد
                    </h1>
                    <p className="mb-8 mt-4 leading-relaxed">
                        بستری برای خواندن، گفتگو درباره‌ی موضوعات مورد علاقه و به اشتراک‌گذاری ایده‌های اصیل و عمیق در زندگی شخصی، حرفه‌ای و اجتماعی است.                        </p>
                    <div className="flex justify-center w-full">
                        <Link to='/login'   className="flex items-center text-white bg-yellow-500 border-0 py-2 px-20 focus:outline-none hover:bg-yellow-600 rounded whitespace-nowrap text-lg">ورود به سایت</Link>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Landing;

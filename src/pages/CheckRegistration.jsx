import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../context/context";
const CheckRegistration = () => {
  const LoginContext = useContext(context);
  const { validator, phone, setPhone, handleCheck } = LoginContext;

  return (
    <section className=" text-gray-600 h-screen flex items-center m-2">
      <div className="container mx-auto w-full ">
        <div className="bg-white rounded-[14px] mx-auto flex flex-col items-center justify-center md:grid md:grid-cols-2 grid-cols-1 max-w-fit ">
          <div className=" text-center mx-auto rounded-t-[14px] md:rounded-r-none  md:rounded-l-[14px] bg-[#F9A826]">
            <img
              className="object-cover object-center rounded md:py-8 my-0 md:my-8 "
              alt="hero"
              src="svg/Mobile Phone_Flatline 1.svg"
            />
          </div>
          <div className=" flex flex-col justify-around items-center w-full mx-auto md:order-first h-full p-4 ">
            <img
              src="svg/logo-no-background.png"
              className="hidden md:block object-cover object-center rounded max-w-[40%] "
              alt=""
            />
            <h2 className="text-lg text-gray-900 text-right w-full mt-4">
              ورود | ثبت‌نام
            </h2>
            <p className="text-lg text-right  text-gray-700 mt-4  w-full">
              سلام!
            </p>
            <p className="text-lg text-right text-gray-700 mb-4  w-full">
              لطفا شماره موبایل خود را وارد کنید
            </p>
            <div className="w-full">
              <form onSubmit={handleCheck}>
                <div className="w-full text-right space-y-0">
                  <input
                    type="text"
                    id="hero-field"
                    name="hero-field"
                    placeholder="شماره همراه "
                    value={phone|| ""}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      validator.current.showMessageFor("phone");
                    }}
                    className="mb-1 w-full leading-6 bg-gray-200 placeholder:text-zinc-400 rounded border shadow focus:ring-1 focus:ring-[#F9A826] focus:border-[#F9A826] text-lg outline-none py-3 px-3 transition"
                  />
                  {validator.current.message(
                    "phone",
                    phone,
                    "required|regex:09|numeric|min:11|max:11"
                  )}
                </div>
                <button
                  type="submit"
                  className="mt-2 text-white w-full text-sm bg-[#7315BC]/80 border-0 py-4 px-6 focus:outline-none hover:bg-opacity-100 rounded transition"
                >
                  ورود به سایت
                </button>
              </form>
            </div>
              <Link to="/" className="mt-3">برگشت به صفحه اصلی</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckRegistration;

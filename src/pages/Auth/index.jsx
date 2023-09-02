

import { NavLink, Outlet, Link } from "react-router-dom";
import "./style.scss";
const index = () => {
    return (
        <section className="w-screen h-screen relative">
            <span className="absolute top-5 left-5">
                <Link to="/" title="Home">
                    <svg className="w-8 h-8 text-indigo-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg>
                </Link>
            </span>
            <div className="flex items-center justify-center h-full">
                <div className="flex flex-col w-[370px] border p-5 rounded-[24px] bg-white shadow-xl">
                    <nav className="auth-nav mb-5 cursor-pointer text-[22px] text-[#EEEEEE] font-bold flex items-center justify-center gap-x-6">
                        <NavLink to="login">Вход</NavLink>
                        <NavLink to="registration">Регистрация</NavLink>
                    </nav>

                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;
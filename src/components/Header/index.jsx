
import { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

import user from "../../assets/images/user.png";
const index = () => {
    const [dark, setDark] = useState(false);
   
    const isAuth = localStorage.getItem("token");

    function toggleDarkMode() {
        setDark(!dark);
        document.documentElement.classList.toggle("dark");
    }

    return (
        <header className="duration-300 shadow-md fixed top-0 left-0 z-50 bg-[rgba(255, 255, 255, .6)] dark:bg-gray-700 backdrop-blur-[10px] w-full">
            <div>
                <nav className="flex justify-between items-center py-[5px] px-5 h-[51px]">
                    <Link to="/">
                        <svg width="84" height="17" viewBox="0 0 84 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_114)">
                                <path
                                    d="M0 1.788V3.898H3.368V9.078C3.368 11.38 4.736 11.86 6.735 11.86C7.998 11.86 8.525 11.668 8.525 11.668V9.653C8.525 9.653 8.209 9.749 7.577 9.749C6.63 9.749 6.314 9.461 6.314 8.599V3.897H9.893V1.787H0V1.788ZM9.674 6.776C9.674 9.692 11.463 12.051 15.146 12.051C19.672 12.051 20.303 8.502 20.303 8.502H17.356C17.356 8.502 17.041 10.037 15.252 10.037C13.484 10.037 12.768 8.886 12.642 7.351H20.387C20.387 7.351 20.408 7.006 20.408 6.776C20.408 3.86 18.746 1.5 15.146 1.5C11.547 1.5 9.674 3.86 9.674 6.776ZM15.146 3.514C16.599 3.514 17.188 4.397 17.378 5.624H12.726C12.978 4.397 13.694 3.514 15.146 3.514ZM29.244 9.653H23.877V1.788H20.93V11.764H29.244V9.654V9.653ZM28.914 6.776C28.914 9.692 30.703 12.051 34.386 12.051C38.912 12.051 39.543 8.502 39.543 8.502H36.596C36.596 8.502 36.281 10.037 34.492 10.037C32.724 10.037 32.008 8.886 31.882 7.351H39.627C39.627 7.351 39.648 7.006 39.648 6.776C39.648 3.86 37.986 1.5 34.386 1.5C30.787 1.5 28.914 3.86 28.914 6.776ZM34.386 3.514C35.839 3.514 36.428 4.397 36.617 5.624H31.966C32.218 4.397 32.934 3.514 34.386 3.514ZM39.323 1.788V3.898H42.69V9.078C42.69 11.38 44.059 11.86 46.058 11.86C47.321 11.86 47.848 11.668 47.848 11.668V9.653C47.848 9.653 47.532 9.749 46.9 9.749C45.953 9.749 45.637 9.461 45.637 8.599V3.897H49.215V1.787H39.323V1.788ZM60.476 1.788H57.32L55.152 8.368L52.479 1.788H49.32L53.74 11.764C53.319 12.684 52.898 13.202 51.845 13.202C51.3826 13.1986 50.9226 13.1344 50.477 13.011V15.217C50.477 15.217 51.319 15.504 52.372 15.504C54.582 15.504 55.718 14.334 56.582 12.051L60.475 1.788H60.476ZM60.788 15.217H63.735V10.708H63.84C63.84 10.708 64.787 12.051 67.102 12.051C70.259 12.051 71.838 9.557 71.838 6.776C71.838 3.994 70.259 1.5 67.102 1.5C64.682 1.5 63.734 3.13 63.734 3.13H63.629V1.789H60.788V15.218V15.217ZM63.629 6.776C63.629 4.972 64.471 3.514 66.26 3.514C68.05 3.514 68.891 4.972 68.891 6.776C68.891 8.579 68.049 10.037 66.261 10.037C64.471 10.037 63.629 8.579 63.629 6.776ZM72.266 6.776C72.266 9.692 74.055 12.051 77.738 12.051C82.263 12.051 82.895 8.502 82.895 8.502H79.948C79.948 8.502 79.632 10.037 77.843 10.037C76.075 10.037 75.36 8.886 75.233 7.351H82.979C82.979 7.351 83 7.006 83 6.776C83 3.86 81.337 1.5 77.738 1.5C74.138 1.5 72.266 3.86 72.266 6.776ZM77.738 3.514C79.19 3.514 79.78 4.397 79.969 5.624H75.318C75.57 4.397 76.286 3.514 77.738 3.514Z"
                                    fill="#1A1919" className="dark:fill-white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_114">
                                    <rect width="84" height="17" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    <div className="flex gap-x-5 items-center cursor-pointer">
                        <div onClick={toggleDarkMode}>
                            {
                                dark ?
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z" />
                                    </svg> :

                                    <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z" />
                                    </svg>
                            }
                        </div>
                        {
                            isAuth ?
                                <div className="flex items-center gap-x-5 ">
                                    <span>
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </span>
                                    <span className="block h-[40px] w-[2px] bg-[#e0e0e0]"></span>
                                    <div className="flex items-center gap-x-3">
                                        <img src={user} alt="pic" className="w-6 h-6 bg-lime-500 rounded-full" />
                                        <p className="text-[13px] font-semibold text-[#1A1919]">{localStorage.getItem("username")}</p>
                                    </div>
                                </div>
                                :
                                <Link to="auth/login" className="bg-[#5B41F5] text-white text-[13px] py-[8px] px-[10px] rounded-[7px] font-semibold">Войти</Link>

                        }


                    </div>

                </nav>

            </div>
        </header>
    );
};

export default index;
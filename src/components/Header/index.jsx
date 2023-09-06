
import { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

import user from "../../assets/images/user.png";
const index = () => {
    const [dark, setDark] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const isAuth = localStorage.getItem("token");

    function toggleDarkMode() {
        setDark(!dark);
        document.documentElement.classList.toggle("dark");
    }
    function logOut(){
        localStorage.clear();
        setDropdown(!dropdown)
    }
    return (
        <header className="duration-300 shadow-md fixed top-0 left-0 z-50 bg-[rgba(255, 255, 255, .6)] dark:bg-gray-700 backdrop-blur-[10px] w-full">
            <div>
                <nav className="flex justify-between items-center py-[5px] px-5 h-[51px] relative">
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
                                    <Link to="/createblog">
                                        <span>
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                        </span>
                                    </Link>

                                    <span className="block h-[40px] w-[2px] bg-[#e0e0e0]"></span>
                                    <div className="flex items-center gap-x-3">
                                        <img src={user} alt="pic" className="w-6 h-6 bg-lime-500 rounded-full" />
                                        <p onClick={() => setDropdown(!dropdown)} className="text-[13px] font-semibold text-[#1A1919] dark:text-white">{localStorage.getItem("username")}</p>
                                    </div>

                                </div>
                                :
                                <Link to="auth/login" className="bg-[#5B41F5] text-white text-[13px] py-[8px] px-[10px] rounded-[7px] font-semibold">Войти</Link>

                        }


                    </div>

                    {
                        dropdown ?
                            <div className="absolute w-screen h-screen bg-[#000000B3] z-40 top-[100%] left-0 pt-5 flex items-start justify-end">
                                <div className="w-[400px]  rounded-[24px] bg-white p-5 me-8">
                                    <h2 className="flex items-center gap-x-3 mb-4"><img src={user} alt="pic" className="w-10 h-10 bg-lime-500 rounded-full" /> <span className="text-[22px] text-[#1A1919] font-semibold"> {localStorage.getItem("username")}</span></h2>
                                    <p className="text-[16px] font-semibold text-gray-700 mb-2">Блог</p>
                                    <div className="flex items-center gap-x-3  px-3 py-[14px] border rounded-[16px] hover:bg-gray-100 cursor-pointer duration-200 mb-2">
                                        <img src={user} alt="pic" className="w-6 h-6 bg-lime-500 rounded-full" /> <span className="text-[15px] text-[#1A1919] font-semibold"> {localStorage.getItem("username")}</span>
                                    </div>
                                    <div className="flex items-center gap-x-[2px] text-[15px] font-medium hover:bg-gray-100 rounded-md cursor-pointer duration-200 p-1 mb-2">
                                        <svg data-v-5b5e6a25="" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32" className="icon accountPopup__action_icon" data-icon="settings"><path fillRule="evenodd" d="M12.536 8.75c-.447 0-.86.238-1.082.625l-3.464 6a1.252 1.252 0 000 1.25l3.463 6c.223.387.636.625 1.083.625h6.928c.446 0 .86-.238 1.082-.625l3.464-6a1.252 1.252 0 000-1.25l-3.464-6a1.249 1.249 0 00-1.081-.625h-6.93zm-2.382-.125a2.75 2.75 0 012.382-1.375h6.929c.982 0 1.89.524 2.38 1.375l3.465 6c.49.85.49 1.899 0 2.75l-3.464 6a2.75 2.75 0 01-2.382 1.375h-6.928c-.983 0-1.89-.524-2.382-1.375l-3.464-6a2.752 2.752 0 010-2.75l3.464-6z" clip-rule="evenodd"></path><path fillRule="evenodd" d="M18.27 13.73a3.209 3.209 0 10-4.538 4.538l-.531.531.53-.53a3.209 3.209 0 004.538 0l.53.53-.53-.53a3.209 3.209 0 000-4.538zm1.06-1.06a4.709 4.709 0 10-6.66 6.66 4.709 4.709 0 006.66-6.66z" clipRule="evenodd">
                                        </path>
                                        </svg>Настройки
                                    </div>
                                    <div onClick={() => logOut()} className="flex items-center gap-x-[2px] text-[15px] font-medium hover:bg-gray-100 rounded-md cursor-pointer duration-200 p-1">
                                        <svg data-v-5b5e6a25="" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32" className="icon accountPopup__action_icon" data-icon="logout"><path d="M16 26.5c5.744 0 10.5-4.766 10.5-10.5 0-5.744-4.766-10.5-10.51-10.5C10.256 5.5 5.5 10.256 5.5 16c0 5.734 4.766 10.5 10.5 10.5zm0-1.75A8.708 8.708 0 017.26 16c0-4.859 3.87-8.75 8.73-8.75A8.732 8.732 0 0124.75 16 8.71 8.71 0 0116 24.75zm0-8.523c.401 0 .69-.3.69-.71v-4.5c0-.411-.289-.7-.69-.7-.402 0-.68.289-.68.7v4.5c0 .41.278.71.68.71zm0 5.146c2.944 0 5.394-2.45 5.394-5.383 0-1.472-.659-2.944-1.76-3.953-.71-.66-1.668.35-.947 1.03a3.995 3.995 0 011.287 2.923A3.95 3.95 0 0116 19.963a3.941 3.941 0 01-3.963-3.973c0-1.133.453-2.172 1.276-2.934.72-.68-.237-1.688-.937-1.02a5.368 5.368 0 00-1.77 3.954c0 2.934 2.45 5.383 5.394 5.383z"></path></svg>
                                        Выйти
                                    </div>
                                </div>
                            </div> : null
                    }

                </nav>

            </div>
        </header>
    );
};

export default index;
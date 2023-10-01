
import useBlog from "../../service/blog/useBlog";
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { SET_SINGLE_BLOG, SET_ERROR_BLOG, SET_LOADER_BLOG_OFF, SET_LOADER_BLOG_ON, SET_LIKE, SET_DISLIKE } from "../../redux/action/actions";
import "./style.scss";


const index = () => {

    const { blog, likeCount, dislikeCount, loadingBlog } = useSelector((data) => data);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const getSingleBlog = async () => {

        try {
            const response = await useBlog.getBlogItem(id);
            if (response.status === 200) {
                dispatch(SET_SINGLE_BLOG(response.data));
                dispatch(SET_LOADER_BLOG_OFF());
            }

        } catch (err) {
            dispatch(SET_ERROR_BLOG(err.message));
        }
    }

    const back = () => {
        navigate(-1);
    }

    document.title = `${blog?.title}`;
    useEffect(() => {
        dispatch(SET_LOADER_BLOG_ON());
        getSingleBlog();

    }, [])
    const date = new Date(blog?.createdAt);
    const monthNames = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря"
    ];

    if (loadingBlog) {
        return <div className="loader-single-blog w-screen h-screen bg-white fixed z-40 top-0 left-0 flex items-center justify-center">
            <svg viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
            </svg>
        </div>
    }

    return (
        <section className='pt-[150px] pb-8 relative'>
            <div onClick={() => back()}>
                <span title="Back" className="absolute top-20 left-5 w-[40px] h-[40px] hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer duration-200 flex items-center justify-center rounded-full">

                    <svg className="w-5 h-5 text-indigo-600  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                    </svg>
                </span>
            </div>

            <div className='container'>
                <div className="wrapper">

                    <div className="flex items-center justify-between mb-5 text-[16px]">
                        <div>
                            <h1 className="text-xl font-semibold dark:text-white mb-2">{blog?.user?.full_name}</h1>
                            <h2 className="text-xl font-semibold text-gray-400">{blog?.user?.username}</h2>
                        </div>
                        
                        <button className="border-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:border-blue-400">Follow</button>

                    </div>
                    <div className="flex items-center gap-x-4 mb-12 dark:text-white">
                        <span className="text-gray-500">{`${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`}</span>
                        |
                        <span className="flex items-center justify-center text-[16px] dark:text-white">
                            <span className="mr-2">
                                <svg className="w-[18px] h-[26px] text-[#949494] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
                                    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                        <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                        <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                                    </g>
                                </svg>
                            </span>
                            {blog?.views}
                        </span>
                    </div>

                    <h4 className="text-[28px] font-semibold mb-5 dark:text-white">{blog?.title}</h4>
                    <p className="text-[17px] text-[#1A1919] text-justify border-b-[1px] pb-5 dark:text-white mb-10">{blog?.body}</p>

                    <div className="flex items-center gap-x-5">
                        <div onClick={() => dispatch(SET_LIKE())} className="hover:bg-gray-100 dark:hover:bg-gray-600 duration-200 active:border-indigo-500 flex flex-col items-center justify-between rounded-[16px] w-[58px] h-[58px] border pt-[5px] cursor-pointer">
                            <svg className="w-5 h-5 text-yellow-300 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                            </svg>
                            <span className="text-gray-500 text-[12px] dark:text-white">{likeCount}</span>
                        </div>

                        <div onClick={() => dispatch(SET_DISLIKE())} className="hover:bg-gray-100 dark:hover:bg-gray-600 duration-200 active:border-indigo-500 flex flex-col items-center justify-between rounded-[16px] w-[58px] h-[58px] border pt-[5px] cursor-pointer">
                            <svg className="w-5 h-5 text-yellow-300 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                <path d="M11.955 2.117h-.114C9.732 1.535 6.941.5 4.356.5c-1.4 0-1.592.526-1.879 1.316l-2.355 7A2 2 0 0 0 2 11.5h3.956L4.4 16a1.779 1.779 0 0 0 3.332 1.061 24.8 24.8 0 0 1 4.226-5.36l-.003-9.584ZM15 11h2a1 1 0 0 0 1-1V2a2 2 0 1 0-4 0v8a1 1 0 0 0 1 1Z" />
                            </svg>
                            <span className="text-gray-500 text-[12px] dark:text-white">{dislikeCount}</span>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default index;
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/UI/Card/Card";

import { useDispatch, useSelector } from "react-redux";
import { SET_BLOGS, SET_ERROR, SET_LOADER_OFF, SET_LOADER_BLOG_ON, SET_LOADER_ON } from "../../redux/action/actions";
import "./style.scss"
import blogAPI from "../../service/blog";
const index = () => {
    const isAuth = localStorage.getItem("token");

    const { blogs, loading } = useSelector((data) => data);
    const dispatch = useDispatch();

    const getBlogs = async () => {
        try {
            const response = await blogAPI.blogs();

            if (response.status === 200) {
                dispatch(SET_BLOGS(response.data));
                dispatch(SET_LOADER_OFF());
            }
        } catch (err) {
            dispatch(SET_ERROR(err.message));
        }
    }

    useEffect(() => {
        dispatch(SET_LOADER_ON())
        getBlogs();
        document.title = "Teletype";
    }, [])

    if (loading) {
        return <div className="loader-blogs w-screen h-screen bg-white fixed z-40 top-0 left-0 flex items-center justify-center">
            <svg viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
            </svg>
        </div>
    }
    return (
        <section className="pt-[150px]">
            <div className="container">
                <div className="flex flex-col items-center">
                    {
                        isAuth ? null :
                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center mb-20">
                                    <img className="w-[180px] h-[210px]" src="https://teletype.in/static/creator_1.384f0200.png" alt="image" />
                                    <img className="w-[220px] h-[249px]" src="https://teletype.in/static/creator_2.7acffef4.png" alt="image" />
                                    <img className="w-[270px]" src="https://teletype.in/static/creator_3.a7fd827b.png" alt="image" />
                                    <img className="w-[220px] h-[252px]" src="https://teletype.in/static/creator_4.56075bfd.png" alt="image" />
                                    <img className="w-[180px] h-[189px]" src="https://teletype.in/static/creator_5.929dec81.png" alt="image" />
                                </div>

                                <h1 className="mb-2 font-bold text-[96px] text-[#1A1919] dark:text-white text-center w-[1200px]">Монетизируйте свой контент на Teletype</h1>

                                <p className="font-medium text-center mx-auto text-[32px] text-[#1A1919] dark:text-white w-[1100px] mb-16">Teletype — это готовый набор инструментов, позволяющий публиковать и монетизировать ваши заметки, посты, видео, фотографии, подкасты и песни.</p>
                                <Link to="auth/login" className="mb-8 bg-[#5B41F5] font-semibold px-8 py-6 rounded-[16px] text-[15px] text-white">Создать блог в Teletype</Link>
                            </div>
                    }
                   

                    <div className="flex flex-col items-center gap-y-4  py-5 min-w-full">
                        {
                            blogs?.map((item) => {
                                return <Card key={item.id} case={item} />
                            })
                        }

                    </div>
                    
                </div>

            </div>
        </section>
    );
};

export default index;
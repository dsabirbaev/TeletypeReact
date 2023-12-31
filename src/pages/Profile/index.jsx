
import user from "../../assets/images/user.png";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useUser from "../../service/user/useUser";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOADER_PROFILE_OFF, SET_LOADER_PROFILE_ON, SET_USER_DATA } from "../../redux/action/actions";
import CardProfile from "../../components/UI/CardProfile/CardProfile";
import { Button } from "antd";
const index = () => {
    const { userData, loadingProfile } = useSelector((data) => data);
    const dispatch = useDispatch();
    const my_id = localStorage.getItem("my_id");
    const { id } = useParams();

    const [isFollow, setIsFollow] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const getUserData = () => {
        useUser.getUser(id).then((res) => {

            dispatch(SET_USER_DATA(res.data))
            dispatch(SET_LOADER_PROFILE_OFF())
        })
    }

  
    const follow = () => {
        setIsLoading(true);
        const followID = {
            following_id: id
        }
       
        useUser.followToUser(followID).then((res) => {
            res.data && setIsLoading(false);
            getUserData()
            setIsFollow(true)
        }).catch((err) => {
            setIsLoading(false);
        })
    }

    useEffect(() => {
        dispatch(SET_LOADER_PROFILE_ON());
        getUserData();

        useUser.getUser(my_id).then((res) => {
            res.data.followings.find((v) =>
                v.following.id === id ? setIsFollow(true) : setIsFollow(false)
            );

        })
    }, [id])

    document.title = `Profile | ${userData?.full_name}`

    if (loadingProfile) {
        return <div className="loader-single-blog w-screen h-screen bg-white fixed z-40 top-0 left-0 flex items-center justify-center">
            <svg viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
            </svg>
        </div>
    }

    return (
        <section className="pt-[120px] pb-5">
            <div className="container">
                <div className="flex gap-x-10">
                    <div className="flex flex-col w-[400px]">
                        <div className="mb-3">
                            <img src={user} alt="pic" className="mb-2 w-[120px] h-[120px] object-contain object-center bg-lime-500 rounded-full" />
                            <h4 className="text-[22px] text-[#1A1919] dark:text-white font-bold">{userData?.full_name}</h4>
                        </div>
                        {
                            id === my_id ? <Link to="/createblog" className="mb-5 min-h-[36px] w-[138px] font-semibold text-[13px] text-[#1A1919] dark:text-white border border-[#1A1919] dark:border-white rounded-[7px] flex items-center justify-center">Новая статья</Link>
                                :
                                <Button
                                    disabled={isFollow === true}

                                    loading={isLoading}
                                    onClick={() => follow()}
                                    className="mb-2 w-full bg-indigo-600 text-white dark:bg-gray-900 dark:text-white"
                                >
                                    {isFollow === true ? "Followed" : "Follow"}
                                </Button>
                        }

                        <ul className="flex items-center gap-x-5 text-[15px] text-[#949494] mb-5">
                            <li>
                                <span className="text-[#1A1919] me-[2px]">{userData?.followers?.length}</span> подписчиков
                            </li>
                            <li>
                                <span className="text-[#1A1919] me-[2px]">{userData?.followings?.length}</span> подписок
                            </li>
                            <li>
                                <span className="text-[#1A1919] me-[2px]">{userData?.blog?.length}</span> статей
                            </li>
                        </ul>

                        <ul className="flex flex-col gap-y-2 py-5 border-t-2 border-b-2 text-[#949494] mb-5">
                            <li className="flex items-center justify-between hover:text-[#1A1919] dark:hover:text-white duration-200">
                                <a href="#">Запланированные</a> <span>0</span>
                            </li>
                            <li className="flex items-center justify-between hover:text-[#1A1919] dark:hover:text-white duration-200">
                                <a href="#">Скрытые</a> <span>0</span>
                            </li>
                            <li className="flex items-center justify-between hover:text-[#1A1919] dark:hover:text-white duration-200">
                                <a href="#">Черновики</a> <span>0</span>
                            </li>
                        </ul>

                        <p className="text-[15px] text-[#1A1919]">Все статьи</p>
                    </div>

                    <div>
                        <div className="flex border items-center w-[500px] rounded-full py-[4px] px-[2px] mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32" className="icon search__form_icon dark:fill-white" data-icon="search" data-v-d7037a0b=""><path fillRule="evenodd" d="M8.747 15.059a6.312 6.312 0 1112.623 0 6.312 6.312 0 01-12.623 0zm11.28 6.028a7.812 7.812 0 111.06-1.06l3.447 3.446a.75.75 0 11-1.06 1.06l-3.447-3.446z" clipRule="evenodd"></path></svg>
                            <input className="focus:ring-0 search text-[14px] dark:bg-transparent appearance-none border-none  outline-0 p-0 w-full" type="text" placeholder="Найти..." />
                        </div>

                        <div className="flex flex-col gap-y-2">

                            {
                                userData?.blog?.map((item) => {
                                    return <CardProfile key={item.id} case={item} getUserData={getUserData} userID={id} />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;
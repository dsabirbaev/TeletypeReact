
import { Link, useNavigate } from "react-router-dom";

import "./style.scss";


const Card = ({ case: { title, body, user, views, createdAt, id}}) => {

    const navigate = useNavigate();
    const date = new Date(createdAt);
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

    const userProfile = () => {
        navigate(`/profile/${user.id}`);
    }

    return (

            
       
            <div className="p-5 border rounded-[16px] hover:border-gray-500 duration-200 w-[800px]">
                <Link to={`blog/${id}`}> 
                    <h2 className="text-[28px] mb-[10px] text-[#1A1919] font-bold dark:text-white hover:underline">{title.slice(0, 20)}</h2>
                </Link>
                
                <p className="text-[17px] text-[#1A1919] mb-5 dark:text-white">{body.length > 250 ? (<>{body.slice(0, 250)} <span className="font-bold"> ...</span> </>) : body}

                </p>
               
                <p onClick={(() => userProfile())} className="mb-[10px] font-bold cursor-pointer hover:underline dark:text-white">● {user?.username}</p>
             
              

                <p className="text-[#949494] flex items-center gap-x-4  dark:text-white">
                    <span>{`${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`}</span>

                    <span className="flex items-center justify-center">
                        <span className="mr-2">
                            <svg className="w-[18px] h-[26px] text-[#949494] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
                                <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                                </g>
                            </svg>
                        </span>
                        {views}
                    </span>
                </p>
            </div>
       
    );
};

export default Card;
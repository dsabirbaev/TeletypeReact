
import { Link } from "react-router-dom";

import "./style.scss";
import useBlog from "../../../service/blog/useBlog";

import { Button, message, Popconfirm } from 'antd';
import { useDispatch, useSelector } from "react-redux";



const CardProfile = ({ case: { title, createdAt, id }, getUserData }) => {

    const {userData} = useSelector((data) => data)
    const dispatch = useDispatch();

   
    const deleteBlogPost = (id) => {

        useBlog.deleteBlog(id).then((res) => {
            getUserData();
           
        }).catch((err) => {
            console.log(err.message)
        })
    }


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

    const confirm = (id) => {
        deleteBlogPost(id)
        message.success('Блог удален!');
     
    };
    

    return (

        <div className="flex justify-between items-center gap-x-4 p-5 border rounded-[16px] hover:border-gray-500 duration-200 w-[800px]">
            <div className="flex items-center justify-between grow">
                <Link to={`/profile/blog/${id}`}>
                    <h2 className="text-[20px] text-[#1A1919] font-semibold hover:text-teal-400 dark:text-white">{title.slice(0, 20)}</h2>
                </Link>
                <p className="text-[#949494]  dark:text-white text-md">
                    {`${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`}
                </p>
            </div>


            <div className="flex items-center gap-x-2">
                <Button className="text-blue-600 border-blue-600"> Изменить </Button>
                <Popconfirm
                    title="Предупреждение!"
                    description="Вы уверены, что хотите удалить эту задачу?"
                    onConfirm={() => confirm(id)} 
                    okText="Да"
                    cancelText="Нет"
                >
                    <Button danger>Удалить</Button>
                </Popconfirm>
            </div>
        </div>

    );
};

export default CardProfile;
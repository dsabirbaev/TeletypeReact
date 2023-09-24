import { useState } from "react";
import useBlog from "../../service/blog/useBlog";

import { useNavigate } from "react-router-dom";
import { message } from "antd";
const index = () => {
    const navigate = useNavigate();
    const id = localStorage.getItem("my_id");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const createBlog = () => {
        const blog = {
            title: title,
            body: body,
            user_id: id
        }

        if (blog.title.trim().length && blog.body.trim().length) {

            useBlog.createBlog(blog).then((res) => {

                message.success("Блог опубликован!");
                navigate(-1);
                setTitle(" ");
                setBody(" ");
            }).catch((err) => {
                console.log(err.message)
                message.error("Ошибка при подключении!");
                
            })
        } else {
            message.warning("Пожалуйста, заполните все поля!");
        }

    }
    const onSubmit = (e) => {
        e.preventDefault();
        createBlog();
    }

    return (
        <section className="pt-[100px] pb-5">
            
            <div className="container">
                <div className="wrapper flex items-center justify-center w-full">
                    <form onSubmit={onSubmit} className="w-[800px]">

                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Заголовок" className="dark:bg-gray-200   border-1 border-indigo-500  outline-none w-full mb-5 rounded-md focus:ring-0" />
                        <textarea value={body} onChange={(e) => setBody(e.target.value)} cols="30" rows="10" placeholder="Наберите текст" className="dark:bg-gray-200 border-1 border-indigo-500  outline-none w-full mb-5 rounde-md focus:ring-0"></textarea>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Опубликовать</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default index;
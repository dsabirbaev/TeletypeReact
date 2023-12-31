import { useState } from "react";
import useBlog from "../../service/blog/useBlog";

import { useNavigate } from "react-router-dom";
import { Button, message } from "antd";
const index = () => {
    const navigate = useNavigate();
    const id = localStorage.getItem("my_id");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const createBlog = () => {
        const blog = {
            title: title,
            body: body,
            user_id: id
        }

        if (blog.title.trim().length && blog.body.trim().length) {

            useBlog.createBlog(blog).then((res) => {

                message.success("Блог опубликован!");
                res.data && setIsLoading(false);
                navigate(-1);
                setTitle(" ");
                setBody(" ");
            }).catch((err) => {
                console.log(err.message)
                setIsLoading(false);
                message.error("Ошибка при подключении!");
                
            })
        } else {
            message.warning("Пожалуйста, заполните все поля!");
        }

    }
    const onSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        createBlog();
    }

    return (
        <section className="pt-[100px] pb-5">
            
            <div className="container">
                <div className="wrapper flex items-center justify-center w-full">
                    <form onSubmit={onSubmit} className="w-[800px]">

                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Заголовок" className="dark:bg-gray-200   border-1 border-indigo-500  outline-none w-full mb-5 rounded-md focus:ring-0" />
                        <textarea value={body} onChange={(e) => setBody(e.target.value)} cols="30" rows="10" placeholder="Наберите текст" className="dark:bg-gray-200 border-1 border-indigo-500  outline-none w-full mb-5 rounde-md focus:ring-0"></textarea>
                
                        <Button loading={isLoading} className="bg-blue-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center" size="large" htmlType="submit">
                            Опубликовать
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default index;
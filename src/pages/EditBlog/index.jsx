
import { useState, useEffect } from "react";
import useBlog from "../../service/blog/useBlog";

import "./style.scss";
import { Button, message } from "antd";
import { useParams } from "react-router-dom";
const index = () => {

    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const getBlog = async () => {

        try {
            const response = await useBlog.getBlogItem(id);
            if (response.status === 200) {
                setTitle(response.data.title)
                setBody(response.data.body)
            }

        } catch (err) {
            console.log(err.message)
        }
    }

    const updateBlog = () => {
        const newBlog = {
            title,
            body
        }

        if (newBlog.title.trim().length && newBlog.body.trim().length) {

            useBlog.updateBlog(id, newBlog).then((res) => {
                res.data && setIsLoading(false);
                message.success("Блог был изменен!");

            }).catch((err) => {
                setIsLoading(false);
                message.error("При подключении возникла ошибка!");
            })
        } else {
            message.warning("Пожалуйста, заполните все поля!");
        }

    }

    const onSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        updateBlog();
    }
    useEffect(() => {
        getBlog();
    }, [])
    return (
        <section className="pt-[100px] pb-5">
            <div className="container">
                <div className="wrapper flex items-center justify-center w-full min-h-[20vh]">
                    <form onSubmit={onSubmit} className="w-[800px]">

                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Заголовок" className="dark:bg-gray-200   border-1 border-indigo-500  outline-none w-full mb-5 rounded-md focus:ring-0" />
                        <textarea value={body} onChange={(e) => setBody(e.target.value)} cols="30" rows="10" placeholder="Наберите текст" className="dark:bg-gray-200 border-1 border-indigo-500  outline-none w-full mb-5 rounde-md focus:ring-0"></textarea>

                        <Button loading={isLoading} className="bg-blue-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center" size="large" htmlType="submit">
                            Изменить
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );

}
export default index;
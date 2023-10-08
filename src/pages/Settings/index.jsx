


import { useState, useEffect } from "react";
import useUser from "../../service/user/useUser";
import { useNavigate } from "react-router-dom";
import { Button, message } from "antd";



const index = () => {
    const id = localStorage.getItem("my_id");

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const getUserData = () => {

        useUser.getUser(id).then((res) => {
            setData(res.data);
            setFullName(res.data?.full_name || "");
            setUsername(res.data?.username || "");
        }).catch((res) => {
            console.log(res);
        })
    }

    const updateData = () => {

        const updateValue = {
            full_name: fullName,
            username: username,
            password: password
        }


        if (updateValue.full_name.trim().length && updateValue.username.trim().length && updateValue.password.trim().length) {

            useUser.updateUser(id, updateValue).then((res) => {

                message.success("Аккаунт обновлён!");
                localStorage.setItem("username", res?.data?.full_name);
                res.data && setIsLoading(false);
                return navigate("/profile");
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
        updateData();
    }


    useEffect(() => {
        getUserData();
    }, [])
    return (
        <section className="pt-[120px] pb-5">
            <div className='container'>
                <div className="flex items-center justify-center flex-col py-4">
                    <h1 className="text-center text-2xl font-bold mb-5 dark:text-white">Обновить данные</h1>
                    <form onSubmit={onSubmit} className="flex flex-col items-center mb-8 w-[500px] border rounded-lg p-5">

                        <input value={fullName} onChange={((e) => setFullName(e.target.value))} type="text" placeholder="John Doe"  className="w-full mb-3 border border-slate-200 py-2 outline-none rounded-[5px] text-[13px] dark:bg-gray-700" />
                        <input value={username} onChange={((e) => setUsername(e.target.value))} type="text" placeholder="@пример"  className="w-full mb-3 border border-slate-200 py-2 outline-none rounded-[5px] text-[13px] dark:bg-gray-700" />
                        <input onChange={((e) => setPassword(e.target.value))} type="password" placeholder="Пароль" className="w-full mb-3 border border-slate-200 py-2 outline-none rounded-[5px] text-[13px] dark:bg-gray-700" />
                       

                        <Button loading={isLoading} className="bg-indigo-600 text-white " size="large" htmlType="submit ">
                            Обновить
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default index;



import { useState } from "react";
import useUser from "../../service/user/useUser";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const index = () => {
    const id = localStorage.getItem("mt_id");
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const updateData = () => {

        const updateValue = {
            full_name: fullName,
            username: username,
            password: password
        }

        if(updateValue.full_name.trim().length && updateValue.username.trim().length && updateValue.password.trim().length){

            useUser.updateUser(id, updateValue).then((res) => {
                message.success("Аккаунт обновлён!");
                return navigate("/profile");
            }).catch((err) => {
                console.log(err);
                message.error("Ошибка при подключении!");
            })

        }else{
            message.warning("Пожалуйста, заполните все поля!");
        }
       
    }
    function onSubmit(e){
        e.preventDefault();
        updateData();
    }
    return (
        <section className="pt-[120px] pb-5">
            <div className='container'>
                <div className="flex items-center justify-center flex-col py-4">
                    <h1 className="text-center text-2xl font-bold mb-5">Обновить данные</h1>
                    <form onSubmit={onSubmit} className="flex flex-col items-center mb-8 w-[500px] border rounded-lg p-5">

                        <input onChange={((e) => setFullName(e.target.value))} type="text" placeholder="John Doe" autoComplete="name" className="w-full mb-3 border border-slate-200 py-2 outline-none rounded-[5px] text-[13px]" />
                        <input onChange={((e) => setUsername(e.target.value))} type="text" placeholder="@пример" autoComplete="email" className="w-full mb-3 border border-slate-200 py-2 outline-none rounded-[5px] text-[13px]" />
                        <input onChange={((e) => setPassword(e.target.value))} type="password" placeholder="Пароль" autoComplete="current-password" className="w-full mb-3 border border-slate-200 py-2 outline-none rounded-[5px] text-[13px]" />
                        <button className="rounded-[36px] bg-[#1A1919] text-white text-[13px] font-semibold w-fit px-[25px] py-[10px]">Обновить</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default index;
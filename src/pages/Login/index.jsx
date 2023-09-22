
import { useState } from "react";
import "./style.scss";
import useUser from "../../service/user/useUser";
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Button, message } from "antd";


const index = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        const loginValue = {
            username: username,
            password: password
        }

        if(loginValue.username.trim().length && loginValue.password.trim().length){
            useUser.login(loginValue).then((res) => {
                localStorage.setItem("token", res?.data?.token);
                localStorage.setItem("username", res?.data?.user?.full_name);
                localStorage.setItem("my_id", res?.data?.user?.id);
                res?.data && message.success("Successfully logged in");

                return navigate("/");
            }).catch((err) => {
                console.log(err.message);
                toast.error("Ошибка!", { autoClose: 1500 });
            })
           
        }else{
            toast.error("Пожалуйста, заполните все поля!", { autoClose: 1500 });
        }
        
          
        
    }

    function onSubmit(e){
        e.preventDefault();
        login();
    }
    return (

        <div className="flex items-center justify-center flex-col">
            <ToastContainer />
            <form onSubmit={onSubmit} className="flex flex-col items-center mb-8 w-full">
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Your username" autoComplete="email" className="text-[13px] w-full mb-3 border border-slate-200 py-2 outline-none rounded-[5px]" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Пароль" autoComplete="current-password" className="text-[13px] w-full mb-3 border border-slate-200 py-2 outline-none rounded-[5px]" />
                <button className="rounded-[36px] bg-[#1A1919] text-white text-[13px] font-semibold w-fit px-[25px] py-[10px]">Войти</button>
            
            </form>
            <div className="flex justify-center items-center gap-x-3 mb-8">
                <span className="w-8 h-8 rounded-full bg-[#2F4694] flex items-center justify-center">
                    <svg className="w-[7px] h-[15px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                    </svg>
                </span>

                <span className="w-8 h-8 rounded-full bg-[#EA4335] flex items-center justify-center">
                    <svg className="w-[15px] h-[16px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                        <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
                    </svg>
                </span>
                <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                    <svg className="w-[13px] h-[16px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                        <path d="M14.537 10.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.339.025-1.769-.794-3.3-.794s-2.009.769-3.275.82c-1.316.049-2.317-1.318-3.158-2.532C1.323 14.984.01 10.451 1.772 7.391a4.9 4.9 0 0 1 4.139-2.507c1.292-.025 2.511.869 3.3.869.789 0 2.271-1.075 3.828-.917A4.67 4.67 0 0 1 16.7 6.82a4.524 4.524 0 0 0-2.161 3.805M12.02 3.193A4.4 4.4 0 0 0 13.06 0a4.482 4.482 0 0 0-2.946 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
                    </svg>
                </span>
            </div>

            <a href="#" className="mb-2 text-[#949494] hover:text-black duration-200 text-[13px] font-semibold px-[25px] py-[8px] hover:bg-[#ebe8e8]">Восстановить пароль</a>
            <p className="text-[13px] text-[#949494] text-center">Нажимая "Войти", я соглашаюсь с тем, что я прочитал и принял Пользовательское соглашение</p>
        </div>
    );
};

export default index;
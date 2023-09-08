
import user from "../../assets/images/user.png";
import { Link } from "react-router-dom";
import "./style.scss";

const index = () => {
    return (
        <section className="pt-[120px]">
            <div className="container">
                <div className="flex gap-x-10">
                    <div className="flex flex-col w-[400px]">
                        <div className="mb-3">
                            <img src={user} alt="pic" className="mb-2 w-[120px] h-[120px] object-contain object-center bg-lime-500 rounded-full" />
                            <h4 className="text-[22px] text-[#1A1919] font-bold">{localStorage.getItem("username")}</h4>
                        </div>
                        <Link to="/createblog" className="mb-3 min-h-[36px] w-[138px] font-semibold text-[13px] text-[#1A1919] border border-[#1A1919] rounded-[7px] flex items-center justify-center">Новая статья</Link>
                        <ul className="flex items-center gap-x-5 text-[15px] text-[#949494] mb-5">
                            <li>
                                <span className="text-[#1A1919] me-[2px]">0</span> подписчиков
                            </li>
                            <li>
                                <span className="text-[#1A1919] me-[2px]">0</span> подписок
                            </li>
                            <li>
                                <span className="text-[#1A1919] me-[2px]">0</span> статей
                            </li>
                        </ul>

                        <ul className="flex flex-col gap-y-2 py-5 border-t-2 border-b-2 text-[#949494] mb-5">
                            <li className="flex items-center justify-between hover:text-[#1A1919] duration-200">
                                <a href="#">Запланированные</a> <span>0</span>
                            </li>
                            <li className="flex items-center justify-between hover:text-[#1A1919] duration-200">
                                <a href="#">Скрытые</a> <span>0</span>
                            </li>
                            <li className="flex items-center justify-between hover:text-[#1A1919] duration-200">
                                <a href="#">Черновики</a> <span>0</span>
                            </li>
                        </ul>

                        <p className="text-[15px] text-[#1A1919]">Все статьи</p>
                    </div>

                    <div>
                        <div className="flex border items-center w-[500px] rounded-full py-[4px] px-[2px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32" class="icon search__form_icon" data-icon="search" data-v-d7037a0b=""><path fill-rule="evenodd" d="M8.747 15.059a6.312 6.312 0 1112.623 0 6.312 6.312 0 01-12.623 0zm11.28 6.028a7.812 7.812 0 111.06-1.06l3.447 3.446a.75.75 0 11-1.06 1.06l-3.447-3.446z" clip-rule="evenodd"></path></svg>
                            <input className="search text-[14px] appearance-none border-none  outline-0 p-0 w-full" type="text" placeholder="Найти..." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;
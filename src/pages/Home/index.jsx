

import "./style.scss"
import {Button} from "flowbite-react";
const index = () => {
    return (
        <section className="pt-[150px]">
            <div className="container">
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center mb-20">
                        <img className="w-[180px] h-[210px]" src="https://teletype.in/static/creator_1.384f0200.png" alt="image" />
                        <img className="w-[220px] h-[249px]" src="https://teletype.in/static/creator_2.7acffef4.png" alt="image" />
                        <img className="w-[270px]" src="https://teletype.in/static/creator_3.a7fd827b.png" alt="image" />
                        <img className="w-[220px] h-[252px]" src="https://teletype.in/static/creator_4.56075bfd.png" alt="image" />
                        <img className="w-[180px] h-[189px]" src="https://teletype.in/static/creator_5.929dec81.png" alt="image" />
                    </div>

                    <h1 className="mb-2 font-bold text-[96px] text-[#1A1919] text-center w-[1200px]">Монетизируйте свой контент на Teletype</h1>

                    <p className="font-medium text-center mx-auto text-[32px] text-[#1A1919] w-[1100px] mb-16">Teletype — это готовый набор инструментов, позволяющий публиковать и монетизировать ваши заметки, посты, видео, фотографии, подкасты и песни.</p>
                    <a className="bg-[#5B41F5] font-semibold px-8 py-6 rounded-[16px] text-[15px] text-white">Создать блог в Teletype</a>
                </div>

            </div>
        </section>
    );
};

export default index;
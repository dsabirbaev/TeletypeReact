



const index = () => {
    return (
        <section className="pt-[100px] pb-5">
            <div className="container">
                <div className="wrapper flex items-center justify-center w-full">
                    <form className="w-[800px]">
                        <input type="text" placeholder="Заголовок" className="dark:bg-gray-200  border-none outline-none w-full mb-5 rounded-md" />
                        <textarea cols="30" rows="10" placeholder="Наберите текст" className="dark:bg-gray-200 border-none outline-none w-full mb-5 rounde-md"></textarea>
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Опубликовать</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default index;
import Logo from '@/components/share/logo'
import { headerData } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <div className="h-10 bg-primery text-white flex items-center justify-center  ">
                Корзина неавторизованных пользователей хранится 7 дней. Пожалуйста,
                <Link href="/" className="underline flex items-center ml-1">
                    авторизуйтесь
                    <img src="/icons/right-throw-white.svg" alt="right-throw icon" className="text-white" />
                </Link>
            </div>

            <div className="header-shadow">
                <div className="">
                    <div className="border-b border-[#EEEEEE]">
                        <div className="container">
                            <div className="flex items-center justify-between gap-[42px] pt-[2.8px] pb-2">
                                <Logo />
                                <div className="flex-1 flex items-center gap-7">
                                    <div className="relative w-full bg-[#F5F5F5] border border-[#EEEEEE] py-[15px] pl-[16px] pr-[52px] rounded-[10px]">
                                        <input type="search" placeholder="Введите поисковый запрос" className="w-full bg-transparent outline-none" />
                                        <img src="/icons/search.svg" alt="search icon" className="absolute top-[13px] right-[15px]" width={24} height={24} />
                                    </div>
                                    <ul className="flex items-center gap-3">
                                        {headerData.map((item) => {
                                            return (
                                                <li key={item.id} className="h-full flex flex-col items-center gap-[3px] ">
                                                    <div className="relative w-[23px] h-[23px]">
                                                        <Image src={item.img} alt={item.title} fill />
                                                    </div>
                                                    <p className="w-[91px] text-center">{item.title}</p>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-4">
                                <button className="flex items-center gap-3 bg-primery rounded-[9px] py-3 px-7 text-white font-bold text-sm transition-colors hover:bg-blue-600">
                                    <Image src="/icons/horizontal-divider.svg" alt="horizontal-divider icon" width={18} height={18} />
                                    Каталог товаров
                                </button>
                                <div className="flex items-center gap-2">
                                    <Image src="/images/uzb.png" alt="uzb flag" width={24} height={20} />
                                    <p className="text-textColor text-xs font-bold">Ташкент</p>
                                </div>
                                <h5 className="text-textColor text-xs font-bold">+9999999999</h5>
                            </div>

                            <ul className="flex items-center justify-between w-[485px] text-textColor text-sm">
                                <li className="flex items-center gap-0.5">
                                    Покупателям
                                    <Image src="/icons/down.svg" alt="down icon" width={16} height={5} />
                                </li>
                                <li className="flex items-center gap-0.5">
                                    Услуги
                                    <Image src="/icons/down.svg" alt="down icon" width={16} height={5} />
                                </li>
                                <li className="flex items-center gap-0.5">
                                    О нас
                                    <Image src="/icons/down.svg" alt="down icon" width={16} height={5} />
                                </li>
                                <li>Онлайн чат</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

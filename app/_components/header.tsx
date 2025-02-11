import Logo from "@/components/cards/category-card";
import { headerData } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <div className="h-10">
                Корзина неавторизованных пользователей хранится 7 дней. Пожалуйста, <Link href="/">авторизуйтесь</Link>
                <img src="/icons/right-throw.svg" alt="right-throw icon" />
            </div>
            <div className="">
                <Logo />
                <div className="">
                    <input type="search" />
                </div>
                <ul>
                    {headerData.map((item) => {
                        return (
                            <li key={item.id}>
                                <Image src={item.img} alt={item.title} width={23} height={23} />
                                <p>{item.title}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="">
                <div className="">
                    <button>
                        <Image src="/icons/vector.svg" alt="vector" width={18} height={18} />
                        Каталог товаров
                    </button>
                    <div className="">
                        <Image src="/images/uzb.png" alt="uzb flag" width={24} height={20} />
                        Ташкент
                    </div>
                    <h5>+9999999999</h5>
                </div>

                <ul>
                    <li>
                        Покупателям
                        <Image src="/icons/down.svg" alt="down icon" width={16} height={5} />
                    </li>
                    <li>
                        Услуги
                        <Image src="/icons/down.svg" alt="down icon" width={16} height={5} />
                    </li>
                    <li>
                        О нас
                        <Image src="/icons/down.svg" alt="down icon" width={16} height={5} />
                    </li>
                    <li>Онлайн чат</li>
                </ul>
            </div>
        </>
    );
};

export default Header;

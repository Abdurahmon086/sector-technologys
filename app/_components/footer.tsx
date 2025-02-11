import Image from "next/image";

const Footer = () => {
    return (
        <div className="bg-primery w-full pt-[30px] text-white text-sm">
            <div className="container">
                <div className="">
                    <div className="grid grid-cols-4 gap-[30px]">
                        <div className="">
                            <h4>КОМПАНИЯ NAG</h4>
                            <ul className="mt-[24px] grid grid-cols-1 gap-[16px]">
                                <li>О компании</li>
                                <li>Новости</li>
                                <li>Контакты</li>
                                <li>Банковские реквизиты</li>
                                <li>Партнеры</li>
                            </ul>
                        </div>
                        <div className="">
                            <h4>ПОДДЕРЖКА</h4>
                            <ul className="mt-[24px] grid grid-cols-1 gap-[16px]">
                                <li>On-line поддержка</li>
                                <li>Условия оплаты</li>
                                <li>Условия доставки</li>
                                <li>Гарантийное обслуживание</li>
                                <li>Расширенная гарантия</li>
                            </ul>
                        </div>
                        <div className="">
                            <h4>ПРОЕКТЫ</h4>
                            <ul className="mt-[24px] grid grid-cols-1 gap-[16px]">
                                <li>snr.systems</li>
                                <li>NAG.conference</li>
                                <li>Конфигураторы</li>
                            </ul>
                        </div>
                        <div className="">
                            <h4>Ваш офис</h4>
                            <ul className="mt-[24px] grid grid-cols-1 gap-[16px]">
                                <li>Ташкент</li>
                                <li>+998 999999999</li>
                                <li>sectortechnology.uz</li>
                                <li>Ташкент, Chilonzor</li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-[43px] mt-[56px] flex items-center justify-between ">
                        <p>© 2022–2025 sectortechnology.uz</p>
                        <ul className="flex items-center gap-[115px]">
                            <li>
                                <Image src="/icons/instagram.svg" alt="instagram icon" width={25} height={25} />
                            </li>
                            <li>
                                <Image src="/icons/telegram.svg" alt="telegram icon" width={25} height={25} />
                            </li>
                            <li>
                                <Image src="/icons/facebook.svg" alt="facebook icon" width={25} height={25} />
                            </li>
                        </ul>
                        <div className="">
                            <p className="text-right">Политика конфиденциальности</p>
                            <p className="text-right mt-[13px]">Политика обработки персональных данных</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

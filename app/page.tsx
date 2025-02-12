import BrandCard from "@/components/cards/brand-card";
import CategoryCard from "@/components/cards/category-card";
import Logo from "@/components/share/logo";
import { headerData } from "@/constants";

export default function Home() {
    return (
        <div className="">
            <div className="py-14">
                <section className="container">
                    <div className="w-full h-[501px] bg-slate-400 rounded-[21px]"></div>
                </section>
                <section className="container mt-12">
                    <h3 className="main-title">Популярные категории</h3>
                    <ul className="mt-7 grid grid-cols-6 gap-x-10 gap-y-[30px]">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                            <li key={item}>
                                <CategoryCard />
                            </li>
                        ))}
                        <li>
                            <CategoryCard last />
                        </li>
                    </ul>
                </section>
                <section className="container mt-10">
                    <h3 className="main-title">Популярные бренды</h3>
                    <ul className="mt-5 grid grid-cols-6 gap-10">
                        {headerData.map((item) => (
                            <li key={item.id}>
                                <BrandCard />
                            </li>
                        ))}
                        <li>
                            <BrandCard last />
                        </li>
                    </ul>
                </section>
                <section className="container mt-16">
                    <div className="flex items-start gap-3">
                        <aside className="w-[325px]">
                            <div className="">
                                <div className="">
                                    <div className="">
                                        <h4>Новости </h4>
                                        <img src="" alt="" />
                                    </div>
                                    <ul>
                                        <li>
                                            <h4>Новая серия сварочных аппаратов SNR- FS-60x уже на складе</h4>
                                            <div className="">
                                                <img src="" alt="" />
                                                <span>18 апреля 2024 г.</span>
                                            </div>
                                        </li>
                                        <li>
                                            <h4>Читайте статью: Что такое PoE и для чего он нужен?</h4>
                                            <div className="">
                                                <img src="" alt="" />
                                                <span>29 марта 2024 г.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="">
                                    <h4>Наши проекты</h4>
                                    <ul>
                                        <li>
                                            <img src="" alt="" />
                                            <p>snr.systems</p>
                                        </li>
                                        <li>
                                            <img src="" alt="" />
                                            <p>Конфигураторы</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="">
                                    <h4>Как мы работаем</h4>
                                    <ul>
                                        <li>
                                            <img src="" alt="" />
                                            <p>Способы оплаты</p>
                                        </li>
                                        <li>
                                            <img src="" alt="" />
                                            <p>Условия доставки</p>
                                        </li>
                                        <li>
                                            <img src="" alt="" />
                                            <p>Гарантийное обслуживание</p>
                                        </li>
                                        <li>
                                            <img src="" alt="" />
                                            <p>Возврат товара</p>
                                        </li>
                                        <li>
                                            <img src="" alt="" />
                                            <p>Вопросы и ответы</p>
                                        </li>
                                        <li>
                                            <img src="" alt="" />
                                            <p>Техническая поддержка</p>
                                        </li>
                                        <li>
                                            <img src="" alt="" />
                                            <p>База знаний</p>
                                        </li>
                                        <li>
                                            <img src="" alt="" />
                                            <p>Конфигураторы</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                        <div className="">
                            <div className="">
                                <ul>
                                    <li>Рекомендуем</li>
                                    <li>Новинки</li>
                                    <li>Акции</li>
                                    <li>Товары со скидкой</li>
                                    <li>Популярное</li>
                                </ul>
                            </div>

                            <div className="">
                                <ul>
                                    <li>
                                        <div className="">
                                            <img src="" alt="" />
                                            <span>Новинка</span>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <h4>Витая пара FTP кат.5Е, 4 пары, серый ПВХ, бухта 305м, для внутренней прокладки, экранированный</h4>

                                                <img src="" alt="" />
                                            </div>
                                            <div className="">
                                                <h4>FTP4CAT5e PVC-2414</h4>

                                                <img src="" alt="" />
                                            </div>
                                            <span>В наличии: 10 уп</span>

                                            <div className="">
                                                <h4>911 374 сум</h4>
                                                <img src="" alt="" />
                                                <img src="" alt="" />
                                                <button>
                                                    <img src="" alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <aside>
                    <div className="flex flex-col items-center justify-between">
                        <div className="">
                            <Logo />
                            <div className="">
                                <img src="/images/uz.png" alt="uzb flag" />
                                <p>Uz</p>
                            </div>
                            <div className="">
                                <img src="/images/ru.png" alt="ru flag" />
                                <p>Ru</p>
                            </div>
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <button>
                                <img src="" alt="" />
                            </button>
                        </div>
                        <div className="">
                            <img src="" alt="" />
                            <button>
                                <img src="" alt="" />
                            </button>
                        </div>
                    </div>
                </aside>

                <section className="container">
                    <div className="textura p-[30px]">
                        <p>
                            Компания «НАГ» – надежный и честный партнер, предлагающий компаниям телеком-отрасли, промышленности и бизнесу эффективные решения и
                            оборудование для решения
                        </p>
                        <p>
                            широкого круга задач. Мы осуществляем оптовую и розничную продажу компонентов и программно-аппаратных комплексов (ПАК) для
                            развертывания сетевой
                        </p>
                        <p>инфраструктуры, ее  модернизации и масштабирования.</p>
                        <h4>Наши достижения</h4>

                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eum voluptatem officiis nobis nostrum voluptas sunt, vitae, facilis
                            quibusdam esse laborum velit modi non rerum, aliquam cupiditate iusto ratione veniam? Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Earum eum voluptatem officiis nobis nostrum voluptas sunt, vitae, facilis quibusdam esse laborum velit modi non
                            rerum, aliquam cupiditate iusto ratione veniam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eum voluptatem
                            officiis nobis nostrum voluptas sunt, vitae, facilis quibusdam esse laborum velit modi non rerum, aliquam cupiditate iusto ratione
                            veniam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eum voluptatem officiis nobis nostrum voluptas sunt, vitae,
                            facilis quibusdam esse laborum velit modi non rerum, aliquam cupiditate iusto ratione veniam? Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Earum eum voluptatem officiis nobis nostrum voluptas sunt, vitae, facilis quibusdam esse laborum velit
                            modi non rerum, aliquam cupiditate iusto ratione veniam?
                        </p>
                        <div className="textura-bottom">
                            <button className="block text-primery border-b border-dotted border-primery leading-[24px] ">Показать полный текст</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

import CategoryCard from "@/components/cards/category-card";
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
                <section className="container">
                    <h3 className="main-title">Популярные бренды</h3>
                    <ul>
                        {headerData.map((item) => (
                            <li key={item.id}>
                                <CategoryCard />
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="container">
                    <div className="flex items-start gap-3">
                        <aside className="h-[325px]">asdasd</aside>
                        <div className=""> asdasd</div>
                    </div>
                </section>

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

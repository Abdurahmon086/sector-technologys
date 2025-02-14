import BrandCard from '@/components/cards/brand-card'
import CategoryCard from '@/components/cards/category-card'
import NewsCard from '@/components/cards/news-card'
import { headerData } from '@/constants'
import Image from 'next/image'

export default function Home() {
	const data = [
		{
			id: 1,
			title: 'Способы оплаты',
		},
		{
			id: 2,
			title: 'Условия доставки',
		},
		{
			id: 3,
			title: 'Гарантийное обслуживание',
		},
		{
			id: 4,
			title: 'Возврат товара',
		},
		{
			id: 5,
			title: 'Техническая поддержка',
		},
		{
			id: 6,
			title: 'База знаний',
		},
		{
			id: 7,
			title: 'Конфигураторы',
		},
	]

	return (
		<div className=''>
			<div className='py-14'>
				<section className='container'>
					<div className='w-full h-[501px] bg-slate-400 rounded-[21px]'></div>
				</section>
				<section className='container mt-12'>
					<h3 className='main-title'>Популярные категории</h3>
					<ul className='mt-7 grid grid-cols-6 gap-x-10 gap-y-[30px]'>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => (
							<li key={item}>
								<CategoryCard />
							</li>
						))}
						<li>
							<CategoryCard last />
						</li>
					</ul>
				</section>
				<section className='container mt-10'>
					<h3 className='main-title'>Популярные бренды</h3>
					<ul className='mt-5 grid grid-cols-6 gap-10'>
						{headerData.map(item => (
							<li key={item.id}>
								<BrandCard />
							</li>
						))}
						<li>
							<BrandCard last />
						</li>
					</ul>
				</section>
				<section className='container mt-16'>
					<div className='grid grid-cols-[325px_1fr] items-start gap-4'>
						<aside className=''>
							<div className=''>
								<div className='aside__wrapper'>
									<div className='aside-title__wrapper'>
										<h4>Новости </h4>
										<Image src='/icons/right.svg' alt='right icon' width={24} height={24} />
									</div>
									<ul className='aside-news '>
										<li className='even:bg-white p-[23px] '>
											<h4 className='text-sm'>Новая серия сварочных аппаратов SNR- FS-60x уже на складе</h4>
											<div className='mt-2 flex items-center gap-2 text-[#A3A3A3]'>
												<Image src='/icons/time.svg' alt='time icon' width={15} height={15} />
												<span className='text-xs'>18 апреля 2024 г.</span>
											</div>
										</li>
										<li className='even:bg-white p-[23px] '>
											<h4>Читайте статью: Что такое PoE и для чего он нужен?</h4>
											<div className='mt-2 flex items-center gap-2 text-[#A3A3A3]'>
												<Image src='/icons/time.svg' alt='time icon' width={15} height={15} />
												<span className='text-xs'>29 марта 2024 г.</span>
											</div>
										</li>
									</ul>
								</div>
								<div className='mt-14 aside__wrapper'>
									<div className='aside-title__wrapper'>
										<h4>Наши проекты</h4>
									</div>
									<ul className='p-[23px] flex flex-col gap-4'>
										<li className='flex items-center'>
											<Image src='/icons/right.svg' alt='right icon' width={24} height={24} />
											<p className='text-sm'>snr.systems</p>
										</li>
										<li className='flex items-center'>
											<Image src='/icons/right.svg' alt='right icon' width={24} height={24} />
											<p className='text-sm'>Конфигураторы</p>
										</li>
									</ul>
								</div>
								<div className='mt-[90px] aside__wrapper'>
									<div className='aside-title__wrapper'>
										<h4>Как мы работаем</h4>
									</div>
									<ul className='p-[23px] flex flex-col gap-4'>
										{data.map(item => (
											<li className='flex items-center' key={item.id}>
												<Image src='/icons/right.svg' alt='right icon' width={24} height={24} />
												<p className='text-sm'>{item.title}</p>
											</li>
										))}
									</ul>
								</div>
							</div>
						</aside>
						<div className='category-card-shadow rounded-[10px] bg-white'>
							<ul className='px-[61px] flex'>
								<li className='aside-active border-b-[5px] border-white transition-all cursor-pointer  flex-1 text-center p-[17px] font-medium'>Рекомендуем</li>
								<li className='border-b-[5px] border-white transition-all cursor-pointer flex-1 text-center p-[17px] font-medium'>Новинки</li>
								<li className='border-b-[5px] border-white transition-all cursor-pointer flex-1 text-center p-[17px] font-medium'>Акции</li>
								<li className='border-b-[5px] border-white transition-all cursor-pointer flex-1 text-center p-[17px] font-medium'>Товары со скидкой</li>
								<li className='border-b-[5px] border-white transition-all cursor-pointer flex-1 text-center p-[17px] font-medium'>Популярное</li>
							</ul>

							<ul className='mt-[21px] grid grid-cols-4 gap-5 px-5 pb-14'>
								{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, i) => (
									<li key={i}>
										<NewsCard />
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>

				<section className='container mt-[86px]'>
					<div className='textura p-[30px]'>
						<p>
							Компания «НАГ» – надежный и честный партнер, предлагающий компаниям телеком-отрасли, промышленности и бизнесу эффективные решения и оборудование
							для решения
						</p>
						<p>
							широкого круга задач. Мы осуществляем оптовую и розничную продажу компонентов и программно-аппаратных комплексов (ПАК) для развертывания сетевой
						</p>
						<p>инфраструктуры, ее  модернизации и масштабирования.</p>
						<h4>Наши достижения</h4>

						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eum voluptatem officiis nobis nostrum voluptas sunt, vitae, facilis quibusdam esse
							laborum velit modi non rerum, aliquam cupiditate iusto ratione veniam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eum
							voluptatem officiis nobis nostrum voluptas sunt, vitae, facilis quibusdam esse laborum velit modi non rerum, aliquam cupiditate iusto ratione
							veniam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eum voluptatem officiis nobis nostrum voluptas sunt, vitae, facilis
							quibusdam esse laborum velit modi non rerum, aliquam cupiditate iusto ratione veniam? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Earum eum voluptatem officiis nobis nostrum voluptas sunt, vitae, facilis quibusdam esse laborum velit modi non rerum, aliquam cupiditate iusto
							ratione veniam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eum voluptatem officiis nobis nostrum voluptas sunt, vitae,
							facilis quibusdam esse laborum velit modi non rerum, aliquam cupiditate iusto ratione veniam?
						</p>
						<div className='textura-bottom'>
							<button className='block text-primery border-b border-dotted border-primery leading-[24px] '>Показать полный текст</button>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

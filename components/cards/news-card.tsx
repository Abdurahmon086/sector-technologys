import Image from 'next/image'

function NewsCard() {
	return (
		<div className='border border-[#EEEEEE] rounded-[11px] p-[13px] '>
			<div className='relative w-full h-[234.63] object-fill'>
				<Image src='/images/set-img.jpg' alt='set-img image' fill />
				<span className='absolute top-2 left-0.5 py-[3px] px-4 bg-[#F3F9F1] rounded-md border border-[#6AB04C] text-[#6AB04C] text-sm font-semibold '>
					Новинка
				</span>
			</div>
			<div className=''>
				<div className='mt-[9px] flex justify-between items-start gap-1'>
					<h4 className='h-[69px] text-sm leading-[18px] line-clamp-4'>
						Витая пара FTP кат.5Е, 4 пары, серый ПВХ, бухта 305м, для внутренней прокладки, экранированныйэкранированны
						йэкранированныйэкранированныйэкранированныйэкранированный
					</h4>

					<Image src='/icons/cupy.svg' alt='cupy icon' width={17} height={15} />
				</div>
				<div className='mt-[23px] flex justify-between items-start gap-1'>
					<h4 className='text-xs text-[#929292]'>FTP4CAT5e PVC-2414</h4>

					<Image src='/icons/cupy.svg' alt='cupy icon' width={17} height={15} />
				</div>
				<p className='mt-[17px] text-primery text-sm leading-[18px]'>В наличии: 10 уп</p>

				<div className=' mt-[39px] flex items-center justify-between gap-[14px]'>
					<h4 className='text-[#3B3B3B] text-xl font-semibold'>911 374 сум</h4>
					<div className='relative w-5 h-5 object-fill'>
						<Image src='/icons/mark.svg' alt='cupy icon' fill />
					</div>
					<div className='relative w-5 h-5 object-fill'>
						<Image src='/icons/chart.svg' alt='cupy icon' fill />
					</div>
					<button className='bg-[#F5F5F5] rounded-full w-[38px] h-[38px] relative flex items-center justify-center'>
						<Image src='/icons/shopping-cart.svg' alt='shopping-cart icon' width={20} height={20} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default NewsCard

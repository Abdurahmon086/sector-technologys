import Logo from '@/components/share/logo'
import Image from 'next/image'

const Asider = () => {
	return (
		<>
			<div className='bg-white flex flex-col items-center justify-between main-asider__shadow py-2 px-1 w-12 h-[70vh]'>
				<div className='mt-4'>
					<Logo />
					<div className='main-asider-flag active mt-1'>
						<div className='relative object-fill w-full h-4'>
							<Image src='/images/uzb.png' alt='uzb flag' fill />
						</div>
						<p className='mt-1'>Uz</p>
					</div>
					<div className='main-asider-flag'>
						<div className='relative object-fill w-full h-4'>
							<Image src='/images/ru.png' alt='ru flag' fill />
						</div>
						<p className='mt-1'>Ru</p>
					</div>
					<div className='mt-5 flex flex-col items-center gap-6'>
						<div className='relative w-5 h-5 object-fill cursor-pointer'>
							<Image src='/icons/mark.svg' alt='mark icon' fill />
						</div>
						<div className='relative w-5 h-5 object-fill cursor-pointer'>
							<Image src='/icons/chart.svg' alt='chart icon' fill />
						</div>
						<div className='relative w-5 h-5 object-fill cursor-pointer'>
							<Image src='/icons/share.svg' alt='share icon' fill />
						</div>
						<button className='main-asider-btn'>
							<Image src='/icons/chat.svg' alt='chat icon' width={18} height={18} />
						</button>
					</div>
				</div>
				<div className='flex flex-col items-center gap-5'>
					<div className='relative w-5 h-5 object-fill cursor-pointer'>
						<Image src='/icons/circle-right.svg' alt='circle-right icon' fill />
					</div>
					<button className='main-asider-btn'>
						<Image src='/icons/top.svg' alt='top icon' width={10} height={14} />
					</button>
				</div>
			</div>
		</>
	)
}

export default Asider

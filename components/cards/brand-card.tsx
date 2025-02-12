import Image from "next/image";

function BrandCard({ last }: { last?: boolean }) {
    return (
        <div className="category-card-shadow rounded-[10px] p-[5px] bg-white cursor-pointer flex items-center justify-center h-full">
            {last ? (
                <div className="flex items-center gap-2 ">
                    <p className='text-primery text-sm font-medium'>Все бренды</p>
										<Image src={'/icons/right-throw.svg'} alt='throw right icon' width={30} height={30} />
                </div>
            ) : (
                <div className="relative w-[150px] h-[60px] object-cover">
                    <Image src="/images/huawei.png" alt="category-img image" fill />
                </div>
            )}
        </div>
    );
}

export default BrandCard;

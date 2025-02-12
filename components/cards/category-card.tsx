import Image from "next/image";

function CategoryCard({ last }: { last?: boolean }) {
    return (
        <div className="category-card-shadow rounded-[10px] bg-white relative overflow-hidden w-full h-[190px] cursor-pointer">
            <div className="h-full flex flex-col justify-between">
                {!last ? (
                    <>
                        <div className="category-card-bg-image"></div>
                        <div className="relative w-[150px] h-[100px] object-cover">
                            <Image src="/images/category-img.png" alt="category-img image" fill />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="relative w-[24px] h-[24px] mt-[23px] ml-[23px] object-cover z-10">
                            <Image src="/icons/right-throw.svg" alt="right-throw icon" fill />
                        </div>
                        <div className="category-card-bg-image-all"></div>
                        <div className="category-card-bg-image-all-2"></div>
                    </>
                )}
                <div className="pt-[16px] px-[23px] pb-[11px] z-10">
                    <h4 className="h-[42px]  font-semibold text-sm text-textColor">{last ? "Смотреть весь каталог" : "Фиксированные коммутаторы"}</h4>
                    <span className="text-sm text-[#A3A3A3]">{last ? "7 812 товаров" : "784 товара"}</span>
                </div>
            </div>
        </div>
    );
}

export default CategoryCard;

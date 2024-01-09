import { priceFormatter } from "@/utils/priceFormatter";
import { textCutter } from "@/utils/textCutter";
import { Rating } from "@mui/material";
import Image from "next/image";

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0  ) /
    data.reviews.length;

  return (
    <div  
      className="
        col-span-1
        cursor-pointer
        border-[1.2px]
        border-slate-200
        bg-slate-50
        rounded-md
        p-2
        drop-shadow-lg
        transition
        hover:scale-105
        hover:drop-shadow-xl
        text-center
        text-sm"
    >
      <div
        className="
        flex
        flex-col
        text-center
        w-full
        gap-1"
      >

        <div className="mb-4 font-semibold text-xl text-orange-500">{textCutter(data.name)}</div>

        <div
          className="
          aspect-square
          overflow-hidden
          relative
          w-full"
        >
          <Image
            className="
            w-full
            h-full
            object-contain"
            fill
            src={data.images[0].image}
            alt={data.name}
          />
        </div>

        

        <div>
          <Rating value={productRating} readOnly/>
        </div>

        <div>{data.reviews.length} reviews</div>

        <div className="font-semibold text-xl">{priceFormatter(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;

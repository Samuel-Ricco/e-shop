'use client'
import { priceFormatter } from "@/utils/priceFormatter";
import { textCutter } from "@/utils/textCutter";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";



const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  const router = useRouter();


  const productRating =
    product.reviews.reduce((acc: number, item: Review) => item.rating + acc, 0  ) /
    product.reviews.length;

  return (
    <div 
      onClick={()=>router.push(`/product/${product.id}`)}
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

        <div className="mb-4 font-semibold text-xl text-orange-500">{textCutter(product.name)}</div>

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
            src={product.images[0].image}
            alt={product.name}
          />
        </div>

        

        <div>
          <Rating value={productRating} readOnly/>
        </div>

        <div>{product.reviews.length} reviews</div>

        <div className="font-semibold text-xl">{priceFormatter(product.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;

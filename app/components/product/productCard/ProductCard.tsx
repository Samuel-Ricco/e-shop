'use client'
import { priceFormatter } from "@/utils/priceFormatter";
import { textCutter } from "@/utils/textCutter";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ProductCardProps } from "./IProductCard";



const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  const router = useRouter();

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

        <div className="mb-4 font-semibold text-xl text-orange-500">{textCutter(product.title)}</div>

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
            src={product.image}
            alt={product.title}
          />
        </div>

        

        <div>
          <Rating value={product.reviews.rate} readOnly/>
        </div>

        <div>{product.reviews.count} reviews</div>

        <div className="font-semibold text-xl">{priceFormatter(product.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;

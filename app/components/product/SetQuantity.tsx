import { CartProduct } from "@/model/CartProduct";

interface SetQuantityProps {
  isDisplayed?: boolean;
  cartProduct: CartProduct;
  quantityIncreaseHandeler: () => void;
  quantityDecreaseHandeler: () => void;
}

const btnStyle = "border-[1.2px] border-slate-300 px-2 rounded";

const SetQuantity: React.FC<SetQuantityProps> = ({
  isDisplayed,
  cartProduct,
  quantityIncreaseHandeler,
  quantityDecreaseHandeler,
}) => {
  return (
    <div className="flex gap-8 items-center">
      {isDisplayed ? null : <div className="font-semibold">QUANTITY:</div>}

      <div className="flex gap-4 items-center text-base">
        <button className={btnStyle} onClick={quantityDecreaseHandeler}>
          -
        </button>

        <div>{cartProduct.quantity}</div>

        <button className={btnStyle} onClick={quantityIncreaseHandeler}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;

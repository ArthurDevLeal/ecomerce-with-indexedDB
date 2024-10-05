import { ProductType } from "@/types/ProductType";
import { ShoopingCart } from "./ShoopingCart/ShoopingCartIndex";

interface ShoopingCartListProps {
  list: ProductType[];
  onClick: (id: number) => void;
}
export default function ShoopingCartList({ list, onClick }: ShoopingCartListProps) {
  return list.map((item) => {
    return (
      <div className="flex w-full" key={item.id}>
        <ShoopingCart.Item.Image image={item.image} />
        <div className="flex flex-col justify-center">
          <div className="flex gap-4">
            <ShoopingCart.Item.Name name={item.name} />
            <ShoopingCart.Item.Quantity quantity={item.quantity} />
          </div>
          <ShoopingCart.Item.Price price={item.price} />
          <ShoopingCart.Item.RemoveButton onClick={() => onClick(item.id)} id={item.id} />
        </div>
      </div>
    );
  });
}

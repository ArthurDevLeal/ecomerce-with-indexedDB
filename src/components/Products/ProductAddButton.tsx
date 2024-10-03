import { ShoppingCart } from "lucide-react";
interface ProductAddButtonProps {
	onClick: (id: number) => void;
	id: number;
}
export default function ProductAddButton({ onClick, id }: ProductAddButtonProps) {
	return (
		<button onClick={() => onClick(id)} className="bg-green-500 w-full h-full flex justify-center items-center ">
			<ShoppingCart />
		</button>
	);
}

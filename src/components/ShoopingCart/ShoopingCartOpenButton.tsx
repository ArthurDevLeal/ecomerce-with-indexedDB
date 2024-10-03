import { ShoppingBasket } from "lucide-react";
interface ShoopingCartOpenButtonProps {
	menuIsOpen: boolean;
	setMenuIsOpen: (item: boolean) => void;
}
export default function ShoopingCartOpenButton({ menuIsOpen, setMenuIsOpen }: ShoopingCartOpenButtonProps) {
	return (
		<button className=" bg-red-500 w-full p-6 flex justify-center items-center rounded-md" onClick={() => setMenuIsOpen(!menuIsOpen)}>
			<ShoppingBasket color="#ffffff"  size={64}/>
		</button>
	);
}

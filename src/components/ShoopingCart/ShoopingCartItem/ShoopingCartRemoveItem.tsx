import { X } from "lucide-react";
interface ShoopingCartRemoveItemProps {
	onClick: (id: number) => void;
	id: number;
}
export default function ShoopingCartRemoveItem({ onClick, id }: ShoopingCartRemoveItemProps) {
	return (
		<button className="bg-red-500 p-4 rounded-md" onClick={() => onClick(id)}>
			<X color="#ffffff" />
		</button>
	);
}

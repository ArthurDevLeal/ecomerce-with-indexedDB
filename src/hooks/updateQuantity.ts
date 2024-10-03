import { ProductType } from "@/types/ProductType";

export const updateQuantity = (items: ProductType[], id: number, change: number) => {
	return items.map((item) => (item.id === id ? { ...item, quantity: item.quantity + change } : item));
};

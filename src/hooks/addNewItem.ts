import { ProductType } from "@/types/ProductType";

export const addNewItem = (items: ProductType[], newItem: ProductType) => {
	return [...items, { ...newItem, quantity: 1 }];
};

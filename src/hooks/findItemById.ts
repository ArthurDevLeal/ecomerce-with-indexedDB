import { ProductType } from "@/types/ProductType";

export const findItemById = (items: ProductType[] | undefined | null, id: number) => {
	if (!items) return undefined;
	return items.find((item) => item.id === id);
};

import { ProductType } from "@/types/ProductType";

export const createIndexedDb = () => {
	const request = window.indexedDB.open("UserCartDb", 1);
	request.onupgradeneeded = () => {
		const db = request.result;
		const objectStorage = db.createObjectStore("userCart", { keyPath: "id" });
		objectStorage.createIndex("productName", "productName", { unique: false });
		objectStorage.createIndex("productPrice", "productPrice", { unique: false });
		objectStorage.createIndex("productImage", "productImage", { unique: true });
		objectStorage.createIndex("productQuantity", "productQuantity", { unique: false });
	};
};
export const modifyItemsAtDB = (filteredList: ProductType[]) => {
	const request = window.indexedDB.open("UserCartDb", 1);
	request.onsuccess = () => {
		const db = request.result;
		const transaction = db.transaction("userCart", "readwrite");
		const CartObjectStore = transaction.objectStore("userCart");
		const clearRequest = CartObjectStore.clear();

		clearRequest.onsuccess = () => {
			filteredList.forEach((item) => {
				CartObjectStore.add(item);
			});
		};
	};
};
export const getItemsAtDB = (callback: (items: ProductType[]) => void) => {
	const request = window.indexedDB.open("UserCartDb", 1);
	request.onsuccess = () => {
		const db = request.result;
		const objectStore = db.transaction("userCart", "readonly").objectStore("userCart");
		const getAllRequests = objectStore.getAll();
		getAllRequests.onsuccess = () => {
			if (getAllRequests.result) {
				callback(getAllRequests.result);
			} else {
				callback([]);
			}
		};
	};
};

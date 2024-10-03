import ShoopingCartItemImage from "./ShoopingCartItem/ShoopingCartItemImage";
import ShoopingCartItemName from "./ShoopingCartItem/ShoopingCartItemName";
import ShoopingCartItemPrice from "./ShoopingCartItem/ShoopingCartItemPrice";
import ShoopingCartItemQuantity from "./ShoopingCartItem/ShoopingCartItemQuantity";
import ShoopingCartRemoveItem from "./ShoopingCartItem/ShoopingCartRemoveItem";
import ShoopingCartOpenButton from "./ShoopingCartOpenButton";
import ShoopingCartRoot from "./ShoopingCartRoot";

export const ShoopingCart = {
	Root: ShoopingCartRoot,
	OpenButton: ShoopingCartOpenButton,
	Item: {
		Image: ShoopingCartItemImage,
		Name: ShoopingCartItemName,
		Price: ShoopingCartItemPrice,
    RemoveButton:ShoopingCartRemoveItem,
		Quantity:ShoopingCartItemQuantity
	},
};

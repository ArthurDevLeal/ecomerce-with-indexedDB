export default function ProductPrice({ price }: { price: number }) {
	return <p className="font-bold text-2xl">{price}R$</p>;
}

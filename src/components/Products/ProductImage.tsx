export default function ProductImage({ image }: { image: string }) {
	return <img src={image} alt="#" className="col-span-3 w-full h-full rounded-t-md"></img>;
}

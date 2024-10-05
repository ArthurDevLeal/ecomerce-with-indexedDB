import { ReactNode } from "react";

export default function ShoopingCartRoot({ children }: { children: ReactNode }) {
	return (
		<div className="absolute bg-white w-full h-full p-4  flex flex-col gap-4">
			<div className="h-[600px] overflow-y-scroll flex flex-col gap-2">{children}</div>
		</div>
	);
}

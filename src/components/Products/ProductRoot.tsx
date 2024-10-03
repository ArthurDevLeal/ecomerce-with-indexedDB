import { ReactNode } from "react";

export default function ProductRoot({ children }: { children: ReactNode }) {
	return <div className="bg-white w-full h-48 place-items-center box-border rounded-md grid grid-cols-3 grid-rows-[70%_30%] shadow-lg">{children}</div>;
}

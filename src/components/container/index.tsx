import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
    return (
        <div className="w-11/12 mx-auto ">
            {children}
        </div>
    )
}
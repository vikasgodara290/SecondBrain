import { ReactElement } from "react";

interface ButtonProps{
    text: string,
    varient: "primary" | "secondary",
    size?: "sm" | "lg" | "md",
    frontIcon?: ReactElement,
    onClick?: ()=> void
}

const buttonVarient = {
    "primary" : "bg-purple-700 text-white hover:bg-purple-300 hover:text-purple-700",
    "secondary": "bg-purple-300 text-purple-700 hover:bg-purple-700 hover:text-white"
}
const defaultButtonStyle = "w-38 h-10 font-light rounded-md flex items-center mx-2 my-2 justify-center cursor-pointer";

export function Button(props: ButtonProps){
    return(
        <>
            <button className={`${buttonVarient[props.varient]} ${defaultButtonStyle}`}>
                {props.frontIcon} <span className="pr-1"></span>
            {props.text}</button>
        </>
    )
}


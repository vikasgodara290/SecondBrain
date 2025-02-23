interface ButtonProps{
    text: string,
    varient?: "primary" | "secondary",
    size?: "sm" | "lg" | "md",
    frontIcon?: any,
    onClick?: ()=> void
}

export function Button(props: ButtonProps){
    return(
        <>
            <button className=" bg-purple-700">{props.text}</button>
        </>
    )
}


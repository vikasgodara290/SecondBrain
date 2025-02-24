import { ReactElement } from "react"

interface NavItemProps{
    icon : ReactElement,
    navItem : string
}

export function NavItem(props: NavItemProps){
    return(
        <>
            <div className="h-12 w-full flex items-center justify-start px-18 cursor-pointer">
                {props.icon}
                <span className="pl-6 hover:text-violet-300">{props.navItem}</span>
            </div>
        </>
    )
}
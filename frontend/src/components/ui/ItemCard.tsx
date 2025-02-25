import { ReactElement } from "react"
import { DeleteIcon } from "../icon/DeleteIcon"
import { ShareIcon } from "../icon/ShareIcon"

interface ItemCardProps{
    icon: ReactElement,
    title: string,
    content: string,
    tags?: Array<ReactElement>
    date: string
}


export function ItemCard({icon, title, content, tags, date}: ItemCardProps){
    return(
        <div className="border w-70 h-80 rounded-md border-purple-300 shadow">
            <div className="flex justify-around items-center w-full h-1/6">
                <span>{icon}</span>
                <span>{title}</span>
                <span><DeleteIcon/></span>
                <span><ShareIcon/></span>
            </div>
            <div className="text-2xl w-full h-1/2 px-2">{content}</div>
            <div className="flex w-full h-1/6">
                <span className="bg-purple-300 p-1.5 px-3 rounded-full text-sm h-1/2 flex items-center ml-2">#productivity</span>
                <span className="bg-purple-300 p-1.5 px-3 rounded-full text-sm h-1/2 flex items-center ml-2">#ideas</span>
            </div>
            <div className="text-gray-500 w-full h-1/6 flex items-center ml-2">Added on: {date}</div>
        </div>
    )
}
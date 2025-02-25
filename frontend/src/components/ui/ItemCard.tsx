import { ReactElement } from "react"

interface ItemCardProps{
    icon: ReactElement,
    title: string,
    content: string,
    tags: Array<ReactElement>
    date: Date
}


export function ItemCard(){
    return(
        <div>
            <div>
                <span>i</span>
                <span>Project Ideas</span>
                <span>s</span>
                <span>d</span>
            </div>
            <div>Content</div>
            <div>
                <span>#productivity</span>
                <span>#ideas</span>
            </div>
            <div>Added on 10/03/2024</div>
        </div>
    )
}
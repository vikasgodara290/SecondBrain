import { ReactElement } from "react"
import { DeleteIcon } from "../icon/DeleteIcon"
import { ShareIcon } from "../icon/ShareIcon"

interface ItemCardProps{
    icon: ReactElement,
    title: string,
    link: string,
    tags?: Array<ReactElement>
    date: string
}


export function ItemCard({icon, title, link, tags, date}: ItemCardProps){

    return(
        <div className="border w-70 rounded-md border-purple-300 shadow ">
            <div className="flex justify-around items-center w-full h-15">
                <span>{icon}</span>
                <span>{title}</span>
                <span><DeleteIcon/></span>
                <span><ShareIcon/></span>
            </div>
            <div className="text-2xl w-full px-2 py-2 h-45 overflow-auto overflow-y-hidden">

                {link.startsWith('https://www.youtube.com') || link.startsWith('https://youtu.be')? (
                    <iframe className="w-full h-full border-2"
                        src={link.replace('watch?v=','embed/')}
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>
                ) : null}

                { (!link.startsWith('https://www.youtube.com') && !link.startsWith('https://x.com/') && !link.startsWith('https://youtu.be'))?
                    <a href={link} target="_blank">
                        <div className="flex items-center justify-center h-40 bg-purple-300/20 border border-gray-400 shadow">
                            <img src={`https://www.google.com/s2/favicons?sz=64&domain=${link}`}></img>
                        </div>
                    </a>
                    :null
                }

                {link.startsWith('https://x.com/')? 
                <>
                    <blockquote className="twitter-tweet">
                        <a href={link.replace('x.com','twitter.com')}/>
                    </blockquote>             
                <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> </>: null}

            </div>
            <div className="flex w-full flex-wrap">
                <span className="bg-purple-300 p-1.5 px-3 rounded-full text-sm h-1/2 flex items-center ml-2 mb-2">#productivity</span>
                <span className="bg-purple-300 p-1.5 px-3 rounded-full text-sm h-1/2 flex items-center ml-2 mb-2">#ideas</span>
                <span className="bg-purple-300 p-1.5 px-3 rounded-full text-sm h-1/2 flex items-center ml-2 mb-2">#ideas</span>
                <span className="bg-purple-300 p-1.5 px-3 rounded-full text-sm h-1/2 flex items-center ml-2 mb-2">#ideas</span>
                <span className="bg-purple-300 p-1.5 px-3 rounded-full text-sm h-1/2 flex items-center ml-2 mb-2">#ideas</span>
            </div>
            <div className="text-gray-500 w-full flex items-center ml-2 h-15">Added on: {date}</div>
        </div>
    )
}
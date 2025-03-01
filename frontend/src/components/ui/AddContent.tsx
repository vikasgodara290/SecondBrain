import { CancelIcon } from "../icon/CancelIcon";
import { Button } from "./Button";

interface AddContentProps {
    onClick : ()=>void
}
export function AddContent({onClick} : AddContentProps){

    return(
        <div className="flex flex-col gap-4 border w-1/3 h-80 px-10 shadow bg-violet-100">
            <span className="flex mt-2 justify-end" onClick={onClick}><CancelIcon/></span>
            <label className="">Title</label>
            <input name="title" className="border h-10 px-2 shadow focus:outline-none"></input>
            <label className="">Link</label>
            <input name="link" className="border h-10 px-2 shadow focus:outline-none"></input>
            <span className="m-auto"><Button text="Submit" varient="primary"/></span>
        </div>
    )
}
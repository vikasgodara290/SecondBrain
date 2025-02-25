import { AddIcon } from "./components/icon/AddIcon"
import { DocumentIcon } from "./components/icon/DocumentIcon"
import { ShareIcon } from "./components/icon/ShareIcon"
import { Button } from "./components/ui/Button"
import { ItemCard } from "./components/ui/ItemCard"
import { SideBar } from "./components/ui/SideBar"

function App() {

  return (
    <>
      
      <div className="">
        <div>
          <SideBar/>
        </div>

        <div className="flex justify-end p-4 items-center">
          <span className="text-2xl flex-none ml-110 font-semibold">All Notes</span>
          <div className="flex justify-end items-center flex-1">
            <Button text="Add Content" varient="primary" frontIcon={<AddIcon/>}/>
            <Button text="Share Brain" varient="secondary" frontIcon={<ShareIcon/>}/>
          </div>
        </div>
      </div>

      
      <div className="ml-110 grid grid-cols-4 gap-10 mt-10">
          <ItemCard icon={<DocumentIcon/>} title="Project Ideas" date={`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`}
          content="there are some ideas about project : 1. T3 chat 2. Think new"/>
          <ItemCard icon={<DocumentIcon/>} title="Project Ideas" date={`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`}
          content="there are some ideas about project : 1. T3 chat 2. Think new"/>
          <ItemCard icon={<DocumentIcon/>} title="Project Ideas" date={`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`}
          content="there are some ideas about project : 1. T3 chat 2. Think new"/>
          <ItemCard icon={<DocumentIcon/>} title="Project Ideas" date={`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`}
          content="there are some ideas about project : 1. T3 chat 2. Think new"/>
          <ItemCard icon={<DocumentIcon/>} title="Project Ideas" date={`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`}
          content="there are some ideas about project : 1. T3 chat 2. Think new"/>
      </div>
      
    </>
  )
}

export default App

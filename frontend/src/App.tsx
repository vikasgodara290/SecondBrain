import { useState } from "react"
import { AddIcon } from "./components/icon/AddIcon"
import { DocumentIcon } from "./components/icon/DocumentIcon"
import { ShareIcon } from "./components/icon/ShareIcon"
import { AddContent } from "./components/ui/AddContent"
import { Button } from "./components/ui/Button"
import { ItemCard } from "./components/ui/ItemCard"
import { SideBar } from "./components/ui/SideBar"

function App() {
  const [isAddContent, setIsAddContent] = useState(false);

  function handleAddContentOnClick(){
    setIsAddContent(true);
  }

  function handleCancelOnClick(){
    setIsAddContent(false);
  }

  return (
    <>
      
      <div className="">
        <div>
          <SideBar/>
        </div>

        <div className="flex justify-end p-4 items-center">
          <span className="text-2xl flex-none ml-110 font-semibold">All Notes</span>
          <div className="flex justify-end items-center flex-1">
            <Button text="Add Content" varient="primary" frontIcon={<AddIcon/>} onClick={handleAddContentOnClick}/>
            <Button text="Share Brain" varient="secondary" frontIcon={<ShareIcon/>}/>
          </div>
        </div>
      </div>

      
      <div className="ml-110 mt-10 grid 2xl:grid-cols-4 gap-6 xl:grid-cols-3">
          <ItemCard icon={<DocumentIcon/>} title="Project Ideas" date={`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`}
          link="https://www.youtube.com/embed/9oqK2wRi15U?si=NW4OIqyz25qC_2nR"/>
          <ItemCard icon={<DocumentIcon/>} title="Project Ideas" date={`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`}
          link="https://x.com/realDonaldTrump/status/1895566669281636846"/>
          <ItemCard icon={<DocumentIcon/>} title="Project Ideas" date={`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`}
          link="https://coinmarketcap.com/"/>
          <ItemCard icon={<DocumentIcon/>} title="Project Ideas" date={`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`}
          link="https://tailwindcss.com/docs/responsive-design"/>
          <ItemCard icon={<DocumentIcon/>} title="Project Ideas" date={`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`}
          link="https://www.youtube.com/watch?v=nVyD6THcvDQ"/>
          <ItemCard icon={<DocumentIcon/>} title="Project Ideas" date={`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`}
          link="https://www.youtube.com/embed/SweexyXMYYc"/>

      </div>
      

      {isAddContent && <div className="flex fixed inset-0 justify-center w-screen h-screen items-center bg-black/50" ><AddContent onClick={handleCancelOnClick}/></div>}
    </>
  )
}

export default App

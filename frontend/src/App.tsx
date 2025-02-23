import { AddIcon } from "./components/icon/AddIcon"
import { ShareIcon } from "./components/icon/ShareIcon"
import { Button } from "./components/ui/Button"

function App() {

  return (
    <>
      <Button text="Add Content" varient="primary" frontIcon={<AddIcon/>}/>
      <Button text="Share Brain" varient="secondary" frontIcon={<ShareIcon/>}/>
    </>
  )
}

export default App

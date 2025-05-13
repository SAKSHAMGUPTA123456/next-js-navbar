import { useRef } from "react"
import "./index.css"

const Index=()=>{
  return(
   <>
 <div className="flex justify-center mt-6">
   <div className="flex bg-black" style={{width:"250px",borderRadius:"40px"}}>
   
    <div  className="text-white ml-3 hover:text-black hover:bg-white">HOME</div>
    <div  className="text-white ml-3 hover:text-black hover:bg-white">CONTACT</div>
    <div  className="text-white ml-3 hover:text-black hover:bg-white">ABOUT</div>
    </div>
 </div>
   </>
  )

}
export default Index
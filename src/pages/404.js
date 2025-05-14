import  { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Index from "./index"
const ErrorPage = () => {
  const router=useRouter()
  const handling=()=>{
    setInterval(() => {
      router.push("/")
    },5000);
  }
  const colors = [
  "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black",
  "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate",
  "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod",
  "DarkGray", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed",
  "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue",
  "DimGray", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite",
  "Gold", "GoldenRod", "Gray", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed",
  "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue",
  "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen",
  "LightSkyBlue", "LightSlateGray", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta",
  "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen",
  "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy",
  "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen"
];

 const [color,newcolor]=useState('red')
    const [random,newrand]=useState(0)
useEffect(()=>{
setInterval(() => {
   
  let gh=parseInt(Math.random()*100)
  newrand(gh)
}, 2000);
},[])
useEffect(()=>{

newcolor(colors[random])

},[random])
useEffect(()=>{
 document.body.style.backgroundColor=color
 return () => {
    document.body.style.backgroundColor = ""; // or "white" or any default color
  };
},[color])
  return (
    <div>
      <Index/>
    <h1>YOU HAD OPENED ERROR PAGE</h1>
    {/* <Link href="/"> */}
    {/* <button onClick={()=>router.push("/")} */}
      <button onClick={()=>handling()}>GO BACK TO HOME PAGE</button>
      {/* </button> */}
    {/* \</Link> */}
    </div>
  );
};

export default ErrorPage;

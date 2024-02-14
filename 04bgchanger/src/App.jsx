import { useState } from "react"


function App() {
  const [color,setColor] =useState ("olive")
  return (
    <>
     <div className="w-full h-screen duration-200"
     style={{backgroundColor :color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-50 rounded-2xl px-3 py-2 cursor-pointer">
          <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full shadow-xl text-white" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-full shadow-xl text-white" style={{backgroundColor:"green"}}>Green</button>
          <button  onClick={()=>setColor("blue")}className="outline-none px-4 py-1 rounded-full shadow-xl text-white" style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("black")} className="outline-none px-4 py-1 rounded-full shadow-xl text-white" style={{backgroundColor:"black"}}>Black</button>
          <button  onClick={()=>setColor("olive")}className="outline-none px-4 py-1 rounded-full shadow-xl text-white" style={{backgroundColor:"olive"}}>Olive</button>
          <button  onClick={()=>setColor("pink")}className="outline-none px-4 py-1 rounded-full shadow-xl text-black" style={{backgroundColor:"pink"}}>Pink</button>
          <button  onClick={()=>setColor("Orange")}className="outline-none px-4 py-1 rounded-full shadow-xl text-white" style={{backgroundColor:"Orange"}}>Orange</button>
          <button  onClick={()=>setColor("Yellow")}className="outline-none px-4 py-1 rounded-full shadow-xl text-black" style={{backgroundColor:"Yellow"}}>Yellow</button>
          <button  onClick={()=>setColor("Lime")}className="outline-none px-4 py-1 rounded-full shadow-xl text-black" style={{backgroundColor:"Lime"}}>Lime</button>
          <button  onClick={()=>setColor("Purple")}className="outline-none px-4 py-1 rounded-full shadow-xl text-white" style={{backgroundColor:"Purple"}}>Purple</button>
          <button  onClick={()=>setColor("Lavender")}className="outline-none px-4 py-1 rounded-full shadow-xl text-black" style={{backgroundColor:"Lavender"}}>Lavender</button>
          <button  onClick={()=>setColor("White")}className="outline-none px-4 py-1 rounded-full shadow-xl text-White" style={{backgroundColor:"White"}}>White</button>
        </div>
      </div>
      
     </div>
    </>
  )
}

export default App

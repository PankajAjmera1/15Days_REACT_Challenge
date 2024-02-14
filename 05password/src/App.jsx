import { useState ,useCallback ,useEffect,useRef} from "react"

function App() {
   const [length,setLength] = useState(8)
   const [numberAllowed,setnumberAllowed] = useState(false)
   const [charAllowed,setcharAllowed] = useState(false)
   const [password,setPassword] = useState("")

   //refhook

   const passwordRef =useRef(null)

   const passwordGenerator = useCallback(()=> {
    let pass =""
    let str =
     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

     if(numberAllowed) str += "0123456789"
     if(charAllowed) str += "!@#%&*=[]~"
     for (let i = 1; i <=length; i++){
      
     let char =Math.floor(Math.random()*str.length+1)
     pass += str.charAt(char)

     }
     setPassword(pass)



   },[length,numberAllowed,charAllowed,setPassword])

   const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
   },[password])

   useEffect(() =>{
    passwordGenerator()
   },[length,numberAllowed,charAllowed,passwordGenerator])

   
  return (
    <>
   <div className="w-full max-w-md mx-auto max-h-full shadow-lg rounded-lg px-4 my-8 text-orange-600 bg-slate-700">
    <h1 className="text-white text-center my-5">Password Generator</h1>
    <div className="flex shadowlg rounded-lg overflow-hidden mb-3">
      <input
       type="text" 
       value={password}
       className="outline-none w-full py-1 px-3 my-4 rounded-lg"
       placeholder="password"
       readOnly
       ref={passwordRef}

      />
      <button
        onClick={copyPasswordToClipboard}
       className="bg-blue-700  rounded-lg  outline-none  py-0.5 shrink-0  px-3 m-2 mr-3 text-white">Copy</button>
    </div>
    <div className="flex text-lg gap-x-2  max-h-full mb-6">
      <div className="flex items-center gap-x-1 mb-10">
    <input
     type="range"
     min={8}
     max={100}
     value={length}
     className="cursor-pointer"
     onChange={(e) => {setLength(e.target.value)}}
      />
      <label > Length :{length}</label>

      <div className="flex items-center gap-x-1">
    <input 
    type="checkbox"
    defaultChecked ={numberAllowed}
    id="numberInput"
    onChange={()=> {
      setnumberAllowed((prev)=>!prev)
    }}
     />
     <label >Numbers</label>


      </div>
      <div className="flex items-center gap-x-1">
    <input 
    type="checkbox"
    defaultChecked ={charAllowed}
    id="charInput"
    onChange={()=> {
      setcharAllowed((prev)=>!prev)
    }}
     />
     <label >Characters</label>


      </div>

      </div>
     
    </div>
   
   </div>

    </>
  )
}

export default App

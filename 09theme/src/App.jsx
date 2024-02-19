
import './App.css'
import Card from './Components/Card'
import ThemeBtn from './Components/Themebutton'
import { ThemeProvider } from './Contexts/Theme'
import {useState,useEffect}  from 'react'
 
function App() {
  const [themeMode ,setThemeMode] = useState("light")


  const LightTheme =() => {
    setThemeMode("light")
  }

  const darkTheme =() => {
    setThemeMode("dark")
  }

useEffect(() => {
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)

  
     
}, [themeMode])


  return (
    <ThemeProvider  value={{themeMode,LightTheme,darkTheme}}>
    
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      {/* theme btn */}
                      <ThemeBtn/>
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      {/* card */}
                      <Card/>
                       
                    </div>
                </div>
            </div>

    </ThemeProvider>
  )
}

export default App

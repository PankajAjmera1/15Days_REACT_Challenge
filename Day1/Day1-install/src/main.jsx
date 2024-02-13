import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



const anotherElement =(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const ReactElement =React.createElement(
  'a',
  {href:'https://google.com' ,target :'_blank'},
  'Clime me to visit google'
)


ReactDOM.createRoot(document.getElementById('root')).render(

  <App/>
  
)

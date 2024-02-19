
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>hi</h1>
    <h1>pankaj</h1>
      <h1>Decoder Pankaj</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App

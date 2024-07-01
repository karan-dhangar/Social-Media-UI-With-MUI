import Add from "./components/Add"
import Feed from "./components/Feed"
import Navbar from "./components/Navbar"
import Rightbar from "./components/Rightbar"
import Sidebar from "./components/Sidebar"
import Stack from '@mui/material/Stack'

function App() {
  return (
    <div>
    <Navbar/>  
    <Stack direction="row" spacing={2} justifyContent="space-between" >
      <Sidebar />
      <Feed />
      <Rightbar />  
    </Stack>
    <Add />
    </div>
    
  )
}

export default App

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import House from '@mui/icons-material/House';
import Storefront from '@mui/icons-material/Storefront';
import Article from '@mui/icons-material/Article';
import Groups from '@mui/icons-material/Groups';
import Person from '@mui/icons-material/Person';
import Settings from '@mui/icons-material/Settings';
import AccountBox from '@mui/icons-material/AccountBox';
import ModeNight from '@mui/icons-material/ModeNight';
import  Switch  from '@mui/material/Switch'
const Sidebar = () => {
  return (
    <Box  flex={1} p={2} bgcolor={"white"} sx={{display:{xs:"none" , sm:"block"}}} >
      <Box position="fixed" >
        <List>
          <ListItem disablePadding>
            <ListItemButton component= "a" href='#home' >
              <ListItemIcon>
                <House />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component= "a" href='#pages' >
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component= "a" href='#groups' >
              <ListItemIcon>
                <Groups />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component= "a" href='#marketPlace' >
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
        

          <ListItem disablePadding>
            <ListItemButton component= "a" href='#friends' >
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component= "a" href='#settings' >
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component= "a" href='#profile' >
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
            <Switch />
            </ListItemButton>
          </ListItem> 
    </List> 
    </Box>
    </Box>
  )
}

export default Sidebar
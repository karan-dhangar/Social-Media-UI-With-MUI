import { AppBar, Avatar, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material"
import PetsIcon from '@mui/icons-material/Pets';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Mail from "@mui/icons-material/Mail";
import { Notifications } from "@mui/icons-material";
import { useState } from "react";

const Search = styled("div")  ({
    backgroundColor: "white",
    padding: "0px 10px",
    borderRadius: "5px",
    width : "40%"
})
const Icons = styled("div")({
  gap:"20px",
  alignItems: "center",
})
const UserBox = styled("div")({
  gap:"10px",
  alignItems:"center"
})
const Navbar = () => {
  const [open , setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <AppBar position="fixed">
      <Toolbar sx={{display:"flex",justifyContent:"space-between"}} >
        <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>KARAN D</Typography>
        <PetsIcon sx={{display:{xs:"flex",sm:"none"}}} />
        <Search> <InputBase placeholder="Search..." /> </Search>
        <Icons sx={{display:{sm:"flex",xs:"none"}}}>
        <Badge badgeContent={4} color="error">
        <Mail />
        </Badge>
        <Badge badgeContent={4} color="error">
          <Notifications />
        </Badge>
        <Avatar onClick = { (event:any) =>{ 
          setAnchorEl(event.currentTarget);
          setOpen(true) 
          
        } 
        } 
          sx={{width:30,height:30}} src="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=1024x1024&w=is&k=20&c=v0FzN5RD19wlMvrkpUE6QKHaFTt5rlDSqoUV1vrFbN4=" />
        </Icons>
        <UserBox sx={{display:{xs:"flex" , sm:"none"}}}>
        <Avatar sx={{width:30,height:30}} src="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=1024x1024&w=is&k=20&c=v0FzN5RD19wlMvrkpUE6QKHaFTt5rlDSqoUV1vrFbN4="/>
        <Typography variant="h6" >KARAN D</Typography>
        </UserBox>
        <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal : 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal : 'right'
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={()=> {setOpen(false)}}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      </Toolbar>
    </AppBar>
    )
}

export default Navbar
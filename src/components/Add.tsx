import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import styled from "@emotion/styled";
import { EmojiEmotions, PersonAdd, Image, VideoCameraBack, DateRange } from "@mui/icons-material";


function stringAvatar(name: string) {
     return {
       sx: {
         bgcolor: "#1976d2",
       },
       children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
     };
   }
const Add = () => {
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     const StyledModal = styled(Modal)({
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
     })
     const UserBox = styled(Box)({
          display:"flex",
          alignItems:"center",
          gap:"20px",
          marginBottom : "20px"
     }) 
     return (
          <>
           <Tooltip title="Add" sx={{
               position:"fixed",
               bottom:20,
               left:{xs:"calc(50%)",sm:20}
           }}
           onClick={handleOpen}
           >
           <Fab color="primary" aria-label="addIcon">
              <AddIcon/>
           </Fab>
           </Tooltip>
           <StyledModal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
           <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
             <Typography variant="h6" color="gray" textAlign="center">Create Post </Typography>
             <UserBox>
             <Avatar {...stringAvatar('Karan Dhangar')} />
             <Typography fontWeight={500} variant="body1">Karan Dhangar</Typography>
             </UserBox>
             <TextField
               sx={{width:"100%"}}
               id="standard-multiline-static"
               multiline
               rows={3}
               placeholder="What's on your mind"
               variant="standard"
             />
             <Stack direction="row" gap={1} mt={2} mb={3}>
              <EmojiEmotions color="primary"/>
              <Image color="secondary" />
              <VideoCameraBack color="success" />
              <PersonAdd color="error"/>
             </Stack>
             <ButtonGroup fullWidth variant="contained" aria-label="Basic button group">
                <Button>Post</Button>
                <Button sx={{width:"100px"}} >
                  <DateRange />
                </Button>
              </ButtonGroup>
          </Box>
          </StyledModal>
       </>
     
     )
}
export default Add ;



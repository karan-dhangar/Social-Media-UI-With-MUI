import { Avatar, AvatarGroup, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import React from "react"

const Rightbar = () => {
  return (
    <Box bgcolor="white" flex={2} p={2} sx={{display:{xs:"none" , sm:"block"}}} >
      <Box position="fixed" marginTop={10}> 
        <Typography variant="h6" fontWeight={500}> Online friends </Typography>
        <AvatarGroup total={9} max={7}>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
          <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={500} mt={2} mb={2} >Latest Photos </Typography>
        <ImageList cols={3} gap={5} rowHeight={100}>
          <ImageListItem >
            <img
              src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`}
              alt={`Breakfast`}
              loading="lazy"
            />
        </ImageListItem>
        <ImageListItem >
            <img
              src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`}
              alt={`Breakfast`}
              loading="lazy"
            />
        </ImageListItem>
        <ImageListItem >
            <img
              src={`https://images.unsplash.com/photo-1558642452-9d2a7deb7f62`}
              alt={`Breakfast`}
              loading="lazy"
            />
        </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={500} mt={2} mb={2} > Latest Conversation </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

      </Box>
    </Box>
  )
}

export default Rightbar
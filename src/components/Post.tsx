import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import Checkbox from "@mui/material/Checkbox"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import {Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material"
import Avatar from "@mui/material/Avatar"
const Post = () => {
return (
    <Card sx={{margin:5}}>
    <CardHeader
    avatar={
    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
        R
    </Avatar>
    }
    action={
        <IconButton aria-label="settings">
        <MoreVert />
        </IconButton>
    }
    title="Shrimp and Chorizo Paella"
    subheader="September 14, 2016"
    />
    <CardMedia
    component="img"
    height="300"
    image="https://images.pexels.com/photos/165537/pexels-photo-165537.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt="Paella dish"
    />
    <CardContent>
    <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
    </Typography>
    </CardContent>
    <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
    <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
    </IconButton>
    <IconButton aria-label="share">
        <Share />
    </IconButton>
    </CardActions>
</Card>
)
}

export default Post
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

// document.querySelectorAll(".Em2LrSSfvrgXQoajs6cm img").forEach(item=>{
//     console.log(item.src)
// })

export default function CardCatologe({ Imgpath, tittle, description }) {
  return (
    <Grid item lg={2} xl={2} md={2} sm={4} xs={6}>
      <Card sx={{ width: "100%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={Imgpath}
            alt="Ablum image"
          />
          <CardContent>
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: 2,
              }}
              component="p"
            >
              {tittle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

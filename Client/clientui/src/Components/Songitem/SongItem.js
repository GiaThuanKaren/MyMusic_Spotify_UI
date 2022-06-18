import { Grid } from "@mui/material";
import React from "react";
import style from "./SongItem.module.css";
function SongItem({ isWrap, IsHaveBtn }) {
  return (
    <Grid item>
      <div className={`${style.SongItem}`}></div>
    </Grid>
  );
}

export default SongItem;

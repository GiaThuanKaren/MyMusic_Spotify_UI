import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import SongItem from "../Songitem/SongItem";
import style from "./ListSong.module.css";
function ListSong({ tittle, IsHaveBtnALL, IsWrap, ColSpacing, RowSpacing }) {
  return (
    <div className={`${style.ListSongContainer}`}>
      <div className={`${style.ListSongHeading}`}>
        <h3>{tittle}</h3>
        {IsHaveBtnALL ? <Link to="/all">Xem tất cả</Link> : null}
      </div>
      <Grid
        className={(IsWrap ? `${style.WrapListSong}` : null) + ""}
        container
        columnSpacing={ColSpacing}
        rowSpacing={RowSpacing}
      >
        <SongItem IsHaveBtn/>
        <SongItem />
      </Grid>
    </div>
  );
}

export default ListSong;

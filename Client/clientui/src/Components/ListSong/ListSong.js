import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import style from "./ListSong.module.css";
function ListSong({ tittle, IsHaveBtnALL, IsWrap, ColSpacing, RowSpacing }) {
  return (
    <div className={`${style.ListSongContainer}`}>
      <div className={`${style.ListSongHeading}`}>
        <h1>{tittle}</h1>
        {IsHaveBtnALL ? <Link>Xem tất cả</Link> : null}
      </div>
      <Grid container columnSpacing={ColSpacing} rowSpacing={RowSpacing}>
        <div className={`${IsWrap ? style.WrapListSong : null }`}>
            
        </div>
      </Grid>
    </div>
  );
}

export default ListSong;

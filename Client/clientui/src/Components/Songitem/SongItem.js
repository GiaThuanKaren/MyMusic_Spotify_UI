import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";
import React from "react";
import { IconSolid } from "../../util/FontAwesome/FontAwesome";
import style from "./SongItem.module.css";
function SongItem({IdSongItem,tittle,Artists,Thumbnail, isWrap, IsHaveBtn }) {
  return (
    <Grid  item lg={2} md={2} sm={3} xs={4}>
      <div idsong={IdSongItem} className={`${style.SongItem}`}>
        <div className={`${style.SongItemContainer}`}>
          <div className={`${style.SongItemImg}`}>
            <img
              className={`${style["SongItemImg_img"]}`}
              src={Thumbnail ? Thumbnail:"https://i.scdn.co/image/ab67656300005f1f3e1bae386c6a6caf964d36d1"}
            />
            {IsHaveBtn ? (
              <>
                <div className={`${style.SongItezmBtnPlay}`}>
                  <FontAwesomeIcon icon={IconSolid.faPlay} />
                </div>
              </>
            ) : null}
          </div>
          <div className={`${style.SongItemInfo}`}>
            <h4 className={`${style.SongItem_NameSong}`}>{tittle ? tittle : "Name Song"}</h4>
            <p className={`${style.SongItem_Artists}`}>{Artists ? Artists : "Name Artits....."}</p>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default SongItem;

import style from "./DetailPlaylist.module.css";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconSolid } from "../../util/FontAwesome/FontAwesome";
function DetailPlaylist() {
  const param = new URLSearchParams(location.search).get("id");
  useEffect(() => {
    fetch(`http://localhost:5000/detail/${param}`)
      .then((res) => res.json())
      .then((items) => {
        const { data } = items;
        const { sortDescription, title, song, artistsNames } = data;
        console.log(data, sortDescription, title, song, artistsNames);
      })
      .catch((e) => {
        console.log("Detail Playlist ", e);
      });
  }, []);

  return (
    <>
      <div className={`${style.DetailPlayList}`}>
        <div className={`${style.SectionInfoPlaylist}`}>
            <h1>Section Info PlayList</h1>
        </div>
        <div className={`${style.PlayBtnDetailPlayList}`}>
            <FontAwesomeIcon icon={IconSolid.faPlayCircle} />
        </div>
      </div>
    </>
  );
}

export default DetailPlaylist;

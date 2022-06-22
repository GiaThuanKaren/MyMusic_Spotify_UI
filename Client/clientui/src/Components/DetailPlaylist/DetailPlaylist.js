import style from "./DetailPlaylist.module.css";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconSolid } from "../../util/FontAwesome/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { SetActivePlay, SetSongToGlobal } from "../../Redux/Actions/Actions";
import { SetLocalSong } from "../../util/Functions/SetLocal";
import { ConvertTimePlaying } from "../../util/Functions/ConverTimeSong";
function DetailPlaylist() {
  const [isLoop, SetIsLoop] = useState(false);
  const [properties, SetProperties] = useState({
    Des: "",
    title: "",
    songs: [],
    artistsNames: "",
  });
  const param = new URLSearchParams(location.search).get("id");
  const GlobalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const SetStatusPlaying = function () {
    dispatch(SetActivePlay(!GlobalState.isPlaying));
  };
  useEffect(() => {
    fetch(`http://localhost:5000/detail/${param}`)
      .then((res) => res.json())
      .then((items) => {
        const { data } = items;
        const { sortDescription, title, song, artistsNames } = data;
        SetProperties({
          ...properties,
          title: title,
          Des: sortDescription,
          artistsNames: artistsNames,
          songs: song.items,
        });
        console.log(data, sortDescription, title, song, artistsNames);
      })
      .catch((e) => {
        console.log("Detail Playlist ", e);
      });
  }, []);
  // console.log(properties);

  const SetSong = function (id) {
    dispatch(SetActivePlay(false));
    dispatch(SetSongToGlobal(id));
  };
  return (
    <>
      <div className={`${style.DetailPlayList}`}>
        <div className={`${style.SectionInfoPlaylist}`}>
          <h1>Section Info PlayList</h1>
        </div>
        <div className={`${style.PlayBtnDetailPlayList}`}>
          {GlobalState.isPlaying ? (
            <FontAwesomeIcon
              onClick={() => {
                SetStatusPlaying();
              }}
              icon={IconSolid.faPauseCircle}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => {
                SetStatusPlaying();
              }}
              icon={IconSolid.faPlayCircle}
            />
          )}
        </div>
        <ul className={`${style.ListSong}`}>
          {properties.songs.map(function (item, idx) {
            console.log(item.thumbnailM)
            return (
              <li
                onClick={() => {
                  SetLocalSong(item.encodeId);
                  SetSong(item.encodeId);
                }}
                key={item.encodeId}
                idsong={item.encodeId}
                className={`${style.ListSongItem}`}
              >
                <div className={`${style.Left_ListSongItem}`}>
                  <p>{idx+1}</p>
                  <div style={{backgroundImage:`url(${item.thumbnailM})`}} className={`${style.Left_ListSongItem_Img}`}>
                    {/* <img src={item.thumbnailM} style={{width:"100%", height:"auto",objectFit:"cover"}} src=""/> */}
                  </div>
                  <p>{item.title}</p>
                </div>
                <div className={`${style.Right_ListSongItem}`}>
                    <p>{ConvertTimePlaying(item.duration)}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default DetailPlaylist;

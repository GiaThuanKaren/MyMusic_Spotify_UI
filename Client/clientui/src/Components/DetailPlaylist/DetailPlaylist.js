import style from "./DetailPlaylist.module.css";
import { useEffect, useRef, useState } from "react";
import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconSolid } from "../../util/FontAwesome/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import {
  SetActivePlay,
  SetSongQueue,
  SetSongToGlobal,
} from "../../Redux/Actions/Actions";
import { SetLocalSong, SetQueueSong } from "../../util/Functions/SetLocal";
import { ConvertTimePlaying } from "../../util/Functions/ConverTimeSong";
import { useParams } from "react-router-dom";
import SetStatusEleAudio, {
  SelectItemToPlay,
} from "../../util/Functions/SetStatusEleAudio";
function DetailPlaylist() {
  const EleTop = useRef(null);
  const { id } = useParams();
  const EleContainer = useRef(null);
  const [isLoop, SetIsLoop] = useState(false);
  const [properties, SetProperties] = useState({
    Des: "",
    title: "",
    songs: [],
    artistsNames: "",
  });
  const param = new URLSearchParams(window.location.search).get("id");
  // console.log(param,"New Id Playlist Incoming")
  console.log(param,"-------")
  const GlobalState = useSelector((state) => state);
  // console.log(GlobalState.SongQueue);
  const dispatch = useDispatch();
  const SetStatusPlaying = function () {
    SelectItemToPlay(GlobalState.EleAudio, GlobalState.isPlaying);
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
        EleTop.current.scrollIntoView({
          behavior :"auto"
        })
        console.log(data, sortDescription, title, song, artistsNames);
      })
      .catch((e) => {
        alert("Bài Này Thuộc Tài Khoản VIP , Vui Lòng Chọn Bài Khác ạ");
        console.log("Detail Playlist ", e);
      });
  }, [param]);
  // console.log(properties);
 
  
  const SetSong = function (id, nameSong, img, indexSong) {
    dispatch(SetActivePlay(true));
    dispatch(
      SetSongToGlobal({
        id: id,
        name: nameSong,
        img: img,
        indexSong: indexSong,
      })
    );
    SetStatusEleAudio(GlobalState.EleAudio, true);
    SetQueueSong(properties.songs ? properties.songs : []);
    const idFiltered = properties.songs.filter(function (item, idx) {
      return item.encodeId != id;
    });
    console.log("Flitered 58", idFiltered);
    dispatch(SetSongQueue(properties.songs ? properties.songs : []));
    // dispatch(SetActivePlay(true));
  };
  return (
    <>
      <div ref={EleTop}>
        
      </div>
      <div ref={EleContainer} className={`${style.DetailPlayList}`}>
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
          <FontAwesomeIcon icon={IconSolid.faHeart} />
        </div>
        <ul className={`${style.ListSong}`}>
          {properties.songs.map(function (item, idx) {
            {
              /* console.log(item.thumbnailM) */
            }
            return (
              <li
                onClick={() => {
                  SetLocalSong(item.encodeId, item.title, item.thumbnailM);
                  SetSong(item.encodeId, item.title, item.thumbnailM, idx);
                }}
                key={item.encodeId}
                idsong={item.encodeId}
                className={`${style.ListSongItem}`}
              >
                <div className={`${style.Left_ListSongItem}`}>
                  <p className={`${style.IndexSong}`}>
                    {GlobalState.isPlaying &&
                    item.encodeId == GlobalState.Song ? (
                      <img src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f93a2ef4.gif" />
                    ) : (
                      idx + 1
                    )}
                  </p>
                  <div
                    style={{ backgroundImage: `url(${item.thumbnailM})` }}
                    className={`${style.Left_ListSongItem_Img}`}
                  >
                    {/* <img src={item.thumbnailM} style={{width:"100%", height:"auto",objectFit:"cover"}} src=""/> */}
                  </div>
                  <p className={`${style.TitleSong}`}>{item.title}</p>
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

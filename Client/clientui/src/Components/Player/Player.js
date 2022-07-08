import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Icon } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SetActivePlay,
  SetEleToGlobal,
  SetSongToGlobal,
} from "../../Redux/Actions/Actions";
import { IconSolid } from "../../util/FontAwesome/FontAwesome";
import { ConvertTimePlaying } from "../../util/Functions/ConverTimeSong";
import SetStatusEleAudio, {
  SelectItemToPlay,
} from "../../util/Functions/SetStatusEleAudio";
import style from "./Player.module.css";

function Player() {
  const GlobalState = useSelector((state) => state);
  const EleAudio = useRef(null);
  // console.log(GlobalState, "State Global");
  const dispacth = useDispatch();
  const [song, setSong] = useState("");
  const [timeSong, SettimeSong] = useState({
    timeCurrent: "",
    duration: "",
    PerCent: 0,
  });
  const [indexCurSong, SetindexCurSong] = useState(0);
  const [loop, SetLoop] = useState(false);
  // console.log(GlobalState.Song)
  const SetStatusPlaying = function () {
    SelectItemToPlay(EleAudio.current, GlobalState.isPlaying);
    // SetStatusEleAudio(EleAudio.current,GlobalState.isPlaying)
    dispacth(SetActivePlay(!GlobalState.isPlaying));
  };

  useEffect(() => {
    // alert("change")

    if (GlobalState.Song != "") {
      console.log("New ID ", GlobalState.Song);
      fetch(`http://localhost:5000/song/${GlobalState.Song}`)
        .then((res) => res.json())
        .then((item) => {
          // const {} = item.data;
          console.log(item.data["128"]);
          setSong(item.data["128"]);
        });
    }
  }, [GlobalState.Song]);
  // console.log(" Player runiing",EleAudio)
  // console.log(GlobalState.isPlaying, "Player",typeof EleAudio.current);
  return (
    <Grid className={`${style.MainPlayerBottom}`} container>
      <Grid item lg={3} md={2}>
        <div className={`${style.LeftSideConTainer}`}>
          <div
            className={`${style.LeftSideSongImg}`}
            style={{ backgroundImage: `url(${GlobalState.ImageSongPlaying})` }}
          ></div>
          <p className={`${style.TitleSong}`}>{GlobalState.TittleSong}</p>
        </div>
      </Grid>
      <Grid item lg={6} md={8}>
        <div className={`${style.ControlSong}`}>
          <div className={`${style.ControlSongBtn}`}>
            <FontAwesomeIcon
              className={style.BtnControlSong}
              icon={IconSolid.faShuffle}
            />
            <FontAwesomeIcon
              className={style.BtnControlSong}
              icon={IconSolid.faBackwardFast}
            />
            {GlobalState.isPlaying ? (
              <FontAwesomeIcon
                className={`${style.BtnControlSong} ${style.BtnPLayAndPause}`}
                onClick={() => {
                  SetStatusPlaying();
                }}
                icon={IconSolid.faPauseCircle}
              />
            ) : (
              <FontAwesomeIcon
                className={`${style.BtnControlSong} ${style.BtnPLayAndPause}`}
                onClick={() => {
                  SetStatusPlaying();
                }}
                icon={IconSolid.faPlayCircle}
              />
            )}
            <FontAwesomeIcon
              className={style.BtnControlSong}
              icon={IconSolid.faForwardFast}
            />
            <FontAwesomeIcon
              onClick={() => {
                SetLoop(!loop);
              }}
              className={`${style.BtnControlSong} ${
                loop ? style.LoopActive : ""
              }`}
              icon={IconSolid.faRepeat}
            />
          </div>
          <div className={`${style.TimeSong}`}>
            <audio
              onLoadedData={() => {
                console.log("Loaded Data ");
                dispacth(SetEleToGlobal(EleAudio.current));
                SettimeSong({
                  ...timeSong,
                  duration: ConvertTimePlaying(EleAudio.current.duration),
                });
              }}
              onPlaying={() => {
                console.log("Is Playing True");
              }}
              onPause={() => {
                console.log("Is Playing False");
              }}
              onEnded={() => {
                if (loop) {
                  EleAudio.current.loop;
                  dispacth(SetActivePlay(true));
                } else {
                  console.log("Next Song 123");
                  let idNextSong = GlobalState.SongQueue[GlobalState.indexSong +1];
                  console.log(idNextSong.encodeId);
                  dispacth(
                    SetSongToGlobal({
                      id: idNextSong.encodeId,
                      name: idNextSong.title,
                      img: idNextSong.thumbnailM,
                    })
                  );
                  SetindexCurSong((prev) => prev + 1);
                  dispacth(SetActivePlay(true));
                }
              }}
              onTimeUpdate={(e) => {
                let timecur = ConvertTimePlaying(e.target.currentTime);
                // console.log(e.target.currentTime)
                let progress = Math.floor(
                  (e.target.currentTime / e.target.duration) * 100
                );
                // console.log(progress);
                SettimeSong({
                  ...timeSong,
                  PerCent: progress,
                  timeCurrent: timecur,
                });
              }}
              ref={EleAudio}
              src={song}
            ></audio>
            <p>{timeSong.timeCurrent ? timeSong.timeCurrent : "00 : 00"}</p>
            <input
              onChange={() => {}}
              className={`${style.RangeTimeSong}`}
              type="range"
              value={timeSong.PerCent ? timeSong.PerCent : 0}
              max={100}
              min={0}
              step={1}
            />
            <p>{timeSong.duration ? timeSong.duration : "00:00"}</p>
          </div>
        </div>
      </Grid>
      <Grid item lg={3} md={2}></Grid>
    </Grid>
  );
}

export default Player;

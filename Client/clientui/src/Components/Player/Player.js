import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Icon } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetActivePlay, SetEleToGlobal } from "../../Redux/Actions/Actions";
import { IconSolid } from "../../util/FontAwesome/FontAwesome";
import SetStatusEleAudio from "../../util/Functions/SetStatusEleAudio";
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
  // console.log(GlobalState.Song)
  const SetStatusPlaying = function () {
    // SetStatusEleAudio(EleAudio.current,GlobalState.isPlaying)
    dispacth(SetActivePlay(!GlobalState.isPlaying));
  };
  const ConvertTimePlaying = function (time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    if (min < 10) min = `0${min}`;
    if (sec < 10) sec = `0${sec}`;
    // console.log(min, sec);
    return `${min}:${sec}`;
  };
  // console.log(EleAudio, EleAudio.current , " 33 ")
  useEffect(() => {
    if (GlobalState.Song != "") {
      console.log("New ID ",GlobalState.Song)
      fetch(`http://localhost:5000/song/${GlobalState.Song}`)
        .then((res) => res.json())
        .then((item) => {
          // const {} = item.data;
          console.log(item.data["128"]);
          setSong(item.data["128"]);
        });
    }
  }, [GlobalState.Song]);
  // console.log(GlobalState.isPlaying, "Player",typeof EleAudio.current);
  return (
    <Grid className={`${style.MainPlayerBottom}`} container>
      <Grid item lg={3} md={2}></Grid>
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
                className={style.BtnControlSong}
                onClick={() => {
                  SetStatusPlaying();
                }}
                icon={IconSolid.faPauseCircle}
              />
            ) : (
              <FontAwesomeIcon
                className={style.BtnControlSong}
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
              className={style.BtnControlSong}
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
                // console.log("Is Playing True");
              }}
              onPause={() => {
                // console.log("Is Playing False");
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
              s
              src={song}
            ></audio>
            <p>{timeSong.timeCurrent ? timeSong.timeCurrent : "00 : 00"}</p>
            <input
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

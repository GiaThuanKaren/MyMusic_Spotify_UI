import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Icon } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetActivePlay } from "../../Redux/Actions/Actions";
import { IconSolid } from "../../util/FontAwesome/FontAwesome";
import style from "./Player.module.css";

function Player() {
  const GlobalState = useSelector((state) => state);
  const EleAudio = useRef();
  console.log(GlobalState, "State Global");
  const [song, setSong] = useState("");
  const [timeSong,SettimeSong]=useState({
      timeCurrent:"",
      duration:"",
      PerCent:0
  })
  const dispacth = useDispatch();
  const SetStatusPlaying = function () {
    dispacth(SetActivePlay(!GlobalState.isPlaying));
  };
  const ConvertTime = function(time){
      
  }
  useEffect(() => {
    fetch(`http://localhost:5000/song/ZUI7WC8C`)
      .then((res) => res.json())
      .then((item) => {
        const {} = item.data;
        // console.log(item.data["128"]);
        setSong(item.data["128"]);
      });
  }, []);
//   console.log(song, "25");
  return (
    <Grid className={`${style.MainPlayerBottom}`} container>
      <Grid item lg={3} md={2}></Grid>
      <Grid item lg={6} md={8}>
        <div className={`${style.ControlSong}`}>
          <div className={`${style.ControlSongBtn}`}>
            <FontAwesomeIcon icon={IconSolid.faBackwardFast} />
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
          </div>
          <div className={`${style.TimeSong}`}>
            <audio
            onPlaying={()=>{
                console.log("Is Playing True")
            }} 
            onPause={()=>{
                console.log("Is Playing False")
            }}
            onTimeUpdate={(e)=>{
                // console.log(e.target.currentTime)
                let progress = Math.floor(e.target.currentTime / e.target.duration *100)
                console.log(progress)
                SettimeSong({
                    ...timeSong,
                    PerCent:progress
                })
                
            }}
            ref={EleAudio} controls src={song}></audio>
            <p>12:00</p>
            <input
              className={`${style.RangeTimeSong}`}
              type="range"
              value={timeSong.PerCent}
              max={100}
              min={0}
              step={1}
            />
            <p>12:00</p>
          </div>
        </div>
      </Grid>
      <Grid item lg={3} md={2}></Grid>
    </Grid>
  );
}

export default Player;

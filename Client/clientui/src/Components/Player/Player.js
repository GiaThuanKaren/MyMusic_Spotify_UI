import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Grid, Icon, Slider } from "@mui/material"
import { useEffect, useMemo, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  SetActivePlay,
  SetEleToGlobal,
  SetSongToGlobal
} from "../../Redux/Actions/Actions"
import { IconSolid } from "../../util/FontAwesome/FontAwesome"
import { ConvertTimePlaying } from "../../util/Functions/ConverTimeSong"
import SetStatusEleAudio, {
  SelectItemToPlay
} from "../../util/Functions/SetStatusEleAudio"
import style from "./Player.module.css"

function Player() {
  const [volumPerCent, SetvolumPerCent] = useState(0)
  const GlobalState = useSelector(state => state)
  const EleAudio = useRef(null)
  // console.log(GlobalState, "State Global");
  const dispacth = useDispatch()
  const [song, setSong] = useState("")
  const [timeSong, SettimeSong] = useState({
    timeCurrent: "",
    duration: "",
    PerCent: 0
  })
  const [indexCurSong, SetindexCurSong] = useState(0)
  const [loop, SetLoop] = useState(false)
  const [random, SetRandom] = useState(false)
  // console.log(GlobalState.Song)
  const SetStatusPlaying = function () {
    SelectItemToPlay(EleAudio.current, GlobalState.isPlaying)
    // SetStatusEleAudio(EleAudio.current,GlobalState.isPlaying)
    dispacth(SetActivePlay(!GlobalState.isPlaying))
  }
  const RandomSong = function () {
    let IdRandDomSong
    do {
      IdRandDomSong = Math.abs(
        Math.floor(Math.random() * GlobalState.SongQueue.length)
      )
    } while (IdRandDomSong == GlobalState.indexSong)

    let NextSong = GlobalState.SongQueue[IdRandDomSong]
    console.log(IdRandDomSong, NextSong)
    dispacth(
      SetSongToGlobal({
        id: NextSong.encodeId,
        name: NextSong.title,
        img: NextSong.thumbnailM,
        indexSong: IdRandDomSong >= 0 ? IdRandDomSong : 0
      })
    )
    dispacth(SetActivePlay(true))
  }
  const ChangeToNextSong = function (stepToNextSong) {
    let idNextSong
    if (GlobalState.indexSong + stepToNextSong < GlobalState.SongQueue.length) {
      console.log("Still have song")
      idNextSong = GlobalState.SongQueue[GlobalState.indexSong + stepToNextSong]
    } else {
      console.log("No have song")
      idNextSong = GlobalState.SongQueue[0]
    }
    dispacth(
      SetSongToGlobal({
        id: idNextSong.encodeId,
        name: idNextSong.title,
        img: idNextSong.thumbnailM,
        indexSong:
          GlobalState.indexSong + stepToNextSong >= 0
            ? GlobalState.indexSong + stepToNextSong
            : 0
      })
    )
    dispacth(SetActivePlay(true))
    // SetindexCurSong((prev) => prev + 1);
  }
  useEffect(() => {
    // alert("change")

    if (GlobalState.Song != "") {
      console.log("New ID ", GlobalState.Song)
      console.log(
        `https://sportifymainserver.herokuapp.com/song/${GlobalState.Song}`
      )
      // http://localhost:5000
      // https://sportifymainserver.herokuapp.com
      fetch(`http://localhost:5000/song/${GlobalState.Song}`)
        .then(res => res.json())
        // ZingMp3.getSong(GlobalState.Song)
        .then(item => {
          // const {} = item.data;
          console.log(item.data["128"])

          setSong(item.data["128"])
        })
        .catch(e => {
          if (e) {
            // console.log()
            alert("Bài Này Thuộc Tài Khoản VIP , Vui Lòng Chọn Bài Khác ")

            console.log(e, "Player")
            ChangeToNextSong(1)
          }
        })
    }
    dispacth(SetEleToGlobal(EleAudio.current))
  }, [GlobalState.Song])
  useEffect(() => {
    console.log("Fix audio Volume")
    EleAudio.current.volume = 0.25
  }, [])
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
              onClick={() => {
                SetRandom(!random)
              }}
              className={`${style.BtnControlSong} ${
                random ? style.RandomActive : ""
              }`}
              icon={IconSolid.faShuffle}
            />
            <FontAwesomeIcon
              onClick={() => {
                ChangeToNextSong(-1)
              }}
              className={style.BtnControlSong}
              icon={IconSolid.faBackwardFast}
            />
            {GlobalState.isPlaying ? (
              <FontAwesomeIcon
                className={`${style.BtnControlSong} ${style.BtnPLayAndPause}`}
                onClick={() => {
                  SetStatusPlaying()
                }}
                icon={IconSolid.faPauseCircle}
              />
            ) : (
              <FontAwesomeIcon
                className={`${style.BtnControlSong} ${style.BtnPLayAndPause}`}
                onClick={() => {
                  SetStatusPlaying()
                }}
                icon={IconSolid.faPlayCircle}
              />
            )}
            <FontAwesomeIcon
              onClick={() => {
                ChangeToNextSong(1)
              }}
              className={style.BtnControlSong}
              icon={IconSolid.faForwardFast}
            />
            <FontAwesomeIcon
              onClick={() => {
                SetLoop(!loop)
              }}
              className={`${style.BtnControlSong} ${
                loop ? style.LoopActive : ""
              }`}
              icon={IconSolid.faRepeat}
            />
          </div>
          <div className={`${style.TimeSong}`}>
            <audio
              crossOrigin="use-credentials
              "
              onLoadedData={() => {
                console.log("Loaded Data ")
                SettimeSong({
                  ...timeSong,
                  duration: ConvertTimePlaying(EleAudio.current.duration)
                })
              }}
              onPlaying={() => {
                console.log("Is Playing True")
              }}
              onPause={() => {
                console.log("Is Playing False")
              }}
              onEnded={() => {
                if (random) return RandomSong()

                if (loop) {
                  dispacth(SetActivePlay(true))
                  let a = EleAudio.current.loop
                } else return ChangeToNextSong(1)
              }}
              onTimeUpdate={e => {
                let timecur = ConvertTimePlaying(e.target.currentTime)
                // console.log(e.target.currentTime)
                let progress = Math.floor(
                  (e.target.currentTime / e.target.duration) * 100
                )
                // console.log(progress);
                SettimeSong({
                  ...timeSong,
                  PerCent: progress,
                  timeCurrent: timecur
                })
              }}
              ref={EleAudio}
              src={song}
            ></audio>
            <p>{timeSong.timeCurrent ? timeSong.timeCurrent : "00 : 00"}</p>
            <input
              onChange={e => {
                const TimeSeek =
                  (e.target.value * EleAudio.current.duration) / 100
                // console.log(TimeSeek)
                EleAudio.current.currentTime = TimeSeek
                SettimeSong({
                  ...timeSong,
                  PerCent: e.target.value
                })
                // console.log(e.target.value)
              }}
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
      <Grid item lg={3} md={2}>
        <Grid
          className={`${style.RighSidePlayer}`}
          container
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid item>
            {volumPerCent == 0 && (
              <FontAwesomeIcon icon={IconSolid.faVolumeMute} />
            )}
            {volumPerCent >= 0.1 && volumPerCent <= 0.5 && (
              <FontAwesomeIcon icon={IconSolid.faVolumeDown} />
            )}
            {volumPerCent >= 0.51 && (
              <FontAwesomeIcon icon={IconSolid.faVolumeHigh} />
            )}
          </Grid>
          <Grid item>
            <input
              defaultValue={40}
              onChange={e => {
                SetvolumPerCent((e.target.value / 100).toFixed(1))
                EleAudio.current.volume = e.target.value / 100
              }}
              // value={volumPerCent}
              // onChange={(e) => {
              //   SetvolumPerCent((e.target.value / 100).toFixed(1));
              //   EleAudio.current.volume = e.target.value / 100;
              // }}

              type={"range"}
              min={0}
              max={100}
              step={1}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Player

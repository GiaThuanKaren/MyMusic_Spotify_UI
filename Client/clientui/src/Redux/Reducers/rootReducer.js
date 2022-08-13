import SetStatusEleAudio, {
  SelectItemToPlay
} from "../../util/Functions/SetStatusEleAudio"

const InitialState = {
  indexSong: 0,
  isPlaying: false,
  EleAudio: null,
  Song: localStorage.getItem("song")
    ? JSON.parse(localStorage.getItem("song")).id
    : "ZW8I78UO",
  SongQueue: localStorage.getItem("queue") ? localStorage.getItem("queue") : [],
  TittleSong: localStorage.getItem("song")
    ? JSON.parse(localStorage.getItem("song")).title
    : "",
  ImageSongPlaying: localStorage.getItem("song")
    ? JSON.parse(localStorage.getItem("song")).img
    : "",
  Volume: localStorage.getItem("song")
    ? JSON.parse(localStorage.getItem("song")).Volume
    : 0,
  IsLoading: true
}

const rootReducer = function (state = InitialState, action) {
  switch (action.type) {
    case "SETACTIVEPLAY": {
      console.log(state, action.payload)
      SelectItemToPlay(state.EleAudio, action.payload)
      // SetStatusEleAudio(state.EleAudio,action.payload)
      return {
        ...state,
        isPlaying: action.payload
      }
      break
    }
    case "SetEleGlobal": {
      console.log(action.payload, " ELE")
      return {
        ...state,
        EleAudio: action.payload
      }
      break
    }
    case "SetSong": {
      return {
        ...state,
        Song: action.payload.id,
        TittleSong: action.payload.name,
        ImageSongPlaying: action.payload.img,
        indexSong: action.payload.indexSong
      }
    }
    case "SetTittleSong": {
      return {
        ...state,
        TittleSong: action.payload
      }
    }
    case "SetSongQueue": {
      return {
        ...state,
        SongQueue: action.payload
      }
    }
    case "SetIsLoading": {
      return {
        ...state,
        IsLoading: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export default rootReducer

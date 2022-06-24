import SetStatusEleAudio, { SelectItemToPlay } from "../../util/Functions/SetStatusEleAudio";

const InitialState={
    isPlaying:false,
    EleAudio:null,
    Song:localStorage.getItem("song") ? JSON.parse(localStorage.getItem("song")) : "ZW8I78UO",
    SongQueue:[],
    TittleSong:""
}

const rootReducer=function(state=InitialState,action){
    switch(action.type){
        case "SETACTIVEPLAY":{
            console.log(state,action.payload)    
            SelectItemToPlay(state.EleAudio,action.payload)
            // SetStatusEleAudio(state.EleAudio,action.payload)
            return {
                ...state,
                isPlaying:action.payload
            }
            break;
        }
        case "SetEleGlobal":{
            console.log(action.payload," ELE")
            return {
                ...state,
                EleAudio:action.payload
            }
            break;
        }
        case "SetSong":{
            return {
                ...state,
                Song:action.payload
            }
        }
        case "SetTittleSong":{
            return {
                ...state,
                TittleSong:action.payload
            }
        }
        case "SetSongQueue":{
            
            return {
                ...state,
                SongQueue:action.payload
            }
        }
        default:{
            return state
        }
    }
}

export default rootReducer
import SetStatusEleAudio from "../../util/Functions/SetStatusEleAudio";

const InitialState={
    isPlaying:false,
    EleAudio:null,
    Song:"",
}

const rootReducer=function(state=InitialState,action){
    switch(action.type){
        case "SETACTIVEPLAY":{
            console.log(state,action.payload)    
            SetStatusEleAudio(state.EleAudio,action.payload)
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
        default:{
            return state
        }
    }
}

export default rootReducer
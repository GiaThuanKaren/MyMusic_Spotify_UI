const InitialState={
    isPlaying:false
}

const rootReducer=function(state=InitialState,action){
    switch(action.type){
        case "SETACTIVEPLAY":{
            // console.log(state,action)
            return {
                ...state,
                isPlaying:action.payload
            }
            break;
        }

        default:{
            return state
        }
    }
}

export default rootReducer
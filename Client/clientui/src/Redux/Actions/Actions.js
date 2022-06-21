export const SetActivePlay = function (payload) {
  return {
    type: "SETACTIVEPLAY",
    payload: payload,
  };
};

export const SetEleToGlobal = function(payload){
  return {
    type:"SetEleGlobal",
    payload:payload

  }
}

export const SetSongToGlobal=function(payload){
  return {
    type:"SetSong",
    payload:payload
  }
}

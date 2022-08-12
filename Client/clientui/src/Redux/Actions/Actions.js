export const SetActivePlay = function (payload) {
  return {
    type: "SETACTIVEPLAY",
    payload: payload
  }
}

export const SetEleToGlobal = function (payload) {
  console.log("Set Ele yes")
  return {
    type: "SetEleGlobal",
    payload: payload
  }
}

export const SetSongToGlobal = function (payload) {
  return {
    type: "SetSong",
    payload: payload
  }
}

export const SetSongQueue = function (payload) {
  return {
    type: "SetSongQueue",
    payload: payload
  }
}

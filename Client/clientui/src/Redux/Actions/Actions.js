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

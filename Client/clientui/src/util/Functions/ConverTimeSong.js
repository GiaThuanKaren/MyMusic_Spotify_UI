export const ConvertTimePlaying = function (time) {
  let min = Math.floor(time / 60)
  let sec = Math.floor(time % 60)
  if (min < 10) min = `0${min}`
  if (sec < 10) sec = `0${sec}`
  // console.log(min, sec);
  return `${min}:${sec}`
}

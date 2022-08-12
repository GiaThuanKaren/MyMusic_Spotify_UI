export default function SetStatusEleAudio(Element, GlobalState) {
  console.log(GlobalState)
  Element.onloadstart = function () {
    console.log("yes All data is loaded")
    if (GlobalState) {
      console.log("Paused SetStatusEleAudio")
      Element.play()
    } else {
      console.log("Play SetStatusEleAudio")
      Element.pause()
    }
  }
  // }else console.log("Problem SetStatusEleAudio")
}

export const SelectItemToPlay = function (Element, GlobalState) {
  if (GlobalState) {
    console.log("Paused SetStatusEleAudio")
    Element.play()
  } else {
    console.log("Play SetStatusEleAudio")
    Element.pause()
  }
}

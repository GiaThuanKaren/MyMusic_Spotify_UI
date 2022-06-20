export default function SetStatusEleAudio(Element, GlobalState) {
  console.log(GlobalState);
  if (GlobalState) {
    console.log("Paused SetStatusEleAudio");
    Element.play();
  } else {
    console.log("Play SetStatusEleAudio");
    Element.pause();
  }

  // if(Element!=null){

  // }else console.log("Problem SetStatusEleAudio")
}

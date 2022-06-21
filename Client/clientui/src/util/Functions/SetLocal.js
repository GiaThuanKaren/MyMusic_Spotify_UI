export const  SetLocalSong=function(item) {
    localStorage.setItem("song",JSON.stringify(item))
}
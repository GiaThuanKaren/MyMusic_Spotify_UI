export const  SetLocalSong=function(id,title,img) {
    localStorage.setItem("song",JSON.stringify({
        id,
        title,
        img
    }))
}
export const  SetLocalSong=function(id,title,img,Volume) {
    localStorage.setItem("song",JSON.stringify({
        id,
        title,
        img,
        
    }))
}


export const SetQueueSong=function(SongArr){
    localStorage.setItem("queue",JSON.stringify(SongArr))
}
import ytdl from "ytdl-core"
import fs from 'fs'

export const download = (videoId) => {
  const videoURL = "https://www.youtube.com/shorts/" + videoId
  console.log('realizando o download do video', videoId)

  ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
  .on(
    "info", 
    (info) => {
    const seconds = info.formats[0].approxDurationMs / 1000
    
    if(seconds)
  })
}

import { pipeline } from "@xenova/transformers"

import { transcriptionExample } from "./utils/transcription.js"

export async function transcribe(audio){
 try {
   //  return transcriptionExample

   console.log("Realizando a transcricao...")
   const transcribe = await pipeline("automatic-speech-recognition", "Xenova/whisper-small")

   const transcription = await transcribe(audio, {
    chunk_length_s: 30,
    stride_length_s: 5,
    language: "portuguese",
    task: "transcribe",
   })
   console.log("Transcricao finalizado com sucesso...")
   return transcription?.text.replace("[Musica]","")
 } catch (error) {
  throw new Error(error)
 }
}
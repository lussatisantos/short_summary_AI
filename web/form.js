const form = document.querySelector("#form")
const input = document.querySelector("#input")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const videoURL = input.value
  console.log('URL DO VIDEO', videoURL)
})
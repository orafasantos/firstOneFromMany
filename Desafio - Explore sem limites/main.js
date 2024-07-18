const button = document.querySelector(".button")
const mainSection = document.querySelector("main")

button.addEventListener("click", () => {
  mainSection.scrollIntoView({ behavior: "smooth" })
})

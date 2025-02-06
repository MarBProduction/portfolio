const pages = document.querySelectorAll(".pages")
const menuButtonMobile = document.querySelectorAll("#menu-mobile div")

pages.forEach(page => {
  page.style.display = "none"
})

function changePage(e, pageId){
  pages.forEach(page => {
    if (page.id === pageId) {
      page.style.display = "flex"
      return
    }
    page.style.display = "none"
  })

  menuButtonMobile.forEach(menuButton => {
    menuButton.classList.remove("main-active")
  })
  e.target.classList.add("main-active")
}
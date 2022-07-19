const progressEl = document.getElementById("progress")
const backEl = document.getElementById("back")
const nextEl = document.getElementById("next")
const circles = document.querySelectorAll(".circle")

//search constants
const search = document.querySelector(".search")
const searchButton = document.querySelector(".searchBtn")
const searchInput = document.querySelector(".input")

let activeEl = 1

nextEl.addEventListener("click", () => {
    activeEl++;
    if (activeEl > circles.length) {
        activeEl = circles.length
    }
    updateProgress()
})

backEl.addEventListener("click", () => {
    activeEl--
    if (activeEl < 1) {
        activeEl = 1
    }
    updateProgress()
})

//function that adds and removes active classess on the dive, and calculates the length of the progress bar on the DOM
function updateProgress() {
    circles.forEach((circle, idx) => {
        if (idx < activeEl) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })

    const activeCircles = document.querySelectorAll(".active")
    progressEl.style.width = (activeCircles.length - 1) / (circles.length - 1) * 100 + `%`

    if (activeEl === 1) {
        backEl.disabled = true
    } else if (activeEl === circles.length) {
        nextEl.disabled = true
    } else {
        nextEl.disabled = false
        backEl.disabled = false
    }

}

searchButton.addEventListener("click", () => {
    search.classList.add("searchActive")
    searchInput.focus()
})
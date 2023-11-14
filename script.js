const years = document.getElementById("years-placeholder")
const months = document.getElementById("months-placeholder")
const days = document.getElementById("days-placeholder")
const dayInput = document.getElementById("day-input")
const monthInput = document.getElementById("month-input")
const yearInput = document.getElementById("year-input")

const submitButton = document.getElementById("submit")

const currentDate = new Date()


submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    const birthDate = new Date(yearInput.value, monthInput.value, dayInput.value)
    const age = (currentDate - birthDate) / (1000 * 60 * 60 * 24)
    years.textContent = Math.floor(parseInt(age) / 365)
    months.textContent = Math.round((parseInt(age) % 365) / 30)
    days.textContent = (parseInt(age) % 365) % 30
})


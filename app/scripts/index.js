const accordionItems = document.querySelectorAll(".accordion__title")

accordionItems.forEach(accordionItem => {
    accordionItem.addEventListener("click", function () {
        accordionItems.forEach(item => item.parentElement.classList.remove("accordion_active"))
        accordionItem.parentElement.classList.add("accordion_active")
    })
})
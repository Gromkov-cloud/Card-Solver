const accordion = (accordionItemsId) => {
    const accordionItems = document.querySelectorAll(`#${accordionItemsId}`)
    accordionItems.forEach(accordionItem => {
        accordionItem.addEventListener("click", function () {
            accordionItems.forEach(item => item.classList.remove("accordion_active"))
            accordionItem.classList.add("accordion_active")
        })
    })
}

accordion("features-accordion-item")
accordion("faq-accordion-item")
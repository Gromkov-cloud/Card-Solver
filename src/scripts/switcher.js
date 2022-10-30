const switcher = document.querySelector("#switch")
const pricingCards = document.querySelector(".pricing__cards")

switcher.addEventListener("change", (e) => {
    if (switcher.checked) {
        pricingCards.querySelector(".pricing__cards-monthly").classList.add("pricing__cards-monthly_active")
        pricingCards.querySelector(".pricing__cards-yearly").classList.remove("pricing__cards-yearly_active")
    } else {
        pricingCards.querySelector(".pricing__cards-yearly").classList.add("pricing__cards-yearly_active")
        pricingCards.querySelector(".pricing__cards-monthly").classList.remove("pricing__cards-monthly_active")
    }
    console.log(switcher.checked)
})
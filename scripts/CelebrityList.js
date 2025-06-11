import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener("click", (event) => {
    if (event.target.dataset.type === "celebrity") {
        const celebSport = event.target.dataset.sport

        window.alert(`Compete's in ${celebSport}`)
    }
})

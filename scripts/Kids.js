import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener("click", (event) => {
    if (event.target.dataset.type === "child") {
        const childWish = event.target.dataset.wish
        const childName = event.target.textContent

        window.alert(`${childName}'s wish is ${childWish}`)
    }
})
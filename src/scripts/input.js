import recordEntry from "./createEntry.js"
const getUserInput = () => {
    let date = document.querySelector("#date").value
    let concepts = document.querySelector("#concepts").value
    let entry = document.querySelector("#entry").value
    let mood = document.querySelector("#mood").value
    let newEntry = recordEntry(date, concepts, entry, mood)
    return newEntry
    
}

export default getUserInput
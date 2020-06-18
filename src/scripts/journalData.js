
let entries = []



const API = {
    getJournalData () {
        return fetch("http://localhost:3000/entries").then(
            (response) => {
                return response.json()
            }
        )
        .then(
            (entriesArray) => {
                entries = entriesArray
            }
        )
    },
    saveJournalEntry: (newEntryObject) => {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        }).then(response => response.json())
    }
}



export { entries, API };
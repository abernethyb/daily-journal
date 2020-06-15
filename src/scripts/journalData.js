let entries = [];

const getJournalData = () => {
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
}
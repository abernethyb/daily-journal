
let entries = []
let moods = []



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
    getMoodData () {
        return fetch("http://localhost:3000/moods").then(
            (response) => {
                return response.json()
            }
        )
        .then(
            (moodsArray) => {
                moods = moodsArray
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
    },
    editEntry: (id, editEntryObject) => {
		return fetch("http://localhost:3000/entries", {
			method: "PUT",
        	headers: {
            "Content-Type": "application/json"
        	},
        	body: JSON.stringify(editEntryObject)
		})}
}



export { entries, moods, API };
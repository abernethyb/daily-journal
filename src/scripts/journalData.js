
let entries = []
let moods = []



const API = {
    getJournalData () {
        console.log("is getJournalData even running?")
        return fetch("http://localhost:3000/entries?_expand=mood").then(
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
    editEntry: (entryid, editEntryObject) => {
		return fetch(`http://localhost:3000/entries/${entryid}`, {
			method: "PUT",
        	headers: {
            "Content-Type": "application/json"
        	},
        	body: JSON.stringify(editEntryObject)
        }).then(res => res.json())
    }
}



export { entries, moods, API };
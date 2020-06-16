

import { API } from "./journalData.js"
import { entries } from "./journalData.js"
import DOMPush from "./journalList.js"
//import HTMLMaker from "./journal.js"



API.getJournalData().then(
    () => {
        DOMPush.journalList(entries)
    }
)


const container = document.querySelector(".entryForm")

document.querySelector(".saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const date = document.querySelector("#date").value
    const concepts = document.querySelector("#concepts").value
    const entry = document.querySelector("#entry").value
    const mood = document.querySelector("#mood").value

})
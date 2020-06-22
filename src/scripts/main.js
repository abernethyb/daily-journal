

import { API } from "./journalData.js"
import { entries } from "./journalData.js"
import DOMPush from "./journalList.js"
import recordEntry from "./createEntry.js"
//import HTMLMaker from "./journal.js"

/*
functionThatSendsObjectToAPI
    .then(() => {
        return functionThatGetsAllObjectsFromAPI()
    })
    .then((allObjectsFromAPI) => {
        return functionThatIteratesArrayAndRendersToDOM(allObjectsFromAPI)
    })

*/



API.getJournalData().then(
    () => {
        DOMPush.journalList(entries)
    }
)

const getUserInput = () => {
    let date = document.querySelector("#date").value
    let concepts = document.querySelector("#concepts").value
    let entry = document.querySelector("#entry").value
    let mood = document.querySelector("#mood").value
    let newEntry = recordEntry(date, concepts, entry, mood)
    return newEntry
    
}

//const container = document.querySelector(".entryForm")
    

document.querySelector(".saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    let theUserInputFromUserinputFunction = getUserInput()
    console.log(theUserInputFromUserinputFunction)

    
    API.saveJournalEntry(theUserInputFromUserinputFunction)

    
    
})
//let newEntry = recordEntry(date, concepts, entry, mood)
//API.saveJournalEntry(newEntry)



//API.saveJournalEntry(newEntry)
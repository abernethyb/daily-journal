

import { API } from "./journalData.js"
import { entries, moods } from "./journalData.js"
import DOMPush from "./journalList.js"
import recordEntry from "./createEntry.js"
import moodData from "./moodList.js"
import getUserInput from "./input.js"
import editJournal from "./edit.js"
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

API.getMoodData().then(
    () => {
        moodData.moodList(moods)
    }
)

API.getJournalData().then(
    () => {
        DOMPush.journalList(entries)
        
    }
)



//const container = document.querySelector(".entryForm")
    

document.querySelector(".saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    let theUserInputFromUserinputFunction = getUserInput()
    console.log(theUserInputFromUserinputFunction)

    
    API.saveJournalEntry(theUserInputFromUserinputFunction).then (
        () => {
            API.getJournalData().then(
                () => {
                    DOMPush.journalList(entries)
                }
            )
        }
    )

    
    
})

// let radioElements = document.getElementsByName("radio__mood")


// radioElements.forEach(
//     () =>{
//         addEventListener("click", event => {
//             const moodFilter = event.target.id
//             console.log(moodFilter)
//             moodFilter.filter()

//         })
//     }
// )


//event listener for edit lines 92 - 172








// addEventListener("click", event => {
//     const moodFilter = event.target.value
//     console.log(moodFilter)
// })

//let newEntry = recordEntry(date, concepts, entry, mood)
//API.saveJournalEntry(newEntry)



//API.saveJournalEntry(newEntry)

 
// const moodList = (moods) => {
//     moods.forEach(mood => {
//         console.log("hello?", mood.id)
//     })
// }
// moodList(moods)




editJournal()
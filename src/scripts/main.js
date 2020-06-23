

import { API } from "./journalData.js"
import { entries, moods } from "./journalData.js"
import DOMPush from "./journalList.js"
import recordEntry from "./createEntry.js"
import moodList from "./moodList.js"
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
        moodList(moods)
    }
)

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


//event listener for edit

const journalButtonElement = document.querySelector(".entryLog")

journalButtonElement.addEventListener("click", event => {
    if(event.target.id.startsWith("editEntry--")) {
        const entryToEdit = event.target.id.split("--")[1];
        let formElement = document.querySelector(`.editEntry--${entryToEdit}`)
        console.log(entryToEdit);
        formElement.innerHTML += `<p><form action="">
        <section class="date">
            <fieldset>
                <label for="date">date</label>
                <input type="date" name="date" id="date">
            </fieldset>
        </section>
        <section class="concepts">
            <fieldset>
                <label for="concepts">Concepts Covered:</label>
                <input type="text" name="concepts" id="concepts">
            </fieldset>
        </section>
        <section class="entry">
            <fieldset>
                <label for="entry">Journal Entry:</label>
                <textarea name="entry" id="entry" cols="100" rows="10"></textarea>
            </fieldset>
        </section>
        <section class="mood">
            <fieldset>
                <label for="mood">Mood:</label>
                <select name="mood" id="mood">
                    
                </select>
            </fieldset>
        </section>
        <section>
            <fieldset>
                
            </fieldset>

        </section>
    </form></p>`

        // API.getSingleSweet(entryToEdit)
        // .then(entryObject => updateFormFields(entryObject));
    }
})

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
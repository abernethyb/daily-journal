

import { API } from "./journalData.js"
import { entries, moods } from "./journalData.js"
import DOMPush from "./journalList.js"
import recordEntry from "./createEntry.js"
import moodData from "./moodList.js"
import getUserInput from "./input.js"
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


const editJournal = () => {
    const journalButtonElement = document.querySelector(".entryLog")

journalButtonElement.addEventListener("click", event => {
    if(event.target.id.startsWith("editEntry--")) {
        API.getMoodData().then(
            () => {
                moodData.editMoodList(moods)
                //console.log(moodList(moods))
            }
        )
        const entryToEdit = event.target.id.split("--")[1];
        let formElement = document.querySelector(`.editEntry--${entryToEdit}`)
        console.log(entryToEdit);
        formElement.innerHTML += `<form class="editEntryForm" action="">
        
        <section class="editDate">
            <fieldset>
                <label for="editDate">date</label>
                <input type="date" name="editDate" id="editDate">
            </fieldset>
        </section>
        <section class="editConcepts">
            <fieldset>
                <label for="editConcepts">Concepts Covered:</label>
                <input type="text" name="editConcepts" id="editConcepts">
            </fieldset>
        </section>
        <section class="editEntry">
            <fieldset>
                <label for="editEntry">Journal Entry:</label>
                <textarea name="editEntry" id="editEntry" cols="100" rows="10"></textarea>
            </fieldset>
        </section>
        <section class="editMood">
            <fieldset>
                <label for="editMood">Mood:</label>
                <select name="editMood" id="editMood">
                    
                </select>
            </fieldset>
        </section>
        <section>
            <fieldset>
                
            </fieldset>

        </section>
        
    </form>
    <button value="record__edit" class="saveEditEntry">Save Edit</button>`
    const userEdit = () => {
        let newDate = document.querySelector("#editDate").value
        let newConcepts = document.querySelector("#editConcepts").value
        let newEntry = document.querySelector("#editEntry").value
        let newMood = document.querySelector("#editMood").value
        let editedEntry = recordEntry(newDate, newConcepts, newEntry, newMood)
        return editedEntry
    }

    document.querySelector(".saveEditEntry").addEventListener("click", event => {
        let userEditVariable = userEdit()
        console.log(userEditVariable)
        API.editEntry(entryToEdit, userEditVariable).then(
            () => {
                //entry is edited at this point
                API.getJournalData().then(
                    () => {
                        DOMPush.journalList(entries)
                        document.querySelector(".editEntryForm").innerHTML = ""
                        
                    }
                )
            }
        )
        
    })
    
    

    //day, concept, entries, feeling newDate, newConcepts, newEntry, newMood
    

        // API.getSingleSweet(entryToEdit)
        // .then(entryObject => updateFormFields(entryObject));
    }
})
}

editJournal()
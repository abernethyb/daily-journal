

import { API } from "./journalData.js"
import { entries, moods } from "./journalData.js"
import DOMPush from "./journalList.js"
import recordEntry from "./createEntry.js"
import moodData from "./moodList.js"
import getUserInput from "./input.js"
import editJournal from "./edit.js"

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



document.querySelector(".saveEntry").addEventListener("click", event => {

    let theUserInputFromUserinputFunction = getUserInput()
    console.log(theUserInputFromUserinputFunction)


    API.saveJournalEntry(theUserInputFromUserinputFunction).then(
        () => {
            API.getJournalData().then(
                () => {
                    DOMPush.journalList(entries)
                }
            )
        }
    )



})



API.getJournalData().then(
    () => {
        //DOMPush.journalList(entries)
        let radioElements = document.querySelector(".radio__area")
        radioElements.addEventListener("click", event => {
            const moodFilter = event.target.id
            console.log(moodFilter)
            if(moodFilter){
                document.querySelector(".entryLog").innerHTML = ""
            }
            //Error message displayed to DOM if button unsuccessfully clicked
            // else {
            //     document.querySelector(".entryLog").innerHTML = "<h1>HEY! Careful where you click! It's a Button; try clicking the button.  gah.</h1>"
            // }
            
            entries.forEach(
                (entry) => {

                    if (entry.moodId == moodFilter) {
                        //document.querySelector(".entryLog").innerHTML = ""
                        console.log(entry)
                        document.querySelector(".entryLog").innerHTML += `
                        <section class="entryLog">
                            <div class="log">
                                <ul>
                                    <li>Date: ${entry.date}</li>
                                    <li>Concepts Covered: ${entry.concepts}</li>
                                    <li>Journal Entry: ${entry.entry}</li>
                                    <li>Mood: ${entry.mood.mood}</li>
                                    <button id="editEntry--${entry.id}">Edit</button>
                                    <button id="deleteEntry--${entry.id}">Make Go Away</button>
                                </ul>
                            </div>
                            <div class="editEntry--${entry.id}"></div>
                        </section>`

                    }
                })
        }
        )
    }
)







// const moodList = (moods) => {
//     moods.forEach(mood => {
//         console.log("hello?", mood.id)
//     })
// }
// moodList(moods)




editJournal()



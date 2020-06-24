import { API } from "./journalData.js"
import { entries, moods } from "./journalData.js"
import DOMPush from "./journalList.js"
import recordEntry from "./createEntry.js"
import moodData from "./moodList.js"


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

export default editJournal
//import moodList from "moodList.js"
import {moods} from "./journalData.js"


console.log("hello from journal converter", moods)


const HTMLMaker = {
    journalConverter (journalObject) {
        

        const journalHTMLRepresentation = `
        <section class="entryLog">
            <div class="log">
                <ul>
                    <li>Date: ${journalObject.date}</li>
                    <li>Concepts Covered: ${journalObject.concepts}</li>
                    <li>Journal Entry: ${journalObject.entry}</li>
                    <li>Mood: ${journalObject.mood}</li>
                    <button id="editEntry--${journalObject.id}">Edit</button>
                </ul>
            </div>
            <div class="editEntry--${journalObject.id}"></div>
        </section>`
    
        return journalHTMLRepresentation
    
    }
}

export default HTMLMaker

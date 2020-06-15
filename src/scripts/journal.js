
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
                </ul>
            </div>
        </section>`
    
        return journalHTMLRepresentation
    
    }
}

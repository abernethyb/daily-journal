
const DOMPush = {
    journalList () {
        // Iterate the collection of objects
        for (const currentJournalObject of entries) {
    
            // Convert the current journal entry to its HTML representation
            const journalHTML = HTMLMaker.journalConverter(currentJournalObject)
    
            // Find the <article> element in index.html
            const journalArticleElement = document.querySelector(".entryLog")
    
            // Put the entries HTML representation inside the <article> element
            journalArticleElement.innerHTML += journalHTML
        }
    }
}




import { API } from "./journalData.js"
import { entries } from "./journalData.js"
import DOMPush from "./journalList.js"
//import HTMLMaker from "./journal.js"



API.getJournalData().then(
    () => {
        DOMPush.journalList(entries)
    }
)
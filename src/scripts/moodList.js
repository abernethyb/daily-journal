//const { moods } = require("./journalData");



const moodList = (moodArray) => {
    const moodElement = document.querySelector("#mood")

    moodArray.forEach(moodObject => {
        console.log("hello from moodlist", moodObject)
       moodElement.innerHTML += `<fieldset>
            <label for="mood">Mood:</label>
            <select name="mood" id="mood">
                <option value="${moodObject.id}">${moodObject.mood}</option>
            </select>
        </fieldset>`
    })
}


export default moodList



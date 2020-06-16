

let initialId = 1

const recordEntry = (day, concept, entries, feeling, idset = initialId += 1) => ({
    date: day,
    concepts: concept,
    entry: entries,
    mood: feeling,
    id: idset
})
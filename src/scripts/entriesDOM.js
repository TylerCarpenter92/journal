const renderJournalEntries = (entries) => {
    console.log(entries)
    entries.forEach((journalEntry) => {
    let thisPoints = document.querySelector(".entryLog")
        thisPoints.innerHTML += makeJournalEntryComponent(journalEntry)
    })
};

// .then(entries => {
//     console.log(entries)
//     // What should happen when we finally have the array?
//     entries.forEach((journalEntry) => {
//         console.log(journalEntry)
//         renderJournalEntries(journalEntry)
//     })
// })
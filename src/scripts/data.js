
// API.getJournalEntries()
// .then(entries => {
//     console.log(entries)
//     // What should happen when we finally have the array?
//     entries.forEach((journalEntry) => {
//         console.log(journalEntry)
//         renderJournalEntries(journalEntry)
//     })
// })


const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
        .then(response => response.json())
    }
}
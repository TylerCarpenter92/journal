let thisPoints = document.querySelector(".entryLog");

const renderJournalEntries = entries => {
  thisPoints.innerHTML = ""
  entries.forEach(journalEntry => {
    let newHTMLEntry = makeJournalEntryComponent(journalEntry)
    thisPoints.appendChild(newHTMLEntry)
  });
};

// .then(entries => {
//     console.log(entries)
//     // What should happen when we finally have the array?
//     entries.forEach((journalEntry) => {
//         console.log(journalEntry)
//         renderJournalEntries(journalEntry)
//     })
// })

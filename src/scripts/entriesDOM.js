const renderJournalEntries = entries => {
  console.log(`beginning`);
  entries.forEach(journalEntry => {
    let thisPoints = document.querySelector(".entryLog");
    thisPoints.innerHTML += makeJournalEntryComponent(journalEntry);
    
  });
  console.log(`end`)
};

// .then(entries => {
//     console.log(entries)
//     // What should happen when we finally have the array?
//     entries.forEach((journalEntry) => {
//         console.log(journalEntry)
//         renderJournalEntries(journalEntry)
//     })
// })

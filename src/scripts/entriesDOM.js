const renderJournalEntries = entries => {
  console.log(entries);
  let string = ""
  let thisPoints = document.querySelector(".entryLog");
  entries.forEach(journalEntry => {
    string += makeJournalEntryComponent(journalEntry)
  });
  console.log(string)
  thisPoints.innerHTML = string
  // console.log(`end`)
};

// .then(entries => {
//     console.log(entries)
//     // What should happen when we finally have the array?
//     entries.forEach((journalEntry) => {
//         console.log(journalEntry)
//         renderJournalEntries(journalEntry)
//     })
// })

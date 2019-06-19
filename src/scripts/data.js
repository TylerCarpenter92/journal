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
  getJournalEntries() {
    return fetch("http://localhost:3000/entries").then(response =>
      response.json()
    );
  },
  saveJournalEntry(newEntry) {
    // Use `fetch` with the POST method to add your entry to your API
    fetch("http://localhost:3000/entries", {
      // Replace "url" with your API's URL
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEntry)
    });
  }
};

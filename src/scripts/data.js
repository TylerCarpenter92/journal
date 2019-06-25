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
    console.log(`anothertest`);
    return fetch("http://localhost:3000/entries").then(response =>
      response.json()
    );
  },
  saveJournalEntry(newEntry) {
    // Use `fetch` with the POST method to add your entry to your API
    return fetch("http://localhost:3000/entries", {
      // Replace "url" with your API's URL
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEntry)
    });
  },
  deleteJournalEntry(id) {
    return fetch(`http://localhost:3000/entries/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  editJournalEntry(editEntry) {
    return fetch(`http://localhost:3000/entries/${editEntry.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editEntry)
    });
  }
};

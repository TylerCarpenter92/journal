/*


    Date of the journal entry.
    Concepts covered (which will be the title of the entry).
    The long-form contents of the journal entry.
    The mood of the journal entry.

    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
// const journalEntry = []

// const journalEntryMonday = {
//     Date: `6/3/19`,
//     Concept: `Dot method vs bracket method`,
//     Entry: `i feel that dot method is quicker and easier but bracket method is more useful.`,
//     Mood: `confused`
// }

// journalEntry.push(journalEntryMonday)

// const journalEntryTuesday = {
//     Date: `6/4/19`,
//     Concept: `Using Objects`,
//     Entry: `learned that an object can also hold a function. its called a method.`,
//     Mood: `excited`
// }

// journalEntry.push(journalEntryTuesday)

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/

// const makeJournalEntryComponent = (journalEntry) => {
//     // Create your own HTML structure for a journal entry
//     return`
//      <h2> ${journalEntry.Concept} </h2>
//     <section>
//         <article>
//             <p> ${journalEntry.Entry} <br> ${journalEntry.Mood} <br> ${journalEntry.Date} </p>
//         </article>
//     </section>`
// }

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
// const renderJournalEntries = (entries) => {
//     console.log(entries)
//     let thisPoints = document.querySelector(".entryLog")
//         thisPoints.innerHTML += makeJournalEntryComponent(entries)
// };
// thisPoints.innerHTML += makeJournalEntryComponent()

// Invoke the render function
// renderJournalEntries(journalEntry)
// entryArray.forEach( function(entries){
//     thisPoints.innerHTML += makeJournalEntryComponent(entries)});
// // thisPoints.innerHTML += makeJournalEntryComponent()

// fetch(`http://localhost:3000/entries`) // Fetch from the API
//     .then(response => response.json())  // Parse as JSON
// .then(entries => {
//     console.log(entries)
//     // What should happen when we finally have the array?
//     entries.forEach((journalEntry) => {
//         console.log(journalEntry)
//         renderJournalEntries(journalEntry)
//     })
// })

// // API.getJournalEntries().then(entries => {
//     console.log(`here`)
//     renderJournalEntries(entries)
// })
API.getJournalEntries().then(renderJournalEntries);

function clickSave() {
  document.getElementById("submit-btn").addEventListener("click", () => {
    let id = ""
    let date = document.querySelector(".journalDate").value;
    let concept = document.querySelector(".conceptIdea").value;
    let entry = document.querySelector(".journalEntries").value;
    let mood = document.querySelector(".yourFeeling").value;
    let x = /[^a-zA-Z0-9(){}:;\s.?!,"']/g;
    let conceptTest = concept.match(x);
    let entryTest = entry.match(x);
    if (date == "" || concept == "" || entry == "" || mood == "") {
      alert(`please finish filling out journal entry`);
      return;
    } else if (conceptTest !== null || entryTest !== null) {
      alert(`please enter the correct statement`);
      return;
    }
    let newEntry = createJournalEntry(date, concept, entry, mood, id);

    API.saveJournalEntry(newEntry).then(data =>
      API.getJournalEntries().then(renderJournalEntries)
    );
    // API.getJournalEntries().then(renderJournalEntries);
  });
}


clickSave()



let radioBTN = document.getElementsByName("moodChoice")
radioBTN.forEach(radio => {
  radio.addEventListener("click", event => {
    let moodValue = event.target.value
    console.log(moodValue)
    API.getJournalEntries().then(entries => {
      let moodString = entries.filter(entry => entry.Mood === `${moodValue}`)
      console.log(moodString)
      renderJournalEntries(moodString)
    })
    
  })
}) 

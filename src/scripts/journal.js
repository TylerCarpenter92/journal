/*


    Date of the journal entry.
    Concepts covered (which will be the title of the entry).
    The long-form contents of the journal entry.
    The mood of the journal entry.

    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const entryArray = []

const journalEntryMonday = {
    Date: `6/3/19`,
    Concept: `Dot method vs bracket method`,
    Entry: `i feel that dot method is quicker and easier but bracket method is more useful.`,
    Mood: `confused`
}

entryArray.push(journalEntryMonday)

const journalEntryTuesday = {
    Date: `6/4/19`,
    Concept: `Using Objects`,
    Entry: `learned that an object can also hold a function. its called a method.`,
    Mood: `excited`
}

entryArray.push(journalEntryTuesday)

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const thisPoints = document.querySelector(".entries")

const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return`
     <h2> ${journalEntry.Concept} </h2>
    <section>
        <article>
            <p> ${journalEntry.Entry} <br> ${journalEntry.Mood} <br> ${journalEntry.Date} </p>
        </article>
    </section>`
}
entryArray.forEach( function(entries){
    thisPoints.innerHTML += makeJournalEntryComponent(entries)});
// thisPoints.innerHTML += makeJournalEntryComponent()


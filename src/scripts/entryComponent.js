const makeJournalEntryComponent = journalEntry => {
  // Create your own HTML structure for a journal entry
  return `
     <h2> ${journalEntry.Concept} </h2>
    <section>
        <article>
            <p> ${journalEntry.Entry} <br> ${journalEntry.Mood} <br> ${journalEntry.Date} </p>
        </article>
    </section>`;
};

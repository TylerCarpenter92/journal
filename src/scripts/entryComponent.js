const makeJournalEntryHTML = journalEntry => {
  // Create your own HTML structure for a journal entry
  return `
     <h2> ${journalEntry.Concept} </h2>
    <section>
        <article>
            <p> ${journalEntry.Entry} <br> ${journalEntry.Mood} <br> ${
    journalEntry.Date
  } </p>
        </article>
    </section>`;
};

const makeJournalEntryComponent = journalEntry => {
  // Create your own HTML structure for a journal entry
  let div = document.createElement("div");
  div.setAttribute("id", `editFormContainer-${journalEntry.id}`);
  div.innerHTML = makeJournalEntryHTML(journalEntry);
  let deleteBTN = document.createElement("button");
  let editBTN = document.createElement("button");
  deleteBTN.textContent = "delete";
  editBTN.textContent = "edit";

  deleteBTN.addEventListener("click", () => {
    // call the delete function
    API.deleteJournalEntry(journalEntry.id).then(data =>
      API.getJournalEntries().then(renderJournalEntries)
    );
  });

  editBTN.addEventListener("click", () => {
    console.log(`click`);
    let editJournal = createEditForm(journalEntry);
    addEditFormToDOM(div.id, editJournal);
  });

  div.appendChild(deleteBTN);
  div.appendChild(editBTN);
  return div;
};

function createEditForm(journalEntry) {
  return `<form action="">
      <fieldset>
      <input type="hidden" id="journal-id" value=${journalEntry.id}>
        <label for="journalDate">date of entry</label>
        <input type="date" name="journalDate" value="${
          journalEntry.Date
        }" class="journalDate-edit" />
      </fieldset>
      <fieldset>
        <label for="conceptIdea">Concept Idea</label>
        <textarea
          name="conceptIdea"
          class="conceptIdea-edit"
          cols="30"
          rows="2"
        >${journalEntry.Concept}
        </textarea>
      </fieldset>
      <fieldset>
        <label for="journalEntries">journal entry</label>
        <textarea
          name="journalEntries"
          class="journalEntries-edit"
          cols="30"
          rows="4"
        >${journalEntry.Entry}
        </textarea>
      </fieldset>
      <fieldset>
        <label for="journalFeelings">how are you feeling?</label>
        <select name="yourFeeling" class="yourFeeling-edit">
          <option value="happy" ${
            journalEntry.Mood === "happy" ? "selected" : ""
          }>happy</option>
          <option value="sad" ${
            journalEntry.Mood === "sad" ? "selected" : ""
          }>sad</option>
          <option value="weird" ${
            journalEntry.Mood === "weird" ? "selected" : ""
          }>weird</option>
          <option value="excited" ${
            journalEntry.Mood === "excited" ? "selected" : ""
          }>excited</option>
        </select>
      </fieldset>
      <input id="submit-edit-btn" type="button" value="submit" />`;
}

function addEditFormToDOM(editContainer, editForm) {
  document.querySelector(`#${editContainer}`).innerHTML += editForm;
  document.getElementById("submit-edit-btn").addEventListener("click", () => {
    let id = document.getElementById("journal-id").value;
    let date = document.querySelector(".journalDate-edit").value;
    let concept = document.querySelector(".conceptIdea-edit").value;
    let entry = document.querySelector(".journalEntries-edit").value;
    let mood = document.querySelector(".yourFeeling-edit").value;
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
    API.editJournalEntry(newEntry).then(data =>
      API.getJournalEntries().then(renderJournalEntries))
  });
  
}

function createJournalEntry(date, concept, entry, mood, id) {
  return {
    id: id,
    Date: date,
    Concept: concept,
    Entry: entry,
    Mood: mood
  };
}

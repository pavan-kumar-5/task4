let notes = JSON.parse(localStorage.getItem("notes")) || [];
const notesDiv = document.getElementById("notes");

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function displayNotes() {
    notesDiv.innerHTML = "";
    notes.forEach((note, index) => {
        notesDiv.innerHTML += `
            <div class="note">
                <p>${note}</p>
                <button onclick="deleteNote(${index})">Delete</button>
            </div>
        `;
    });
}

function addNote() {
    const noteText = document.getElementById("noteInput").value.trim();
    if (noteText === "") return;

    notes.push(noteText);
    document.getElementById("noteInput").value = "";
    saveNotes();
    displayNotes();
}

function deleteNote(index) {
    notes.splice(index, 1);
    saveNotes();
    displayNotes();
}

displayNotes();

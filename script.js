const notes = [
  {
    title: "Example Notes",
    file: "notes/example.pdf"
  }
];

const container = document.getElementById("notesContainer");

notes.forEach(note => {
  const card = document.createElement("div");
  card.className = "note-card";

  card.innerHTML = `
    <h3>${note.title}</h3>
    <button onclick="window.open('${note.file}')">Preview</button>
    <button onclick="downloadFile('${note.file}')">Download</button>
  `;

  container.appendChild(card);
});

function downloadFile(file) {
  const a = document.createElement("a");
  a.href = file;
  a.download = file;
  a.click();
}

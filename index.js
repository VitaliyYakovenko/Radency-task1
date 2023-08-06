import {onCreateNote, notes} from "./js/createNewNote.js";
import renderNewColoms from "./js/renderNewColoms.js";
import onDeleteButtonClick from "./js/onDeleteButtonClick.js";
import onEditNote from "./js/onEditNote.js";
const tableRowEl = document.getElementById("tr");
const btnCrateNoteEl = document.querySelector(".btnCraete");



updateDataAndRender(notes);


// Modal add Note
btnCrateNoteEl.addEventListener("click", () => {
    onCreateNote();
});



// Delete colomn
const iconDeleteEl = document.querySelectorAll(`svg[data-delete="delete"]`);

iconDeleteEl.forEach((btnDeleteNode) => {
    btnDeleteNode.addEventListener("click", onDeleteButtonClick);
});

// Edit colomn
const iconEditEl = document.querySelectorAll(`svg[data-edit="edit"]`);

iconEditEl.forEach((iconEdit) => {
    iconEdit.addEventListener("click", onEditNote);
});


/////////
function updateDataAndRender(data = []) {
    const markup = renderNewColoms(data);
    tableRowEl.insertAdjacentHTML("afterend", markup);
}

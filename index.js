import data from "./js/data.js";
import renderNewColoms from "./js/renderNewColoms.js";
import onDeleteButtonClick from "./js/onDeleteButtonClick.js";
import onEditNote from "./js/onEditNote.js";
import { offScroll, onScroll } from "./js/scroll.js";
const tableRowEl = document.getElementById("tr");
const btnCrateNoteEl = document.querySelector(".btnCraete");
const backdropEl = document.querySelector(".backdrop");
const btnCloseModalEl = document.querySelector(".btnCloseModal");




////////////////////////////////////////////////////////////////////////////
// Modal add Note
btnCrateNoteEl.addEventListener("click", onOpenModal);
btnCloseModalEl.addEventListener("click", onCloseModal);

function onOpenModal() {
    offScroll();
    backdropEl.classList.remove("is-hidden");
};

function onCloseModal() {
    onScroll();
    backdropEl.classList.add("is-hidden");
};



/////////////////////////////////////////////////////////////////////
// Render markup
const markup = renderNewColoms(data); 
tableRowEl.insertAdjacentHTML("afterend", markup);





//////////////////////////////////////////////////////////////////////
// Delete colomn
const iconDeleteEl = document.querySelectorAll(`svg[data-delete="delete"]`);

iconDeleteEl.forEach((btnDeleteNode) => {
    btnDeleteNode.addEventListener("click", onDeleteButtonClick);
});





////////////////////////////////////////////////////////////////////////
// Edit colomn

const iconEditEl = document.querySelectorAll(`svg[data-edit="edit"]`);

iconEditEl.forEach((iconEdit) => {
    iconEdit.addEventListener("click", onEditNote);
});

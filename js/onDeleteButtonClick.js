

export default  function onDeleteButtonClick({target}) {
    if (target.nodeName === "svg") {
        const parentNode = target.closest(".nodeTr");
        const id = Number(parentNode.dataset.id);
        parentNode.remove();
        const parsedNotes = JSON.parse(localStorage.getItem("notes"));        
        const fileterdNote = parsedNotes.filter(el => el.id !== id);
        localStorage.setItem("notes", JSON.stringify(fileterdNote));
    }
};
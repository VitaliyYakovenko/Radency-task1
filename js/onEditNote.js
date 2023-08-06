const backdropEl = document.querySelector(".backdrop");
const modalEl = document.querySelector(".modal");


function offScroll() {
    const scrollY = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.body.setAttribute('data-scrollY', scrollY);
}

function onScroll() {
    const scrollY = parseInt(document.body.getAttribute('data-scrollY'));
    document.body.style.overflow = '';
    window.scrollTo(0, scrollY);
}
 
export default function onEditNote({ target }) {
      
     if (target.nodeName === "svg") {
         const parentNode = target.closest(".nodeTr");
         const childrenEl = parentNode.children;

         const name = childrenEl[1].textContent;
         const category = childrenEl[3].textContent;
         const content = childrenEl[4].textContent;
         const dates = childrenEl[5].textContent
   
        const markup = `
                     <h2>Edit Note</h2>
        <form class="newNoteForm">
            <label for="name">Name</label>
            <input id="name" type="text" name="name" value="${name || ""}"/>
             <br>
            <label for="category">Category</label>
            <input id="category" type="text" name="category" value="${category || ""}" />
            <br>
            <label for="content">Content</label>
            <input id="content" type="text" name="content" value="${content || ""}" />
            <br>
            <label for="dates">Dates</label>
            <input id="dates" type="date" name="dates" value="${dates || ""}" />
            <br>
            <button type="submit">Edit Note</button>
            <button class="btnCloseModal" type="button">Close</button>
        </form>`
        
        modalEl.innerHTML = markup; 
        backdropEl.classList.remove("is-hidden");
        window.addEventListener("keydown", pressEscapeCloseModal);
        offScroll();
        
         const formEl = document.querySelector(".newNoteForm");
         
         formEl.addEventListener("submit", onCreateNewNote);
    }
};

///////////////////////////////////////////////////////////////////////////
backdropEl.addEventListener("click", onCloseModal);

function pressEscapeCloseModal(e) {
    if (e.code === "Escape") {
        backdropEl.classList.add("is-hidden");
        onScroll(); 
        window.removeEventListener("keydown", pressEscapeCloseModal);
    }
};

function onCloseModal(e) {
    if (e.target.nodeName === "BUTTON") {
        backdropEl.classList.add("is-hidden");
        onScroll();
        window.removeEventListener("keydown", pressEscapeCloseModal);
    }

    if (e.target === backdropEl) {
        backdropEl.classList.add("is-hidden");
        onScroll();
        window.removeEventListener("keydown", pressEscapeCloseModal);
    }

};

////////////////////////////////////////////////////////////////////////

function onCreateNewNote(e) {
    e.preventDefault();
    const { elements: { name ,category, content, dates} } = e.currentTarget;
    
    const formData = {
        name: name.value,
        category: category.value,
        content: content.value,
        dates: dates.value,
    }
   
    
};


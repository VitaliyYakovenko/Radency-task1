const backdropEl = document.querySelector(".backdrop");
const modalEl = document.querySelector(".modal");
const notes = JSON.parse(localStorage.getItem("notes")) || [];

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

 function randomId() {
    const id = Math.random() * (1000 - 1) + 1;
    return Number(id.toFixed());
};

 function onCreateNote() {
    const markup = `
       <h2>Create New Note</h2>
       <form class="createNewNote">
            <label for="name">Enter title Note</label>
            <br/>
            <input id="name" type="text" value="" name="name"/>
            <br/>
            <label for="fav">Choose your category</label>
            <br/>
            <input list="category" name="category" id="fav" />
            <datalist id="category">
                <option>Task</option>
                <option>Random Tougth</option>
                <option>Idea</option>
            </datalist>
            <br/>
            <label for="content">Enter content Note</label>
            <br/>
            <input id="content" type="text" value="" name="content"/>
            <br/>
            <button type="submit">Create Note</button>
        </form>

        <button class="btnCloseModal" type="button">Close</button>
    `;
    modalEl.innerHTML = markup;
    backdropEl.classList.remove("is-hidden");
    offScroll();
    window.addEventListener("keydown", onPressCloseModal);
    const formEl = document.querySelector(".createNewNote");
    formEl.addEventListener("submit", getNewNote); 
};


function onPressCloseModal(e) {
    if (e.code === "Escape") {
        backdropEl.classList.add("is-hidden");
        window.removeEventListener("keydown", onPressCloseModal);
   }
}

backdropEl.addEventListener("click", onCloseModal);


function onCloseModal(e) {
    if (e.target.nodeName === "BUTTON") {
        backdropEl.classList.add("is-hidden");
        onScroll();
        window.removeEventListener("keydown", onPressCloseModal);
    }

    if (e.target === backdropEl) {
        backdropEl.classList.add("is-hidden");
        onScroll();
        window.removeEventListener("keydown", onPressCloseModal);
    }

};

function getNewNote(e) {
    e.preventDefault();
     const { elements: { name, category,content } } = e.currentTarget;
    
    const formData = {
        id: randomId(),
        name: name.value,
        category: category.value,
        content: content.value,
        date: new Date(),
    };
  
    notes.push(formData);
    localStorage.setItem("notes", JSON.stringify(notes));
};

export {notes,onCreateNote}
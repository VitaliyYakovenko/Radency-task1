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
         const craeted = childrenEl[2].textContent;
         const category = childrenEl[3].textContent;
         const content = childrenEl[4].textContent;
         const dates = childrenEl[5].textContent
        //  console.log(`${name}, ${craeted} , ${category} , ${content}, ${dates}`);
         
        const markup = `
                     <h2>Edit Note</h2>
        <form>
            <label for="name">Name</label>
            <input id="name" type="text" name="name" value="${name}"/>
             <br>
            <label for="category">Category</label>
            <input id="category" type="text" name="category" value="${category}" />
            <br>
            <label for="content">Content</label>
            <input id="content" type="text" name="content" value="${content}" />
            <br>
            <label for="dates">Dates</label>
            <input id="dates" type="date" name="dates" value="${dates}" />
            <br>
            <button type="submit">Edit Note</button>
            <button class="btnCloseModal" type="button">Close</button>
        </form>`
        
         modalEl.innerHTML = markup; 

        backdropEl.classList.remove("is-hidden");
         offScroll();
    }
};

const btnCloseModalEl = document.querySelector(".btnCloseModal");
backdropEl.addEventListener("click", onCloseModal);

function onCloseModal() {
    backdropEl.classList.add("is-hidden");
    onScroll();
};
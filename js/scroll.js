
function offScroll() {
    const scrollY = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.body.setAttribute('data-scrollY', scrollY);
};



function onScroll() {
    const scrollY = parseInt(document.body.getAttribute('data-scrollY'));
    document.body.style.overflow = '';
    window.scrollTo(0, scrollY);
};

export  { offScroll, onScroll };
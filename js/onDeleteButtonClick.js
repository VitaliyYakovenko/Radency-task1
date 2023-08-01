

export default  function onDeleteButtonClick({target}) {
    if (target.nodeName === "svg") {
        const parentNode = target.closest(".nodeTr");
        parentNode.remove();
    }
};
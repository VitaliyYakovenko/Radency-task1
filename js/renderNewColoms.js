const MAX_LENGTH_CONTENT = 16;


function truncateContent(content) {
     
    if (content.length > MAX_LENGTH_CONTENT) {
        return content.slice(0, MAX_LENGTH_CONTENT) + "...";
    }
    return content;
};

function renderNewColoms(data) {


    return data.map(({ name, created, category, content, dates }) => {
        
        const resulContent = truncateContent(content);
        
        let categoryIcon;
        switch (category) {
            case "Task":
                categoryIcon = `<svg width="20"  height: "4">
                    <use href="./sprite.svg#icon-clip"></use>
                    </svg>`;
                break;
            case "Random Tougth":
                categoryIcon = `<svg width="20"  height: "4">
                    <use href="./sprite.svg#icon-bubble"></use>
                     </svg>`;
                break;
            case "Idea":
                categoryIcon = `<svg width="20"  height: "4">
                    <use href="./sprite.svg#icon-bulb"></use>
                     </svg>`;
                break;
            default:
                categoryIcon = "";
        }
 
        return ` <tr class="nodeTr">
            <td>${categoryIcon}</td>
            <td>${name}</td>
            <td>${created}</td>
            <td>${category}</td>
            <td>${resulContent}</td>
            <td>${dates}</td>
            <td>
                <svg width="20"  height: "4" data-edit="edit">
                    <use href="./sprite.svg#icon-pen"></use>
                </svg>

                <svg id="save" width="20" height: "4">
                    <use href="./sprite.svg#icon-data"></use>
                </svg>
            
                <svg width="20" height: "4" data-delete="delete">
                    <use href="./sprite.svg#icon-trash"></use>
                </svg>
              
            </td>
        </tr>`
    }).join("");
   
   
};

export default renderNewColoms;
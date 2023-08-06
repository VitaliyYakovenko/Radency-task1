const MAX_LENGTH_CONTENT = 16;



function truncateContent(content) {
    if (content.length > MAX_LENGTH_CONTENT) {
        return content.slice(0, MAX_LENGTH_CONTENT) + "...";
    }
    return content;
};


function renderNewColoms(data) {

    
    return data.map(({id, name, created, category, content, dates }) => {
        
        const resultContent = truncateContent(content);
        

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
 
        return ` <tr data-id="${id}" class="nodeTr">
            <td>${categoryIcon}</td>
            <td>${name}</td>
            <td>${created}</td>
            <td>${category}</td>
            <td>${resultContent}</td>
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


/////////////////////////////////////////////////////

function formatUnixTime(unixTime) {
  const date = new Date(unixTime * 1000);
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };
  
  return date.toLocaleString('uk-UA', options);
}

 export default renderNewColoms;
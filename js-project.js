
function drag (event) {
    event.dataTransfer.setData("Text", event.target.id);
}
function overDrope (event) {
    event.preventDefault();
}

function drop(event) {
    let target = event.target;
    const data = event.dataTransfer.getData("Text");
    if(target.id === "erste" && data === ("draggedItem")) {
        event.preventDefault();
        event.target.appendChild(document.getElementById(data));
        event.currentTarget.style = "background-color: rgb(13, 15, 17); border: none; margin: 0px;";
    }
    if(target.id === "zweite" && data === ("draggedItem1")) {
        event.preventDefault();
        event.target.appendChild(document.getElementById(data));
        event.currentTarget.style = "background-color: rgb(13, 15, 17); border: none; margin: 0px;";
    }
    if(target.id === "dritte" && data === ("draggedItem2")) {
        event.preventDefault();
        event.target.appendChild(document.getElementById(data));
        event.currentTarget.style = "background-color: rgb(13, 15, 17); border: none; margin: 0px;";
    }
    if(target.id === "vierte" && data === ("draggedItem3")) {
        event.preventDefault();
        event.target.appendChild(document.getElementById(data));
        event.currentTarget.style = "background-color: rgb(13, 15, 17); border: none; margin: 0px;";
    }
  }
    








const checkBoxEl = document.getElementById('toggle-button'),
    playerListEl = document.getElementById('player-list');


playerListEl.classList.add("trek-list-container-off");

const togglePlayerList = () => {
    const checked = checkBoxEl.checked;
    
    if (checked) {
        playerListEl.classList.add("trek-list-container-on");
        playerListEl.classList.remove("trek-list-container-off");
    } else {
      playerListEl.classList.remove("trek-list-container-on");
        playerListEl.classList.add("trek-list-container-off");   
    }
}

checkBoxEl.addEventListener("change", togglePlayerList )
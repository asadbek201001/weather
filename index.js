
// function greet(){
//     console.log(this);
// }

// greet();


// const obj1 = {myAge: "adam"};

const titleInput = document.querySelector(".input1");
const addButton = document.querySelector(".addButton");
const notesContainer = document.querySelector(".notes-container");

const createNote = () => {
    const newNote = document.createElement("div");
    newNote.className = "note-container";

    newNote.innerHTML = `
        <h1 class="weather-place" style="margin-left: 50px;">Weather: ${place}</h1>
        <h1 class="temperature" style="margin-left: 50px; font-size: 60px; color: red;">${temperature} C</h1>
        <h1 class="humidity" style="margin-left: 50px;">Humidity: ${humidity}</h1>
        <h1 class="wind-speed" style="margin-left: 50px;">Wind speed: ${windSpeed}</h1>
        <button class="delete-button">Delete</button>
    `;

    newNote.querySelector(".delete-button").addEventListener("click", () => {
        notesContainer.removeChild(newNote);
    });

    notesContainer.appendChild(newNote);
};

addButton.addEventListener("click", () => {
    const place = titleInput.value.trim();

    if (!place) {
        alert("Please enter a place!");
        return;
    }

    createNote(place, "21.1", "50%", "10 km/h"); 

    titleInput.value = "";
});

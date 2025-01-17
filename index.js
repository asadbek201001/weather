
// function greet(){
//     console.log(this);
// }

// greet();


// const obj1 = {myAge: "adam"};

// greet();



// greet.call(obj1);


// prototayt bu qolib object dan boshqa bir objectga qiymat yoki boshqa narsasini boshqasiga ko'chirishga aytiladi.


const titleInput = document.querySelector(".input1");
const authorInput = document.querySelector(".input2");
const addButton = document.querySelector(".addButton");
const notesContainer = document.querySelector(".notes-container");
addButton.addEventListener("click", () => {
    const title = titleInput.value.trim(); 
    const author = authorInput.value.trim(); 
    if (title === "" || author === "") {
        alert("Please fill in both fields!");return;}
    const newNote = document.createElement("div");
    newNote.classList.add("note-container");
    const titleElement = document.createElement("h3");
    titleElement.classList.add("note-title");
    titleElement.textContent = `Book Title: ${title}`;
    const authorElement = document.createElement("h3");
    authorElement.classList.add("note-author");
    authorElement.textContent = `Author: ${author}`;
    const readingStatus = document.createElement("h3");
    readingStatus.classList.add("note-reading");
    readingStatus.textContent = "Reading: Not started";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
        notesContainer.removeChild(newNote);});
    const readingButton = document.createElement("button");
    readingButton.textContent = "Reading";
    readingButton.classList.add("reading-button");
    readingButton.addEventListener("click", () => {
        readingStatus.textContent = "Reading: Reading";});
    const readButton = document.createElement("button");
    readButton.textContent = "Read";
    readButton.classList.add("read-button");
    readButton.addEventListener("click", () => {
        readingStatus.textContent = "Reading: Read";});
    const unreadButton = document.createElement("button");
    unreadButton.textContent = "Unread";
    unreadButton.classList.add("unread-button");
    unreadButton.addEventListener("click", () => {
        readingStatus.textContent = "Reading: Unread";});
    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.gap = "10px";
    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(readingButton);
    buttonContainer.appendChild(readButton);
    buttonContainer.appendChild(unreadButton);
    newNote.appendChild(titleElement);
    newNote.appendChild(authorElement);
    newNote.appendChild(readingStatus);
    newNote.appendChild(buttonContainer);
    notesContainer.appendChild(newNote);
    titleInput.value = "";
    authorInput.value = "";
});

const photoList = document.querySelector(".photoList");

function getPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos/10')
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
}

function createCard(item) {
    const newElement = document.createElement('div');
    newElement.classList.add('photoList__photoCard');
    newElement.innerHTML =
        `
        <p class="photoCard__title">
            ${"title"}
        </p>
        <img class="photoCard__photo" src="url here" alt="photo"></img>
    `
    return newElement;
}

for (let i = 0; i < 10; i++) {
    photoList.appendChild(createCard());
}
//getPhotos()

function template(item) {

}
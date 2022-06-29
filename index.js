console.log('js initialized')



let message = document.querySelector("#message")

const form1 = document.querySelector("form")

function addMovie(event){
    event.preventDefault();
    let inputField = document.querySelector("input")
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)

    const list = document.querySelector("ul")

    list.appendChild(movie)
    inputField.value = ""
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = "Movie Deleted."
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked")
    if(event.target.classList.contains("checked")) {
        message.textContent = "Movie watched"
    } else {
        message.textContent = "Movie added again"
    }
} 

form1.addEventListener("submit", addMovie);

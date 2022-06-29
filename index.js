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
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted.`
    revealMessage()
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked")
    if(event.target.classList.contains("checked")) {
        message.textContent = `${event.target.textContent} watched.`
    } else {
        message.textContent = `${event.target.textContent} added to watchlist.`
    } 
    revealMessage()
}

form1.addEventListener("submit", addMovie);


function revealMessage() {
    message.classList.remove("hide")
    let callback = () => {message.classList.add('hide')}
    setTimeout(callback, 1000)
}   

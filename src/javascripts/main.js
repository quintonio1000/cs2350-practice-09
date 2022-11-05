//TODO - Your ES6 JavaScript code (if any) goes here
import 'bootstrap'

import { movies } from './movies'

for(let m of movies){ //m here represents an individual movie from movies.js
    let m_thumb = document.getElementById('m' + m.id)//'m' represents the m id in index.html
    m_thumb.innerHTML = `
    <img src="${m.poster}" alt="${m.title}" class="img-thumbnail"/>
    `// ` is used for multi-lined strings

    m_thumb.onclick = function(){
        displayMovie(m)
    }
}

let featured_movie = document.querySelector(".featured")//featured refers to <div class="col-md-6 featured"> in index.html
function displayMovie(movie){
    featured_movie.innerHTML = `
        <div class="card">
            <div class="card-header">${movie.title}</div>
            <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
            <div class="card-body">
              <h5 class="card-title"><small>${movie.year}, ${movie.genre}</small></h5>
              <p class="card-text">${movie.plot}</p>
            </div>
            <div class="card-footer text-muted">
              <div class="row row-cols-3">
                <div class="col"><strong>Rating: </strong>${movie.rating}</div>
                <div class="col"><strong>Rated: </strong>${movie.rated}</div>
                <div class="col"><strong>Votes: </strong>${movie.votes}</div>
              </div>
            </div>
        </div>
    `
}

function searchMovies(event){
    event.preventDefault() //prevents submitting the form

    let input = document.querySelector('[type="search"]').value || ""
    let count = 0
    for(let m of movies){
        if(m.title.toUpperCase().indexOf(input.toUpperCase()) == -1){
            document.querySelector(`#m${m.id}`).classList.add('d-none')
        }
        else{
            document.querySelector(`#m${m.id}`).classList.remove('d-none')
            count++
        }

        featured_movie.innerHTML = count == 0 ? 'Nothing was found' : ''

    }
}

document.querySelector("button").onclick = searchMovies
document.querySelector('[type="search"]').onsearch = searchMovies
document.querySelector("form").onsubmit = searchMovies

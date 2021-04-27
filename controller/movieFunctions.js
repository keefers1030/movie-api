const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getByTitle = (request, response) => {
  const { title } = request.params
  const foundTitle = movies.filter((movieTitle) => movieTitle.title == title)
  
  return response.send(foundTitle)
}

module.exports = { getAllMovies, getByTitle }

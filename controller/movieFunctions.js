/* eslint-disable no-console */
const movies = require('../movies')

const getAllMovies = (req, res) => {
  return res.send(movies)
}

const getByTitle = (req, res) => {
  const foundTitle = movies.filter((movie => movie.title.toLowerCase().includes(req.params.title)))

  return res.send(foundTitle)
}

const getByDirector = (req, res) => {
  const { director } = req.params
  const searchDirectors = movies.find(director => director == '')
  const foundDirectors = movies.filter((direct => direct.directors.toLowerCase().includes(searchDirectors)))

  console.log(searchDirectors)
  console.log(foundDirectors)

  return res.send(foundDirectors)
}


module.exports = { getAllMovies, getByTitle, getByDirector }

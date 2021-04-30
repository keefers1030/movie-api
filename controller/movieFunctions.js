/* eslint-disable no-console */
const movies = require('../movies')

const getAllMovies = (req, res) => {
  return res.send(movies)
}

const getResult = (req, res) => {
  const { result } = req.params
  const foundResult = movies.filter(movie => {
    return movie.title.toLowerCase().includes(result) ||
      movie.directors.toString().toLowerCase().includes(result)
  })

  return res.send(foundResult)
}


module.exports = { getAllMovies, getResult }

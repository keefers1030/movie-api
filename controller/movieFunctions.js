const movies = require('../movies')

const getAllMovies = (req, res) => {
  return res.send(movies)
}

const getByTitle = (req, res) => {
  const foundTitle = movies.filter((movie => movie.title.toLowerCase().includes(req.params.title)))

  return res.send(foundTitle)
}


module.exports = { getAllMovies, getByTitle }

/* eslint-disable no-console */
const { response } = require('express')
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

const saveNewMovie = (req, res) => {
  const {
    directors, title, releaseDate, rating, runtime, genres
  } = req.body

  if (!directors || !title || !releaseDate || !rating || !runtime || !genres) {
    return res.status(400).send('Not all fields are fille out. Please check your input again.')
  }

  const newMovie = {
    directors, title, releaseDate, rating, runtime, genres
  }

  movies.push(newMovie)

  return response.status(201).send(newMovie)
}

module.exports = { getAllMovies, getResult, saveNewMovie }

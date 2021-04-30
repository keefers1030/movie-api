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
    title, directors, releaseDate, rating, runTime, genres
  } = req.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return res.status(400).send('Not all fields are filled out. Please check your input again.')
  }

  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  movies.push(newMovie)

  return res.status(201).send(newMovie)
}

module.exports = { getAllMovies, getResult, saveNewMovie }

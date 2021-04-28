/* eslint-disable no-console */
const express = require('express')
const { getAllMovies, getByTitle } = require('./controller/movieFunctions')

const app = express()

app.get('/movies', getAllMovies)

app.get('/movies/:title', getByTitle)

// app.get('/:directors', getByDirector)

const port = 1337

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/movies...`)
})

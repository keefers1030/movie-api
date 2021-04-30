/* eslint-disable no-console */
const express = require('express')
const { getAllMovies, getResult, saveNewMovie } = require('./controller/movieFunctions')

const app = express()

app.get('/movies', getAllMovies)

app.get('/movies/:result', getResult)

app.get('/movies/:result', getResult)

app.post('/movies', express.json(), saveNewMovie)

app.all('*', (req, res) => {
  return res.sendStatus(404)
})

const port = 1337

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/movies...`)
})

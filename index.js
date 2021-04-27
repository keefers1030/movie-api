/* eslint-disable no-console */
const express = require('express')
const movies = require('./movies')

const app = express()

app.get('/', getAllMovies)

app.get('/:', getByTitle)

app.get()

app.listen(1337, () => {
  console.log('Listening on port 1337...')
})

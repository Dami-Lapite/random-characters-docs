# random-characters-docs
Documentation for Random Characters API

## About

An API serving characters (and their quotes) from tv shows and movies. <br/>
The actual repo containing the backend and frontend is private, this repo is mainly for description, API feedback & character suggestions.
Inspired by this [Anime API](https://github.com/rocktimsaikia/anime-chan/tree/main) I used in a project in 2021.

## Development + Stack

- MongoDB
- Express
- React
- Node.js

Deployed using Cloud Run on Google Cloud Platform. <br/>
Used TailwindCSS for the first time :)

## Routes

### Get a random character
`/characters/random`\
_Returns a single random character. Currently doesn't filter using query options_

### Get all characters
`/characters`\
_Returns all characters matching the specified query options (if provided). Working on pagination._

## Query Options

`limit`
_Limits number of results to specified number_

`firstname`
_Returns characters with the specified firstname_

`lastname`
_Returns characters with the specified lastname_
        
`gender`
_Returns characters with the specified gender_

`origin`
_Returns characters with the specified origin. Origin should be alphanumeric characters with _ to replace spaces. E.g 'The Office' would be 'the_office'._

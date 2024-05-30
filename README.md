# Streaming Catalog project

WIP. Currently working on the frontend, have plans for the backend. In short, this project is a website, for searching movies and getting information about which streaming platform has them currently.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

Here is everything you need to know before using the app.

### Requirements

To run everything smoothly you will need:

* npm
* streaming availability API key

### Streaming availability API

This project uses Streaming Availability API to fetch data about movies and shows. To get a key, follow the instructions in the `Getting started` section [here](https://docs.movieofthenight.com/).

### Installing packages

After cloning the project with `git clone`, install the neccessary packages with `npm install`. **Remember to always `cd` into the frontend directory before trying to install the dependencies for the frontend.**

### Using the api key

For the app to properly function, you will need to create a `.env` file directly in the frontend directory. Then add the following line into the file: 

```
REACT_APP_STREAMING_AVAILABILITY_API_KEY="insert_your_key_here"
```
Replace the palceholder text with your own Streaming availability API key.

## Starting the app

In the frontend directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

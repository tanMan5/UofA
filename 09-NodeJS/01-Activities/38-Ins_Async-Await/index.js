const axios = require("axios");
const inquirer = require("inquirer");

getMovie();

async function getMovie() {
  const { movie } = await inquirer.prompt({
    message: "Search a movie:",
    name: "movie"
  });

  const { data } = await axios.get(
    `https://www.omdbapsdrfgdsfi.com/?t=${movie}&apikey=trilogy`
  );

  console.log(data);
  console.log('test');
}

function getMoviePromises() {
  inquirer.prompt({
    message: "Search a movie:",
    name: "movie"
  })
  .then(function({movie})
  {
    return axios.get(
      `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`
    )
  })
  .then(function({data}) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  })
}
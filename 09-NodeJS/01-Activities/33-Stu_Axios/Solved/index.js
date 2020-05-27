const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    return axios.get(queryUrl)
  })
  .then(function(res) {
    const repoNames = res.data.map(function(repo) {
      return repo.name;
    });
    // const repoNames = [];
    // for (let i = 0; i < res.data.length; i++) {
    //   const element = res.data[i];
    //   repoNames.push(element.name);
    // }
    const repoNamesStr = repoNames.join("\n");

    return writeFileAsync("repos.txt", repoNamesStr);
  })
  .then(function() {
    console.log(`Saved repos`);
  });

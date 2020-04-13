const api = {
  getUser(username) {
    // github API url
    // const queryUrl = `https://api.github.com/users/${username}/`;
    axios
      .get(queryUrl)
      .then(function(response){

      })
  }
};

module.exports = api;

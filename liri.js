require("dotenv").config();
var keys = require('./keys.js');
var twitter = require('twitter');
var request = require("request");
var spotifyNPM = require('node-spotify-api');
var spotify = new spotifyNPM(keys.spotify);
var client = new twitter(keys.twitter);
// variable for arguments
var nodeArgs = process.argv
console.log(nodeArgs);
if (nodeArgs[2] === "my-tweets") {
    var params = { screen_name: 'DseohGaTech' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (error) throw error;
        for (i = 0; i < 20; i++) {
            console.log(tweets[i].text)
        }
    });
}


// add if statement for "movie-this"
if (nodeArgs[2] === "movie-this") {
    // Create an empty variable for holding the movie name
    var movieName = "";

    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {

            movieName = movieName + "+" + nodeArgs[3];

        }

        else {

            movieName += nodeArgs[3];

        }
    }

    // Then run a request to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function (error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Release Year: " + JSON.parse(body).Year);
            console.log(JSON.parse(body).Ratings[0].Source + ": " + JSON.parse(body).Ratings[0].Value);
            console.log(JSON.parse(body).Ratings[1].Source + ": " + JSON.parse(body).Ratings[1].Value);
            console.log(JSON.parse(body).Country);
            console.log(JSON.parse(body).Language);
            console.log(JSON.parse(body).Plot);
            console.log(JSON.parse(body).Actors);
        }
    })
};
if (nodeArgs[2] === "spotify-this") {
    spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function (err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        console.log(data);


    })
};
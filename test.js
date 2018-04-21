require('dotenv').config();
var keys = require('./keys.js');
var spotifyNPM = require('node-spotify-api')
var spotify = new spotifyNPM(keys.spotify)
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    console.log(data);
    
 
});
const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  const playlists = this.playlists;
  for (const playlist in playlists) {
       let info = playlists[playlist];
       console.log(`${info.id}: ${info.name} - ${info.tracks.length} tracks`);
  }
};

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  const songs = this.tracks;
  for (const singles in songs) {
       let info = songs[singles];
       console.log(`${singles}: ${info.name} by ${info.artist} (${info.album})`);
  }
};



// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       let playlist = this.playlists;
       for (let p in playlist) {
         if (p === playlistId) {
           let info = playlist[p];
           console.log(`${info.id}: ${info.name} - ${info.tracks.length} tracks`);
           for(let song of info.tracks) {
             if (this.tracks[song]) {
             console.log(`${song}: ${this.tracks[song].name} by ${this.tracks[song].artist} (${this.tracks[song].album})`);
             }
           }
         }
       }
};



// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
   let track = Object.keys(this.tracks);
   for (let i of track) {
     if (i === trackId) {
       for (let p in this.playlists) {
         if (p === playlistId) {
           this.playlists[p].tracks.push(i);      
              }
         }
       }
   }
};


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
  let identity = generateUid();
  Object.assign(this.tracks, {identity:  {id: `${identity}`, "name": name, "artist": artist, "album": album}});
  console.log(this);
};



//addTrack("Two out of Three Ain't bad", "Meatloaf", "Bat Out of Hell")

// adds a playlist to the library
const addPlaylist = function(name) {
  let identity = generateUid();
  Object.assign(this.playlists, {identity: {id: `${identity}`, "name": name, "tracks": []}});
  console.log(this);
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}
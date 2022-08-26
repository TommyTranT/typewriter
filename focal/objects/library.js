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

// printPlaylists
// print all avalible playlist (p01/p02) (library.playlists)
const printAllPlaylist = () => {
       console.log(library.playlists)
}

// printAllPlaylist();

//----------------------------------------------------------
// printTracks
// print all avalible tracks (t01/t02/t03) (library.tracks)
const printAllTracks = () => {
       console.log(library.tracks);
}

// printAllTracks();

//----------------------------------------------------------
// printPlaylist
// Print the tracks on one playlist (t01/t02) (library.playlists.p01/p02)
// function would loop through p01 and p02. if match, console log. If no matches, return error message. 

console.log(library.playlists.p01)

// addTrackToPlaylist
// add a existing track to an existing playlist (t03) (library.playlist.p01)

// addTrack
// add a new track

// addPlaylist
// add a new playlist

// printSearchResults (stretch)
// create a search function. 
// searching for just the tracks?
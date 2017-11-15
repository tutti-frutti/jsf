var player = document.getElementsByClassName('player')[0];
var songs = [];

for (var i = 0; i < playlist.length; i++) {
    var path = playlist[i].path;
    songs[i] = path;
};

var currentSong = songs[2];
console.log(currentSong);
var currentSongTime = currentSong.duration;
player.setAttribute('src', currentSong);

function duration()
{
    var audio = document.getElementsByClassName('player')[0];
    if(audio.readyState > 0) 
    {
        var minutes = parseInt(audio.duration / 60, 10);
        var seconds = parseInt(audio.duration % 60);
        
        alert(minutes+":"+seconds);
    }
}

duration();
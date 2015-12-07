loadAudio = function(names) {
    songs = [];
    for (i=0; i<names.length; i++){
        var song = new Audio(names[i]);
        song.loop = true;
        songs[i] = song;
    }
    return songs;
}

playAudio = function(songs, idx) {
    if (typeof Song !== 'undefined'){
        Song.pause();
    }
    Song = songs[idx]
    Song.play()
}

simpleD = function(text, className) {
    text = typeof text !== 'undefined' ? text : '';
    className = typeof className !== 'undefined' ? className : '';
    var node = document.createElement("div");
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    node.className = className;
    document.getElementById("main").appendChild(node);
    return node;
}
names = ["/static/audio/Pokemon-Theme-Song.mp3",
        "/static/audio/Sonic-Theme-Song.mp3",
        "/static/audio/eecs-intro.mp3"]
songs = loadAudio(names)

buttonPrime = simpleD('Pokemon', 'btn btn-primary')
buttonSecond = simpleD('Sonic', 'btn btn-warning')
buttonThird= simpleD('EECS', 'btn btn-danger')

buttonPrime.addEventListener('click', function() {
    playAudio(songs, 0)
}, false);

buttonSecond.addEventListener('click', function() {
   playAudio(songs, 1)
}, false);

buttonThird.addEventListener('click', function() {
   playAudio(songs, 2)
}, false);

playAudio(songs, 1);




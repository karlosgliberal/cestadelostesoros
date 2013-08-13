var iframe = $('#player1')[0];
var player = $f(iframe);


// When the player is ready, add listeners for pause, finish, and playProgress
player.addEvent('ready', function() {
      console.log('ready');
    player.addEvent('pause', onPause);
    player.addEvent('finish', onFinish);
    player.addEvent('playProgress', onPlayProgress);
});

// Call the API when a button is pressed
$('button').bind('click', function() {
    player.api($(this).text().toLowerCase());
});

function onPause(id) {
      console.log('pause');
}

function onFinish(id) {
    console.log('finished');
}

function onPlayProgress(data, id) {
        console.log(data.seconds + 's played');
}


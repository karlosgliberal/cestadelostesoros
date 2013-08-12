(function(){

    // Listen for the ready event for any vimeo video players on the page
    var vimeoPlayers = document.querySelectorAll('iframe'),
        player;
    for (var i = 0, length = vimeoPlayers.length; i < length; i++) {
        player = vimeoPlayers[i];
        $f(player).addEvent('ready', ready);
    }

    /**
     * Utility function for adding an event. Handles the inconsistencies
     * between the W3C method for adding events (addEventListener) and
     * IE's (attachEvent).
     */
    function addEvent(element, eventName, callback) {
        if (element.addEventListener) {
            element.addEventListener(eventName, callback, false);
        }
        else {
            element.attachEvent(eventName, callback, false);
        }
    }

    /**
     * Called once a vimeo player is loaded and ready to receive
     * commands. You can add events and make api calls only after this
     * function has been called.
     */
    function ready(player_id) {
        // Keep a reference to Froogaloop for this player
        var container = document.getElementById(player_id).parentNode.parentNode,
            froogaloop = $f(player_id);

        /**
         * Prepends log messages to the example console for you to see.
         */
        function apiLog(message) {
            console.log(message);
        }

        /**
         * Sets up the actions for the buttons that will perform simple
         * api calls to Froogaloop (play, pause, etc.). These api methods
         * are actions performed on the player that take no parameters and
         * return no values.
         */
        function setupSimpleButtons() {
            var buttons = container.querySelector('div dl.simple'),
                playBtn = buttons.querySelector('.play'),
                pauseBtn = buttons.querySelector('.pause'),
                unloadBtn = buttons.querySelector('.unload');

            // Call play when play button clicked
            addEvent(playBtn, 'click', function() {
                froogaloop.api('play');
            }, false);

            // Call pause when pause button clicked
            addEvent(pauseBtn, 'click', function() {
                froogaloop.api('pause');
            }, false);

            // Call unload when unload button clicked
            addEvent(unloadBtn, 'click', function() {
                froogaloop.api('unload');
            }, false);
        }

        /**
         * Adds listeners for the events that are checked. Adding an event
         * through Froogaloop requires the event name and the callback method
         * that is called once the event fires.
         */
        function setupEventListeners() {
            var checkboxes = container.querySelector('.listeners'),
                loadProgressChk = checkboxes.querySelector('.loadProgress'),
                playProgressChk = checkboxes.querySelector('.playProgress'),
                playChk = checkboxes.querySelector('.play'),
                pauseChk = checkboxes.querySelector('.pause'),
                finishChk = checkboxes.querySelector('.finish'),
                seekChk = checkboxes.querySelector('.seek');

            function onLoadProgress() {
                if (loadProgressChk.checked) {
                    froogaloop.addEvent('loadProgress', function(data) {
                        apiLog('loadProgress event : ' + data.percent + ' : ' + data.bytesLoaded + ' : ' + data.bytesTotal + ' : ' + data.duration);
                    });
                }
                else {
                    froogaloop.removeEvent('loadProgress');
                }
            }

            function onPlayProgress() {
                if (playProgressChk.checked) {
                    froogaloop.addEvent('playProgress', function(data) {
                        apiLog('playProgress event : ' + data.seconds + ' : ' + data.percent + ' : ' + data.duration);
                    });
                }
                else {
                    froogaloop.removeEvent('playProgress');
                }
            }

            function onPlay() {
                if (playChk.checked) {
                    froogaloop.addEvent('play', function(data) {
                        apiLog('play event');
                    });
                }
                else {
                    froogaloop.removeEvent('play');
                }
            }

            function onPause() {
                if (pauseChk.checked) {
                    froogaloop.addEvent('pause', function(data) {
                        apiLog('pause event');
                    });
                }
                else {
                    froogaloop.removeEvent('pause');
                }
            }

            function onFinish() {
                if (finishChk.checked) {
                    froogaloop.addEvent('finish', function(data) {
                        apiLog('finish');
                    });
                }
                else {
                    froogaloop.removeEvent('finish');
                }
            }

            function onSeek() {
                if (seekChk.checked) {
                    froogaloop.addEvent('seek', function(data) {
                        apiLog('seek event : ' + data.seconds + ' : ' + data.percent + ' : ' + data.duration);
                    });
                }
                else {
                    froogaloop.removeEvent('seek');
                }
            }

            // Listens for the checkboxes to change
            addEvent(loadProgressChk, 'change', onLoadProgress, false);
            addEvent(playProgressChk, 'change', onPlayProgress, false);
            addEvent(playChk, 'change', onPlay, false);
            addEvent(pauseChk, 'change', onPause, false);
            addEvent(finishChk, 'change', onFinish, false);
            addEvent(seekChk, 'change', onSeek, false);

            // Calls the change event if the option is checked
            // (this makes sure the checked events get attached on page load as well as on changed)
            onLoadProgress();
            onPlayProgress();
            onPlay();
            onPause();
            onFinish();
            onSeek();
        }

        /**
         * Sets up actions for adding a new clip window to the page.
         */
        function setupAddClip() {
            var button = container.querySelector('.addClip'),
                newContainer;

            addEvent(button, 'click', function(e) {
                // Don't do anything if clicking on anything but the button (such as the input field)
                if (e.target != this) {
                    return false;
                }

                // Gets the index of the current player by simply grabbing the number after the underscore
                var currentIndex = parseInt(player_id.split('_')[1]),
                    clipId = button.querySelector('input').value;

                newContainer = resetContainer(container.cloneNode(true), currentIndex+1, clipId);

                container.parentNode.appendChild(newContainer);
                $f(newContainer.querySelector('iframe')).addEvent('ready', ready);
            });

            /**
             * Resets the duplicate container's information, clearing out anything
             * that doesn't pertain to the new clip. It also sets the iframe to
             * use the new clip's id as its url.
             */
            function resetContainer(element, index, clipId) {
                var newHeading = element.querySelector('h2'),
                    newIframe = element.querySelector('iframe'),
                    newCheckBoxes = element.querySelectorAll('.listeners input[type="checkbox"]'),
                    newApiConsole = element.querySelector('.console .output'),
                    newAddBtn = element.querySelector('.addClip');

                // Set the heading text
                newHeading.innerText = 'Vimeo Player ' + index;

                // Set the correct source of the new clip id
                newIframe.src = 'http://player.vimeo.com/video/' + clipId + '?api=1&player_id=player_' + index;
                newIframe.id = 'player_' + index;

                // Reset all the checkboxes for listeners to be checked on
                for (var i = 0, length = newCheckBoxes.length, checkbox; i < length; i++) {
                    checkbox = newCheckBoxes[i];
                    checkbox.setAttribute('checked', 'checked');
                }

                // Clear out the API console
                newApiConsole.innerHTML = '';

                // Update the clip ID of the add clip button
                newAddBtn.querySelector('input').setAttribute('value', clipId);

                return element;
            }
        }

        setupSimpleButtons();

        setupEventListeners();

        // Setup clear console button
        var clearBtn = container.querySelector('.console button');
        addEvent(clearBtn, 'click', function(e) {
            apiConsole.innerHTML = '';
        }, false);

        apiLog(player_id + ' ready!');
    }
  })();
var EventEmitter = require('events').EventEmitter;
var controller = new EventEmitter();
var player = new EventEmitter();

process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');

process.stdin.on('data', function(data) {
    var text = data.trim();

    if (data === 'quit\n') {
        done();
        return;
    }
    player.emit(text);
});

function done() {
    console.log('Now that process.stdin is paused, there is nothing to do');
    process.exit();
}

controller.on('input', function(input) {
    switch (input) {
        case '1':
            player.emit('1');
            break;
        case '2':
            player.emit('2');
            break;
        case '3':
            player.emit('3');
            break;
    }
});

controller.on('beginLogin', function(){
	console.log('Controller: \"Oh boy I sure am ready to log you in!\"');
});

controller.on('newPlayer', function(){
	console.log('Controller: \"My two favorite smells in the world, new car and new player!\"');
});

controller.on('logout', function(){
	console.log('Controller: \"Hate to see you leave, but I love to watch you walk away\".');
});

player.on('1', function() {
	console.log('login');
	controller.emit('beginLogin');
	}
);
player.on('2', function() {
	console.log('new player');
	controller.emit('newPlayer'); 
	}
);
player.on('3', function() {
	console.log('logout');
	controller.emit('logout') 
	}
);

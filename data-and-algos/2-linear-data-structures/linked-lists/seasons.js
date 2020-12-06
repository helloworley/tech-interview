const LinkedList = require('./LinkedList.js');

const seasons = new LinkedList();

seasons.addToHead('Summer');
seasons.addToHead('Spring');
seasons.addToTail('Autumn');
seasons.addToTail('Winter');
seasons.removeHead();
seasons.printList();
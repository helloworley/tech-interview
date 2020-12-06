const runway = require('./runway.js');

const flights = [
  'Botswana Bird flight #345',
  'Singapore Skies flight #890',
  'Mexico Mirage flight #234',
  'Greenland Flying Seals flight #567'
];

// Enqueue runway with planes
const departing = runway.load(flights);
console.log('departing', departing);
// Clear each plane to takeoff
runway.clear(departing);
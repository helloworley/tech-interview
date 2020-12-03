const HashMap = require('./HashMap.js');

const glossary = new HashMap(3);
glossary.assign('semordnilap', 'Words that form different words when reversed');
console.log(glossary.retrieve('semordnilap'));
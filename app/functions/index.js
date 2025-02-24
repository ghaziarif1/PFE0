const functions = require('firebase-functions');
const taskFunctions = require('./taskFunctions');
const speechToTextFunctions = require('./speechToTextFunctions');

exports.addTask = taskFunctions.addTask;
exports.transcribeAudio = speechToTextFunctions.transcribeAudio;
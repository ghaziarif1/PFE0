const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp();

exports.addTask = functions.https.onRequest(async (req, res) => {
    const task = req.body;

    // Validate task data
    if (!task.title || !task.content) {
        res.status(400).send('Invalid task data');
        return;
    }

    await admin.firestore().collection('tasks').add(task);
    res.status(200).send('Task added');
});

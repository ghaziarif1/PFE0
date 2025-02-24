const admin = require('firebase-admin');
admin.initializeApp();

exports.addTask = functions.https.onRequest(async (req, res) => {
    const task = req.body;
    await admin.firestore().collection('tasks').add(task);
    res.status(200).send('Task added');
});
const functions = require('firebase-functions');
const { SpeechClient } = require('@google-cloud/speech');

const client = new SpeechClient();

exports.transcribeAudio = functions.https.onRequest(async (req, res) => {
    const audio = req.body.audio; // Assume audio is in base64
    if (!audio) {
        res.status(400).send('Audio data is missing');
        return;
    }

    const request = {
        audio: {
            content: audio,
        },
        config: {
            encoding: 'LINEAR16',
            sampleRateHertz: 16000,
            languageCode: 'en-US',
        },
    };

    try {
        const [response] = await client.recognize(request);
        const transcription = response.results
            .map(result => result.alternatives[0].transcript)
            .join('\n');
        res.status(200).send(transcription);
    } catch (error) {
        console.error('Error transcribing audio:', error);
        res.status(500).send('Error transcribing audio');
    }
});

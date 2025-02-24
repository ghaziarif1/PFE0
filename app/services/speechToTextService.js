import * as Speech from 'expo-speech';
import { SpeechClient } from '@google-cloud/speech';

const client = new SpeechClient();

export const transcribeAudio = async (audioUri) => {
    const audioBytes = await fetch(audioUri)
        .then(response => response.arrayBuffer())
        .then(buffer => Buffer.from(buffer).toString('base64'));

    const request = {
        audio: {
            content: audioBytes,
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
        return transcription;
    } catch (error) {
        console.error('Error transcribing audio:', error);
        throw new Error('Error transcribing audio');
    }
};

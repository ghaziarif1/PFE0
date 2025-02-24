import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { Audio } from 'expo-av';

const AudioRecorder = () => {
    const [recording, setRecording] = useState(null);

    const startRecording = async () => {
        try {
            const { status } = await Audio.requestPermissionsAsync();
            if (status === 'granted') {
                const { recording } = await Audio.Recording.createAsync();
                setRecording(recording);
            }
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    };

    const stopRecording = async () => {
        setRecording(null);
        await recording.stopAndUnloadAsync();
    };

    return (
        <View>
            <Button title="Start Recording" onPress={startRecording} />
            <Button title="Stop Recording" onPress={stopRecording} disabled={!recording} />
        </View>
    );
};

export default AudioRecorder;
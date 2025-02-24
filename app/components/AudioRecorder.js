import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { Audio } from 'expo-av';

const AudioRecorder = () => {
    const [recording, setRecording] = useState(null);

    const startRecording = async () => {
        try {
            const { status } = await Audio.requestPermissionsAsync();
            if (status === 'granted') {
                const recordingOptions = {
                    android: {
                        extension: '.m4a',
                        outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
                        audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
                        sampleRate: 44100,
                        numberOfChannels: 2,
                        bitRate: 128000,
                    },
                    ios: {
                        extension: '.caf',
                        audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
                        sampleRate: 44100,
                        numberOfChannels: 2,
                        bitRate: 128000,
                        linearPCMBitDepth: 16,
                        linearPCMIsBigEndian: false,
                        linearPCMIsFloat: false,
                    },
                };
                const { recording } = await Audio.Recording.createAsync(recordingOptions);
                setRecording(recording);
            }
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    };

    const stopRecording = async () => {
        if (recording) {
            await recording.stopAndUnloadAsync();
            setRecording(null);
        }
    };

    return (
        <View>
            <Button title="Start Recording" onPress={startRecording} />
            <Button title="Stop Recording" onPress={stopRecording} disabled={!recording} />
        </View>
    );
};

export default AudioRecorder;

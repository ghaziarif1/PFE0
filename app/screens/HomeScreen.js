import React from 'react';
import { View, Text } from 'react-native';
import AudioRecorder from '../components/AudioRecorder';
import TaskList from '../components/TaskList';

const HomeScreen = () => {
    const tasks = [
        { id: '1', title: 'Tâche 1', content: 'Contenu de la tâche 1' },
        { id: '2', title: 'Tâche 2', content: 'Contenu de la tâche 2' },
        { id: '3', title: 'Tâche 3', content: 'Contenu de la tâche 3' },
    ];

    return (
        <View>
            <Text>Task Manager</Text>
            <AudioRecorder />
            <TaskList tasks={tasks} />
        </View>
    );
};

export default HomeScreen;
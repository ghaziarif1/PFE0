import React from 'react';
import { View, Text } from 'react-native';

const TaskDetailScreen = ({ route }) => {
    const { task } = route.params;

    return (
        <View>
            <Text>{task.title}</Text>
            <Text>{task.content}</Text>
        </View>
    );
};

export default TaskDetailScreen;
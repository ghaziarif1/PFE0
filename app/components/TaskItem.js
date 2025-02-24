import React from 'react';
import { View, Text } from 'react-native';

const TaskItem = ({ task }) => {
    return (
        <View>
            <Text>{task.title}</Text>
            <Text>{task.content}</Text>
        </View>
    );
};

export default TaskItem;
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const TaskList = ({ tasks }) => {
    return (
        <FlatList
            data={tasks}
            renderItem={({ item }) => (
                <View>
                    <Text>{item.title}</Text>
                    <Text>{item.content}</Text>
                </View>
            )}
            keyExtractor={item => item.id}
        />
    );
};

export default TaskList;
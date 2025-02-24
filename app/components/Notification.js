import React from 'react';
import { View, Text } from 'react-native';

const Notification = ({ message }) => {
    return (
        <View>
            <Text>{message}</Text>
        </View>
    );
};

export default Notification;
import firestore from '@react-native-firebase/firestore';

const tasksCollection = firestore().collection('tasks');

export const getTasks = async () => {
    const snapshot = await tasksCollection.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addTask = async (task) => {
    await tasksCollection.add(task);
};
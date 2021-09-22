import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Task from "./components/Task";

export default function App() {
    const [task, setTask] = useState('')
    const [taskItem, setTaskItem] = useState([])

    const taskHandler = (text) => {
        if (text.length > 27) return
        setTask(text)
    }
    const addTaskHandler = () => {
        if (task.length < 1) return
        setTaskItem([...taskItem, task])
        setTask('')
    }
    const deleteTaskHandler = (index) => {
        let itemsCopy = [...taskItem]
        itemsCopy.splice(index, 1)
        setTaskItem(itemsCopy)
    }

    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Today task</Text>
                {taskItem[0] ? null : <Text>you not have task</Text>}
                <View style={styles.items}>
                    {taskItem.map((task, key) => {
                        return (
                            <TouchableOpacity key={key} onPress={() => deleteTaskHandler(key)}>
                                <Task text={task}/>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.writeTaskWrapper}
            >
                <TextInput style={styles.input} placeholder={'Write task'} value={task}
                           onChangeText={text => taskHandler(text)}/>
                <TouchableOpacity onPress={() => addTaskHandler()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        padding: 15,
        backgroundColor: '#FFF',
        width: 250,
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1
    },
    addText: {}
});

import React from 'react';
import {Text, View, StyleSheet} from "react-native";

const Task = ({text}) => {
    return (
        <View style={styles.items}>
            <View style={styles.itemLeft}>
                <View style={styles.square}>

                </View>
                <Text style={styles.itemText}>{text}</Text>
            </View>
            <View style={styles.itemRight}>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    items: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        opacity: 0.4,
        backgroundColor: '#55BCF6',
        borderRadius: 5,
        marginRight: 15
    },
    itemText: {
        maxWidth: '80%'
    },
    itemRight: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: '50%'
    }
})

export default Task;
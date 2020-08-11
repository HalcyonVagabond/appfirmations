import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


export default function MainMenu() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: 'white',
    },
    text: {
        backgroundColor: 'dodgerblue',
        padding: 10,
        borderRadius: 50,
    },
});
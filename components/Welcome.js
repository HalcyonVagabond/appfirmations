import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';

export default function Welcome() {

    const [openedAnimation, setOpenedAnimation] = useState(false)

    useEffect(() => {
        setOpenedAnimation(true)
    });

    const moveLogo = useRef(new Animated.Value(0)).current;
    const moveWords = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.stagger(250, [
            Animated.timing(moveLogo, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(moveWords, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(moveWords, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start();
    };

    fadeIn();

    return (
        <Animated.View style={styles.container}>
            <Animated.Image
                style={[styles.logo,
                {
                    opacity: moveLogo,
                    transform: [{
                        translateY: moveLogo.interpolate({
                            inputRange: [0, 1],
                            outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
                        })
                    }]
                }]}
                source={require('../assets/AppfirmationsLogoSolo.png')} />
            <Animated.Image
                style={[styles.logoText,
                {
                    opacity: moveWords,
                    transform: [{
                        translateY: moveWords.interpolate({
                            inputRange: [0, 1],
                            outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
                        })
                    }]
                }]}
                source={require('../assets/AppfirmationsLetters.png')} />

            <StatusBar style="auto" />
        </Animated.View>
    );
}

const dimensions = Dimensions.get('screen');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#01354e',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: imageWidth,
        height: imageHeight,
        resizeMode: 'contain',
        marginBottom: 20

    },
    logoText: {
        width: imageWidth - 50,
        height: imageHeight,
        resizeMode: 'contain',
    }
});
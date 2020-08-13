import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function LoginPage() {

    const [credentials, setCredentials] = useState({ email: "", password: "" });

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>APPfirmations</Text>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Email..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setCredentials({ email: text })} />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => {
                        setCredentials({ password: text })
                        console.log(credentials.password)
                    }} />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.loginText}>Signup</Text>
            </TouchableOpacity>


        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C2BBF0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#3590F3",
        marginBottom: 40
    },
    inputView: {
        width: "80%",
        backgroundColor: "#62BFED",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "#F1E3F3"
    },
    forgot: {
        color: "#F1E3F3",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#3590F3",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "#F1E3F3"
    }
});
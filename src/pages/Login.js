import React from 'react';
import { TextInput, SafeAreaView, StyleSheet, Text } from 'react-native';

const Login = () => {
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);

    return (
        <SafeAreaView>
            <Text h1
                style={styles.h1}
            >
                Fazer Login
                </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Email"
                autoCompleteType="email"
                placeholderTextColor="white"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Senha"
                autoCompleteType="password"
                placeholderTextColor="white"
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        color: 'aliceblue',
        backgroundColor: '#102660',
        borderColor: '#102660',
        borderRadius: 30,
        height: 40,
        margin: 12,
        marginLeft: 30,
        marginRight: 30,
        borderWidth: 1,
    },
    h1: {
        fontSize: 16,
        fontStyle: 'normal',
        display: 'flex',
        marginLeft: 160,
        height: '20%',
        fontWeight: 'bold',
        color: '#00081d',
        alignItems: 'center',
    },
});

export default Login;
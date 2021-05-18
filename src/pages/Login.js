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
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Senha"
                autoCompleteType="password"
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
        marginBot: 3,
        marginTop: 3,
        padding: '5% 20%',
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
        marginLeft: 130,
        fontWeight: 'bold',
        color: '#00081d',
        marginBottom: 60,
        marginTop: 5,
        alignItems: 'center',
    },
});

export default Login;
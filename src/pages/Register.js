import React, { useState } from "react";
import { TextInput, SafeAreaView, StyleSheet, Text, Button, View, Image, CheckBox, TouchableOpacity } from 'react-native';

const Register = ({ navigation }) => {
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const [isSelected, setSelection] = useState(false);


    return (
        <SafeAreaView style={styles.container}>
            <Text h1
                style={styles.h1}
            >
                Criar uma conta
                </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder=" Nome Completo"
                autoCompleteType="email"
                placeholderTextColor="white"
                
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder=" Email"
                autoCompleteType="password"
                placeholderTextColor="white"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder=" Vocé é"
                autoCompleteType="email"
                placeholderTextColor="white"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder=" Senha"
                autoCompleteType="password"
                placeholderTextColor="white"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder=" Confirmar Senha"
                autoCompleteType="password"
                placeholderTextColor="white"
            />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.TextButton}>
                    Criar Conta
                </Text>
            </TouchableOpacity>
            <Text
                style={styles.h2}
                onPress={() => navigation.navigate('Recover')}
            >

                Ao se cadastrar, você concorda com os Termos de Serviço e a Política de Privacidade.    
            </Text>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
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
        marginLeft: 130,
        height: '15%',
        fontWeight: 'bold',
        color: '#00081d',
        alignItems: 'center',
        top: 20,
    },
    h2: {
        flex: 1,
        justifyContent: 'center',
        fontSize: 16,
        fontStyle: 'normal',
        display: 'flex',
        height: '15%',
        fontWeight: 'bold',
        color: '#00081d',
        alignItems: 'center',
    },
    button: {//Botão para Entrar
        backgroundColor: '#102660',
        borderColor: '#102660',
        borderRadius: 30,
        height: 40,
        margin: 5,
        marginLeft: 80,
        marginRight: 80,
        borderWidth: 1,
    },
    buttonG: {//Botão Grande
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
    tinyLogo: {
        marginLeft: 110,
        bottom: 5,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        marginLeft: 100,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
    TextButton: {
        fontSize: 16,
        paddingTop: 7,
        fontStyle: 'normal',
        color: 'white',
        textAlignVertical: "center",
        textAlign: "center",
    }
});

export default Register;
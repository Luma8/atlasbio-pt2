import React, { useState } from "react";
import { TextInput, SafeAreaView, StyleSheet, Text, View, Image, CheckBox, TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const [isSelected, setSelection] = useState(false);


    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../../public/img/logo.png')}
            />
            <Text h1
                style={styles.h1}
            >
                Fazer Login
                </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder=" Email"
                autoCompleteType="email"
                placeholderTextColor="white"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder=" Senha"
                placeholderTextColor="white"
                autoCompleteType="password"
            />
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Lembrar Senha?</Text>
            </View>
            <Text h1
                style={styles.Ou}
            >
                Ou
                </Text>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.TextButton}>
                        Entrar
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonG}>
                    <Text style={styles.TextButton}>
                        Continuar com Google
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonG} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.TextButton}>
                        Novo usuario Crie uma Conta
                </Text>
                </TouchableOpacity>
            </View>
            <Text
                style={styles.h2}
                onPress={() => navigation.navigate('Recover')}
            >
                Esqueceu sua senha? Clique aqui
            </Text>
        </View>

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
        marginLeft: 145,
        height: '15%',
        fontWeight: 'bold',
        color: '#00081d',
        alignItems: 'center',
        top: 20,
    },
    h2: {
        fontSize: 16,
        fontStyle: 'normal',
        display: 'flex',
        marginLeft: 50,
        height: '15%',
        fontWeight: 'bold',
        color: '#00081D',
        alignItems: 'center',
    },
    Ou: {
        marginLeft: 175,
        fontSize: 16,
        color: '#00081d',
    },
    button: {//Botão para Entrar
        backgroundColor: '#102660',
        borderColor: '#102660',
        borderRadius: 30,
        height: 40,
        margin: 5,
        marginLeft: 145,
        marginRight: 145,
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

export default Login;
import React, { useState } from "react";
import { TextInput, SafeAreaView, StyleSheet, Text, Button, View, Image, CheckBox } from 'react-native';

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
                autoCompleteType="email"
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

            <View style={styles.button}>
           <Button
                title="Criar Conta"
                color="#102660"
                onPress={ () => navigation.navigate('Login')}
         />
         </View>
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
        marginLeft: 125,
        height: '10%',
        fontWeight: 'bold',
        color: '#00081d',
        alignItems: 'center',
    },
    button: {//Botão para Entrar
        color: 'aliceblue',
        backgroundColor: '#102660',
        borderColor: '#102660',
        borderRadius: 30,
        height: 40,
        margin: 12,
        marginLeft: 145,
        marginRight: 145,
        borderWidth: 1,
        fontStyle: 'normal', 
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
        width: 50,
        height: 50,
        marginLeft: 145,
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
});

export default Register;
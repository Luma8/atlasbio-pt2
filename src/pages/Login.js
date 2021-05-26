import React, { useState } from "react";
import { TextInput, SafeAreaView, StyleSheet, Text, Button, View, Image, CheckBox } from 'react-native';

const Login = ({ navigation }) => {
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const [isSelected, setSelection] = useState(false);
    

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={{
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
            }}
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
                autoCompleteType="password"
                placeholderTextColor="white"
            />
            <View style={styles.checkboxContainer}>
                <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
                />
                <Text style={styles.label}>Lembrar Senha?</Text>
            </View>
            <View style={styles.button}>
           <Button
                title="Entrar"
                color="#102660"
               
         />
            </View>
            <View style={styles.buttonG}>
           <Button
                title="Continuar com o Google"
                color="#102660"
                //onPress={() => Alert.alert('Cannot press this one')}
         />
            </View>
            <View style={styles.buttonG}>
           <Button
                title="Novo usuario crie uma conta"
                color="#102660"
                onPress={ () => navigation.navigate('Register')}
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
        marginLeft: 145,
        height: '15%',
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

export default Login;
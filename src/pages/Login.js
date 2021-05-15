import React from 'react';
import { Container, Title, Title1, Botao, Div1, Inputs } from '../components/styles';
import { Button, TextInput, Image, email, password } from 'react-native';

export default function Login({ navigation }){
    return(
        <Container>
            <Div1>
                <Title1 h1>
                    Fazer login
                </Title1>
                <Inputs
                   placeholder="Email"
                />
                 <Inputs
                   placeholder="Senha"
                />
                
            </Div1>
            <Title>
                LOGIN
            </Title>
            <Botao
                title="Entra"
                onPress={() => navigation.navigate('Register')} 
                color="#21429d"
            />
        </Container>
    );
}
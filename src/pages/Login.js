import React from 'react';
import { Container, Title } from '../components/styles';
import { Button } from 'react-native';

export default function Login({ navigation }){
    return(
        <Container>
            <Title>
                LOGIN
            </Title>
            <Button
                title="Register"
                onPress={() => navigation.navigate('Register')} 
            />
        </Container>
    );

}
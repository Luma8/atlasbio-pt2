import React, { } from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View, ScrollView } from 'react-native';

const Home = ({ navigation }) => {

    return (

        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            <View style={styles.holderTitle}>
                <Text style={styles.h2}>
                    Anatomia e Fisiologia Humana
           </Text>

            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.item} style={styles.warpper}>
                    <Image
                        style={styles.item2}
                        style={styles.mb5}
                        source={require('../../public/img/cintologia1.png')}
                    />
                    <TouchableOpacity style={styles.btnPrimary}>

                    </TouchableOpacity>

                    <Image
                        style={styles.item2}
                        style={styles.mb5}
                        source={require('../../public/img/cintologia2.png')}
                    />
                    <TouchableOpacity style={styles.btnPrimary}>

                    </TouchableOpacity>

                    <Image
                        style={styles.item2}
                        style={styles.mb5}
                        source={require('../../public/img/cintologia3.png')}
                    />
                    <TouchableOpacity style={styles.btnPrimary}>

                    </TouchableOpacity>

                </View>
            </ScrollView>
        </ScrollView >

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
    },
    btnPrimary: {//Botão para Entrar
        backgroundColor: '#102660',
        borderColor: '#102660',
        color: 'aliceblue',
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 20,
        padding: 25,
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
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },
    holderTitle: {
        backgroundColor: '#102660',
        padding: 10,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        marginBottom: 5,
        marginTop: 5,
    },
    mb5: {
        marginTop: 30,
        marginLeft: 17
    },
    item: {
        maxWidth: 410,
        width: 95,
        textAlign: 'center',
        marginRight: 4,
        alignContent: 'space-between',
    },
    warpper: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
});

export default Home;
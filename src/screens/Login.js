import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { AuthContext } from '../helpers/AuthContext';
const SCREEN = Dimensions.get('window')

const Login = ({ navigation, ...props }) => {

    const _toRegistration = () => {
        // navigation.navigate('Register')
        alert(email)
    }

    const { signIn } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.innerStyle}>

                <TextInput
                    label='Email'
                    onChangeText={setEmail}
                />
                <Button mode="contained" onPress={() => signIn({ email })}>
                    Press me
                </Button>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    innerStyle: {
        marginLeft: SCREEN.width / 25,
        marginRight: SCREEN.width / 25
    }
});


export default Login;
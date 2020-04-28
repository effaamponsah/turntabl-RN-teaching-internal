import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Text, Dimensions, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Button, TextInput, Appbar } from 'react-native-paper';
import { AuthContext } from '../helpers/AuthContext';
const SCREEN = Dimensions.get('window')

const Register = ({ navigation, ...props }) => {

    const _toRegistration = () => {
        // navigation.navigate('Register')
        alert(email)
    }

    const { signUp } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')

    const _goBack = () => navigation.pop();


    return (
        <View style={styles.container}>
            <Appbar.Header dark={true}>
                <Appbar.BackAction
                    onPress={_goBack}
                />
                <Appbar.Content
                    title="Register"
                />
            </Appbar.Header>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.innerStyle}>
                    <View>
                        <TextInput
                            mode='outlined'
                            label='Name'
                            onChangeText={setUserName}
                            autoCompleteType='name'
                        />
                    </View>

                    <View style={{ marginTop: SCREEN.height / 40 }}>
                        <TextInput
                            mode='outlined'
                            label='Email'
                            keyboardType='email-address'
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={{ marginTop: SCREEN.height / 40 }}>
                        <TextInput
                            mode='outlined'
                            label='Password'
                            secureTextEntry={true}
                            onChangeText={setPassword}
                            autoCompleteType='password'
                        />
                    </View>


                    <View style={{ marginTop: SCREEN.height / 40 }}>
                        <Button
                            dark={true}
                            style={{ height: 45, justifyContent: 'center' }}
                            uppercase={false} mode="contained" onPress={() => signUp({ userName, email, password })}>
                            Register
                </Button>
                    </View>


                </View>
            </TouchableWithoutFeedback>
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
        // marginLeft: SCREEN.width / 25,
        // marginRight: SCREEN.width / 25,
        // marginTop: SCREEN.height / 8,
        paddingLeft: SCREEN.width / 25,
        paddingRight: SCREEN.width / 25,
        paddingTop: SCREEN.height / 8,

    }
});


export default Register;
import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Dimensions, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Button, TextInput, Appbar, Text, } from 'react-native-paper';
import { AuthContext } from '../helpers/AuthContext';
const SCREEN = Dimensions.get('window')

const ResetPassword = ({ navigation, ...props }) => {

    const { resetPass } = useContext(AuthContext)

    const [email, setEmail] = useState('')

    const _goBack = () => navigation.pop();


    return (
        <View style={styles.container}>
            <Appbar.Header dark={true}>
                <Appbar.BackAction
                    onPress={_goBack}
                />
                <Appbar.Content
                    title="ResetPassword"
                />
            </Appbar.Header>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.innerStyle}>
                    <View>
                        <TextInput
                            mode='outlined'
                            label='Email'
                            keyboardType='email-address'
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={{ marginTop: SCREEN.height / 30 }}>
                        <Button
                            dark={true}
                            style={{ height: 45, justifyContent: 'center' }}
                            uppercase={false} mode="contained" onPress={() => resetPass({ email })}>
                            Recover Password
                        </Button>
                    </View>

                    <View >
                        <Button uppercase={false} onPress={() => navigation.navigate('Register')}>
                            <Text>New here? </Text>
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


export default ResetPassword;
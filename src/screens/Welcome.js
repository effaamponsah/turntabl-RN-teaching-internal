import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Title, Paragraph, Caption, Button, Divider, Dialog, Portal } from 'react-native-paper';
import OnboardScreen from './Onboardcreen';

const SCREEN = Dimensions.get('window')
const Welcome = ({ navigation, ...props }) => {

    const [showDialog, setShowDialog] = useState(false)
    const [onBoard, setOnBoard] = useState(true)

    const skip = () => setOnBoard(false)

    if (onBoard == true) {
        return (
            <OnboardScreen
                skipped={skip}
            />
        )
    }

    const renderDialog = () => {
        return (
            <View>
                <Portal>
                    <Dialog
                        visible={showDialog}
                        onDismiss={() => setShowDialog(false)}>
                        <Dialog.Title>Errrm</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>We are heavily working on this feature and it will be available soon</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => setShowDialog(false)} uppercase={false}>Okay</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {/* SignUp */}
            <View style={styles.title}>
                <Title style={{ fontSize: 25 }}>Sign Up or Log In.</Title>
            </View>
            {/* Dont worry */}
            <View style={styles.paragraph}>
                <Paragraph>
                    Don't worry, we wont share your contact with the pro's
                </Paragraph>
            </View>
            {/* Caption */}
            <View style={{ marginTop: 20 }}>
                <Caption>By tapping on Continue with Facebook, Google, Email, you agree to the <Text style={{ color: '#18be6a', textDecorationLine: 'underline' }} onPress={() => alert("Yes")}>Terms of Service</Text> and <Text style={{ color: '#18be6a', textDecorationLine: 'underline' }} onPress={() => alert("Yes")}>Privacy Policy</Text>
                </Caption>
            </View>

            {/* Facebook button */}
            <View style={{ marginTop: 20 }}>
                <Button icon="facebook-box"
                    style={{ height: 45, justifyContent: 'center' }}
                    uppercase={false} mode="contained" onPress={() => setShowDialog(true)} color='#3b5999'>
                    Continue with Facebook
                </Button>
            </View>

            {/* Google button */}
            <View style={{ marginTop: 20 }}>
                <Button icon="google"
                    style={{ height: 45, justifyContent: 'center' }}
                    uppercase={false} mode='outlined' onPress={() => setShowDialog(true)} color='#000'>
                    Continue with Google
                </Button>
            </View>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <Caption>
                    Or
                </Caption>
            </View>
            {/* Email button */}
            <View style={{ marginTop: 20 }}>
                <Button
                    dark={true}
                    style={{ height: 45, justifyContent: 'center' }}
                    uppercase={false} mode="contained" onPress={() => navigation.push('Login')}>
                    Continue with Email
                </Button>
            </View>

            {renderDialog()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: SCREEN.width / 25,
        paddingRight: SCREEN.width / 25,
    },
    title: {
        marginTop: SCREEN.height / 5,

    },
    paragraph: {
        // width: 210, marginTop: 10
        width: SCREEN.width / 1.8,
        marginTop: 10
    }
})
export default Welcome;
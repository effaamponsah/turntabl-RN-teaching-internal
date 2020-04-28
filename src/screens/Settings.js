import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { AuthContext } from '../helpers/AuthContext';
const Settings = ({ ...props }) => {
    const { signOut } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <Text>This is the settings screen</Text>
            <Button dark={true} mode="contained" onPress={() => signOut()}>
                Log out
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default Settings;